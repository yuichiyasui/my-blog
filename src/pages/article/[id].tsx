import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import { getArticleIds, getMarkdownArticleById } from "@/utils";
import { ArticleMeta } from "@/types/article";
import { Article } from "@/components/pages/article";

type Props = {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
};

const ArticlePage: NextPage<Props> = ({ source, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <main>
        <Article {...{ meta, source }} />
      </main>
    </>
  );
};

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const articleIds = await getArticleIds();
  const paths = articleIds.map((path) => ({ params: { id: path } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const mdxArticle = await getMarkdownArticleById(ctx.params?.id as string);
  const mdxSource = await serialize(mdxArticle.content, {
    parseFrontmatter: true,
  });

  return {
    props: {
      source: mdxSource,
      meta: mdxArticle.meta,
    },
  };
};
