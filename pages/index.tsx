/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>WestHub Git Controller</title>
        <meta property="og:title" content="WestHub - Git Manager" />
        <meta
          property="og:description"
          content="Yet another git manager for educational purpose!"
        />
      </Head>
      <Header subtitle="Home" />
      <Notification news="Computer Science Fundamentals Course Work Announced" />
      <div className="h-auto">
        <div className="flex justify-center items-center">
          <svg viewBox="0 0 160 160" width="450" height="450">
            <circle cx="80" cy="80" r="50" />
            <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
              <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#8c8c8c">
                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" />
              </path>
            </g>
            <path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
          </svg>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="genemator-title text-black text-center xl:text-6xl lg:text-5xl text-4xl border-4 rounded-lg">
            WestHub's Git
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-black text-center xl:text-3xl lg:text-2xl text-1xl">
              Yet another git manager for educational purpose!
          </div>
        </div>
        <div className="flex wrap mb-4 mt-4 justify-center mb-32">
          <Link href={"/x"} as="/wtf">
            <div className="bg-black text-white text-center xl:text-3xl lg:text-2xl text-1xl border rounded hover:text-black hover:bg-white cursor-pointer m-4">
              {" <\\ check out sources />"}
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
