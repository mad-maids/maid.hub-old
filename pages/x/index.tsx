/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React, { useMemo } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { entries } from "../../util/registry_utils";
import InlineCode from "../../components/InlineCode";

import Head from "next/head";

const ThirdPartyRegistryList = (): React.ReactElement => {
  const [query, setQuery] = React.useState("");

  const list = useMemo(
    () =>
      Object.keys(entries)
        .filter(
          (name) =>
            name.toLowerCase().includes(query.toLowerCase()) ||
            (entries[name].desc ?? "")
              .toLowerCase()
              .includes(query.toLowerCase())
        )
        .sort((nameA, nameB) => nameA.localeCompare(nameB)),
    [entries, query]
  );

  return (
    <>
      <Head>
        <title>eXplorer | Genemator's</title>
        <meta property="og:title" content="eXplorer - Project Explorer" />
        <meta
          property="og:description"
          content="eXplorer helps you to manage or check Genemator's works and contributions with handy UI."
        />
      </Head>
      <div className="min-h-full">
        <Header subtitle="eXplorer" />
        <div className="">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 pt-4">
            <div className="text-white mt-4 sm:mt-8 break-words">
              <p>
                <span className="font-semibold">genemator.uz/x</span> is a
                project explorer that helps users to explore projects created or
                contributed by <InlineCode>Genemator Sakhib</InlineCode>. Outer
                projects like{" "}
                <InlineCode>organisation based projects</InlineCode> are also
                counted as Genemator's work.
              </p>
            </div>
            <div className="mt-12">
              <label htmlFor="query" className="font-medium sr-only">
                Search...
              </label>
              <input
                id="query"
                className="text-white bg-transparent block w-full px-4 py-2 leading-normal border rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300 mt-1"
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:max-w-screen-lg sm:mx-auto sm:px-6 md:px-8 pb-4 sm:pb-12">
            {list.length == 0 ? (
              <div className="px-4 sm:px-0 py-4 text-center sm:text-left text-sm leading-5 font-medium text-white truncate">
                Project doesn't exist or not found!
              </div>
            ) : (
              <div className="bg-transparent sm:shadow border overflow-hidden sm:rounded-md mt-4">
                <ul>
                  {list.map((name, i) => {
                    const link = `/x/${name}`;
                    return (
                      <li className={i !== 0 ? "border-t" : ""} key={i}>
                        <Link href="/x/[identifier]" as={link}>
                          <a className="block hover:bg-white hover:text-black focus:outline-none focus:bg-white transition duration-150 ease-in-out">
                            <div className="flex items-center px-4 sm:px-6 py-2">
                              <div className="min-w-0 flex-1 flex items-center">
                                <div className="min-w-0 flex-1">
                                  <div className="text-sm leading-5 font-medium text-blue-500 truncate">
                                    {name}
                                  </div>
                                  {entries[name]?.desc && (
                                    <div className="mt-1 flex items-center text-sm leading-5">
                                      <span className="truncate">
                                        {entries[name]?.desc ?? ""}
                                      </span>
                                    </div>
                                  )}
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
        <Footer simple />
      </div>
    </>
  );
};

export default ThirdPartyRegistryList;
