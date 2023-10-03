"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  slug: string;
  heroImage: string;
  title: string;
  excerpt: string;
  category: string;
}

const PostCard = ({ slug, heroImage, title, category, excerpt }: Props) => {
  return (
    <>
      <div className="max-w-sm w-full h-auto bg-white hover:shadow">
        <Link href={`posts/${slug}`}>
          <Image
            className="w-full h-96"
            src={heroImage}
            alt="title"
            width={400}
            height={255}
          />
          <div className="p-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <div
              className={`text-xs inline-flex items-center leading-sm uppercase px-2 py-1 mt-1 bg-gray-200 text-gray-900 rounded`}
            >
              {category}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PostCard;
