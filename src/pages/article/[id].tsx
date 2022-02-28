import { getArticleIds, getMarkdownArticles } from "@/utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

type ArticleType = {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
};

type Props = {
  article: ArticleType;
  articles: ArticleType[];
};

const Article: NextPage<Props> = ({ article }) => {
  const MDX = dynamic(() => import(`@/articles/${article.id}.mdx`));
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div>
        <MDX />
      </div>
    </>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const articleIds = await getArticleIds();
  const paths = articleIds.map((path) => ({ params: { id: path } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const mdxArticles = await getMarkdownArticles();
  const articles = mdxArticles.map((article) => {
    return {
      id: article.id,
      title: article.data.title as string,
      date: article.data.date as string,
      category: article.data.category as string,
      content: article.content as string,
    };
  });

  const article = articles.find(
    (article) => article.id === ctx.params?.id,
  ) as ArticleType;

  return {
    props: {
      article,
      articles,
    },
  };
};
