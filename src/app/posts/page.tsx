import Custom500 from "../error/500";
import ClientPage from "./page.client";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BlogPage = async () => {
  const directory = path.join(process.cwd(), `posts`);
  const fileNames = fs.readdirSync(directory);
  const blogList = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult,
    };
  });

  try {
    return <ClientPage postList={blogList} />;
  } catch (e) {
    return <Custom500 />;
  }
};

export default BlogPage;
