import React, { useMemo } from "react";
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
  const [query, setQuery] = React.useState("");

  const list = useMemo(
    () =>
      props.dirs
        .filter(
          (course) =>
            course.toLowerCase().includes(query.toLowerCase())
        )
        .sort((nameA, nameB) => nameA.localeCompare(nameB)),
    [props.dirs, query]
  );

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
      <div className="pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 pt-4">
          <div className="mt-6">
            <label htmlFor="query" className="font-medium sr-only">
              Search...
            </label>
            <input
              id="query"
              className="text-white bg-black block w-full px-4 py-2 leading-normal border rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300 mt-1"
              type="text"
              placeholder="5BM..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:max-w-screen-lg sm:mx-auto sm:px-6 md:px-8 pb-4 sm:pb-12">
          {list.length == 0 ? (
            <div className="px-4 sm:px-0 py-4 text-center sm:text-left text-sm leading-5 font-medium text-white truncate">
              Group doesn't exist or not found!
            </div>
          ) : (
            <div className="bg-black sm:shadow border overflow-hidden sm:rounded-md mt-4">
              <ul>
                {list.map((name, i) => {
                  const link = `/t/${name}`;
                  return (
                    <li className={i !== 0 ? "border-t" : ""} key={i}>
                      <Link href="/t/[group]" as={link}>
                        <a className="block hover:bg-white hover:text-black focus:outline-none focus:bg-white transition duration-150 ease-in-out">
                          <div className="flex items-center px-4 sm:px-6 py-2">
                            <div className="min-w-0 flex-1 flex items-center">
                              <div className="min-w-0 flex-1">
                                <div className="text-sm leading-5 font-medium text-blue-500 truncate">
                                  {name}
                                </div>
                              </div>
                            </div>
                            <div>
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
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
