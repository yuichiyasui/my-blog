import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXComponents } from "mdx/types";

import { getArticleIds, getMarkdownArticleById } from "@/utils";
import { ArticleLayout } from "@/components/layouts/ArticleLayout";
import { LargeHeading } from "@/components/ui/LargeHeading";
import { MiddleHeading } from "@/components/ui/MiddleHeading";
import { SmallHeading } from "@/components/ui/SmallHeading";

type ArticleMeta = {
  id: string;
  title: string;
  date: string;
  category: string;
};

type Props = {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
};

const mdxComponents: MDXComponents = {
  h2: (props) => <LargeHeading className="mb-4">{props.children}</LargeHeading>,
  h3: (props) => <MiddleHeading>{props.children}</MiddleHeading>,
  h4: (props) => <SmallHeading>{props.children}</SmallHeading>,
};

const Article: NextPage<Props> = ({ source, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div>
        <ArticleLayout meta={meta}>
          <MDXRemote {...source} components={mdxComponents} />
        </ArticleLayout>
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
  const mdxArticle = await getMarkdownArticleById(ctx.params?.id as string);
  const mdxSource = await serialize(mdxArticle.content, {
    parseFrontmatter: true,
  });
  const meta = { ...mdxArticle.data } as ArticleMeta;

  return {
    props: {
      source: mdxSource,
      meta,
    },
  };
};
