import Custom500 from "../../error/500";
import ClientPage from "./page.client";
import matter from "gray-matter";

interface Props {
  params: {
    slug: string;
  };
}

const BlogPage = async ({ params: { slug } }: Props) => {
  const content = await import(
    `../../../../posts/${decodeURIComponent(slug)}.mdx`
  );
  const data = matter(content.default);

  try {
    return (
      <ClientPage
        title={data.data.title}
        category={data.data.category}
        date={data.data.date}
        content={data.content}
      />
    );
  } catch (e) {
    console.log(e);
    return <Custom500 />;
  }
};

export default BlogPage;
