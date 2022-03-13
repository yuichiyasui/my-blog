import type { GetStaticProps, NextPage } from "next";
import { Top } from "@/components/pages/top";
import { getMarkdownArticles } from "@/utils";
import { ArticleMeta } from "@/types/article";

type Props = {
  articles: ArticleMeta[];
};

const TopPage: NextPage<Props> = ({ articles }) => {
  return <Top {...{ articles }} />;
};

export default TopPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = await getMarkdownArticles();
  return {
    props: {
      articles,
    },
  };
};
