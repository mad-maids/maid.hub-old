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
        <title>Genemator's</title>
        <meta property="og:title" content="Welcome to Genemator's Website" />
        <meta
          property="og:description"
          content="Hi, I'm Geno Ferollo a.k.a Genemator. My website serves as a sources of information about my studies & works. Glad that you're interested! ;)"
        />
      </Head>
      <Header subtitle="Home" />
      <Notification news={news} />
      <div className="h-auto">
        <div className="flex justify-center items-center">
          <a
            className="flex justify-center items-center"
            href="https://i.am.genemator.uz"
          >
            <svg
              className="text-white xl:w-3/4 lg:w-3/4 sm:w-3/4 w-3/4"
              version="1.1"
              width="450"
              height="450"
              viewBox="0 0 160 160"
              fill="none"
            >
              <circle cx="80" cy="80" r="50" fill="#fff" />
              <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                <path
                  d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                  fill="#808080"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 0 0"
                    to="0 0 0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              <path
                d="M 50,0 A 50,50 0 0,0 -50,0Z"
                fill="#fff"
                transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)"
              />
            </svg>
          </a>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="genemator-title px-3 text-white text-center xl:text-6xl lg:text-5xl all:text-5xl text-5xl border-4 rounded-lg">
            Genemator Sakhib
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl">
            <a href="https://commits.top/uzbekistan.html">
              Senior Developer from Uzbekistan's Top 1!
            </a>
          </div>
        </div>
        <div className="flex wrap mb-4 mt-4 justify-center mb-32">
          <Link href={"/x"} as="/wtf">
            <div className="bg-white text-black text-center xl:text-3xl lg:text-2xl text-1xl border rounded hover:text-white hover:bg-transparent cursor-pointer m-4">
              {"✵ 9xplore ✵"}
            </div>
          </Link>
          <Link href={"/about"} as="/wtf">
            <div className="bg-white text-black text-center xl:text-3xl lg:text-2xl text-1xl border rounded hover:text-white hover:bg-transparent cursor-pointer m-4">
              {"✵ 4bout ✵"}
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
