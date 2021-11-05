import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next/types";

import { promises } from "fs";

import Link from "next/link";

interface Props {
  dirs: string[];
}

const PostsIndexPage = (props: Props): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Timetable | Maid's Times</title>
        <meta property="og:title" content="Page where you can get timetables" />
        <meta
          property="og:description"
          content="Timetable Manager by Mad Maids!"
        />
      </Head>
      <div className="pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12 mb-32">
            {props.dirs.map((group) => {
              return (
                <Link href={`/td/${group}`} key={group}>
                  <a
                    key={group}
                    className="border p-6 m-1 text-center rounded-md bg-black hover:bg-white hover:text-black"
                  >
                    {group}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const dirs = await promises.readdir("./public/timetable");
  return {
    props: { dirs },
  };
};

export default PostsIndexPage;
