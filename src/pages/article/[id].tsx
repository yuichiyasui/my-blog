import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import { getArticleIds, getMarkdownArticleById } from "@/utils";
import { ArticleMeta } from "@/types/article";
import { Article } from "@/components/pages/article";
import { TITLE } from "@/constants";

type Props = {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
};

const ArticlePage: NextPage<Props> = ({ source, meta }) => {
  return (
    <>
      <NextSeo
        title={meta.title}
        openGraph={{
          type: "article",
          locale: "ja_JP",
          site_name: TITLE,
          title: meta.title,
          article: {
            tags: [meta.category],
            publishedTime: meta.date,
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_HOST}/articles/${meta.id}/main.jpg`,
              width: 1200,
              height: 630,
              alt: meta.title,
            },
          ],
        }}
      />
      <Article {...{ meta, source }} />
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
