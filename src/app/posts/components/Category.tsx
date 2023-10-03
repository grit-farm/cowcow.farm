"use client";

import Link from "next/link";

const Category = () => {
  return (
    <ul className="flex gap-2 pb-6 text-sm">
      <li className="inline-flex items-center font-bold leading-sm border rounded hover:bg-blue-500 hover:text-white">
        <Link href="#" className="px-3 py-2">
          전체
        </Link>
      </li>
    </ul>
  );
};

export default Category;
