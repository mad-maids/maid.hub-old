/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Link from "next/link";

import { news } from "../news.json";

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Mad Maid's Hub</title>
        <meta property="og:title" content="Welcome to Mad Maid's Hub" />
        <meta
          property="og:description"
          content="Hi, I'm Geno Ferollo a.k.a Genemator. My website serves as a sources of information about my studies & works. Glad that you're interested! ;)"
        />
      </Head>
      <Header subtitle="Home" />
      <Notification news={news} />
      <div className="h-auto">
        <div className="h-auto">
          <div className="flex mt-48 mb-4 justify-center">
            <div className="genemator-colorful font-bold px-3 text-white text-center xl:text-6xl lg:text-5xl text-4xl border-4 rounded-lg">
              Maid's Hub
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl">
              Yet another lms manager by Mad Maids!
            </div>
          </div>
          <div className="flex wrap mb-4 mt-4 justify-center mb-32">
            <Link href={"/x"} as="/wtf">
              <div className="bg-white text-black text-center xl:text-3xl lg:text-2xl text-1xl border rounded-md hover:text-white hover:bg-transparent cursor-pointer m-4 p-2">
                {"LMS"}
              </div>
            </Link>
            <Link href={"/posts"} as="/wtf">
              <div className="bg-white text-black text-center xl:text-3xl lg:text-2xl text-1xl border rounded-md hover:text-white hover:bg-transparent cursor-pointer m-4 p-2">
                {"Posts"}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
