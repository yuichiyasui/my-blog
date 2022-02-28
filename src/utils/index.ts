import path from "path";
import * as fs from "fs/promises";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "src/articles/");

export const getArticleIds = async () => {
  const articleFileNames = await fs.readdir(ARTICLES_DIR);
  const articleIds = articleFileNames.map(
    (fileName) => fileName.split(/\.mdx/)[0],
  );
  return articleIds;
};

export const getMarkdownArticles = async () => {
  const articleFileNames = await fs.readdir(ARTICLES_DIR);
  const contentsPromise = articleFileNames.map(async (fileName) => {
    const fullPath = path.join(ARTICLES_DIR, fileName);
    const filePath = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(filePath);
    const id = fileName.split(/\.mdx/)[0];

    return {
      data,
      id,
      content,
    };
  });

  const contents = await Promise.all(contentsPromise);
  return contents;
};
