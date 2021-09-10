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
          <div className="flex justify-center items-center">
            <svg viewBox="0 0 160 160" width="450" height="450">
              <circle cx="80" cy="80" r="50" fill="#ffffff" />
              <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                <path
                  d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                  fill="#ffffff"
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
              <g transform=" matrix(0.866, 0.5, 0.25, 0.433, 80, 80)">
                <path
                  d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                  fill="#ffffff"
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
            </svg>
          </div>
          <div className="flex mb-4 justify-center">
            <div className="font-bold px-3 text-white text-center xl:text-6xl lg:text-5xl text-4xl border-4 rounded-lg">
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
              <div className="bg-black text-white text-center xl:text-3xl lg:text-2xl text-1xl border rounded hover:text-black hover:bg-white cursor-pointer m-4">
                {" <\\ enter the darkness />"}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
