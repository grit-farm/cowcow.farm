"use client";
import React, { FC } from "react";

import { marked } from "marked";

interface ClientPageProps {
  title: string;
  category: string;
  date: string;
  content: string;
}

const ClientPage: FC<ClientPageProps> = ({
  title,
  category,
  date,
  content,
}) => {
  const sanitize = (str: string) => {
    return str.replace(/&<"/g, function (m) {
      if (m === "&") return "&amp;";
      if (m === "<") return "&lt;";
      return "&quot;";
    });
  };

  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) =>
    `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

  renderer.image = (src, title, alt) => {
    const exec = /=\s*(\d*)\s*x\s*(\d*)\s*$/.exec(title!);
    let res = '<img src="' + sanitize(src) + '" alt="' + sanitize(alt);
    if (exec && exec[1]) res += '" height="' + exec[1];
    if (exec && exec[2]) res += '" width="' + exec[2];
    return res + '">';
  };

  marked.use({
    renderer,
    gfm: true,
  });

  const formatDate = new Intl.DateTimeFormat("kr").format(new Date(date));

  return (
    <div className="flex flex-col min-h-screen px-2 py-16">
      <section className="flex flex-col w-full max-w-7xl mx-auto">
        <div>
          <h3 className="text-4xl font-bold">{title}</h3>
          <div className="flex justify-between gap-4 mt-4">
            <p
              className={`text-xs inline-flex items-center leading-sm uppercase px-2 py-1 mt-1 bg-gray-200 text-gray-900 rounded`}
            >
              #{category}
            </p>
            <p className="text-xs text-gray-400">{formatDate}</p>
          </div>
        </div>
        <article
          className="w-full mt-12 prose prose-neutral prose-img:rounded prose-a:text-cyan-500 leading-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></article>
      </section>
    </div>
  );
};

export default ClientPage;
