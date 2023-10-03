"use client";
import React from "react";
import Category from "./components/Category";
import PostCard from "./components/PostCard";
import { IPost } from "@/lib/types/blog";

interface Props {
  postList: any[];
}

const ClientPage = ({ postList }: Props) => {
  return (
    <div className="flex flex-col min-h-screen px-4">
      <section className="flex flex-col w-full max-w-7xl mx-auto">
        <h1 className="font-bold text-4xl mt-16">칼럼</h1>
        <div className="mt-4">{/* <Category /> */}</div>
        <article className="flex flex-row flex-wrap gap-8">
          {postList.map((post: IPost, index) => (
            <PostCard
              key={index}
              heroImage={post.data.hero_image}
              slug={post.slug}
              title={post.data.title}
              excerpt={post.data.excerpt}
              category={post.data.category}
            />
          ))}
        </article>
      </section>
    </div>
  );
};

export default ClientPage;
