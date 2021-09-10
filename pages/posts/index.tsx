/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next/types";

import { promises } from "fs";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { join } from "path";
import Link from "next/link";

interface PostMeta {
  id: string;
  title: string;
  author: string;
  publish_date: string;
  images: Array<{
    image: string;
    width: number;
    height: number;
    className: string;
    preview: boolean;
  }>;
  snippet: string;
}

interface Props {
  posts: PostMeta[];
}

const PostsIndexPage = (props: Props): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Posts | Genemator's</title>
        <meta property="og:title" content="Page where you can list posts" />
        <meta
          property="og:description"
          content="At this page you can list existing posts in our website!"
        />
      </Head>
      <Header subtitle="Posts" />
      <div className="pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="border-b-2 border-gray-100 pb-10">
            <h2 className="text-4xl font-bold tracking-tight">
              Posts {"<|>"} News
            </h2>
            <div className="mt-3 sm:mt-4">
              <p className="text-xl leading-7 text-white">
                Get more information or read about Genemator's thoughts in this
                page!
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
            {props.posts.map((post) => {
              const date = new Date(post.publish_date);
              const format = new Intl.DateTimeFormat(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              });
              return (
                <div key={post.id}>
                  <p className="text-sm leading-5 text-gray-200">
                    <time dateTime={post.publish_date}>
                      {format.format(date)}
                    </time>
                  </p>
                  <Link href={"/posts/[post]"} as={`/posts/${post.id}`}>
                    <a className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-white">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-300">
                        {post.snippet}
                      </p>
                    </a>
                  </Link>
                  <div className="mt-3">
                    <Link href={"/posts/[post]"} as={`/posts/${post.id}`}>
                      <a className="read-post text-base leading-6 font-semibold transition ease-in-out duration-150">
                        Read post
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dir = await promises.readdir("./public/posts");
  const postIds = dir.filter((name) => name.endsWith(".json"));
  const posts = await Promise.all(
    postIds.map(async (name) => {
      const file = await promises.readFile(join("./public/posts", name), {
        encoding: "utf8",
      });
      return { ...JSON.parse(file), id: name.replace(/\.json$/, "") };
    })
  );
  return {
    props: { posts },
  };
};

export default PostsIndexPage;
