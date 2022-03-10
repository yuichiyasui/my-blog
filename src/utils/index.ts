import path from "path";
import * as fs from "fs/promises";
import matter from "gray-matter";
import { ArticleMeta } from "@/types/article";

const ARTICLES_DIR = path.join(process.cwd(), "src/articles/");

export const getArticleIds = async () => {
  const articleFileNames = await fs.readdir(ARTICLES_DIR);
  const articleIds = articleFileNames.map(
    (fileName) => fileName.split(/\.mdx/)[0],
  );
  return articleIds;
};

export const getMarkdownArticleById = async (id: string) => {
  const fileName = `${id}.mdx`;
  const fullPath = path.join(ARTICLES_DIR, fileName);
  const mdxDocument = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(mdxDocument);
  const meta = { id, ...data } as ArticleMeta;
  return { meta, content };
};

export const getMarkdownArticles = async (): Promise<ArticleMeta[]> => {
  const articleFileNames = await fs.readdir(ARTICLES_DIR);
  const contentsPromise = articleFileNames.map(async (fileName) => {
    const fullPath = path.join(ARTICLES_DIR, fileName);
    const filePath = await fs.readFile(fullPath, "utf8");
    const { data } = matter(filePath);
    const id = fileName.split(/\.mdx/)[0];

    return {
      id,
      ...data,
    } as ArticleMeta;
  });

  const contents = await Promise.all(contentsPromise);
  return contents;
};
