import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next/types";

import { promises } from "fs";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
      <Header subtitle="Posts" type="Times" />
      <div className="pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="border-b-2 border-gray-100 pb-10">
            <h2 className="text-4xl font-bold tracking-tight">
              Timetable {"<|>"} Maid Manager
            </h2>
            <div className="mt-3 sm:mt-4">
              <p className="text-xl leading-7 text-white">
                Choose your group from the buttons below:
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12 mb-32">
            {props.dirs.map((group) => {
              return (
                <Link href={`/t/${group}`} key={group}>
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
      <Footer />
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
