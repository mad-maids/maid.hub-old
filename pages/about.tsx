/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";

export default function About(
  string: string,
  node: HTMLElement | null
): React.ReactElement {
  return (
    <>
      <Head>
        <title>About | Genemator's</title>
        <meta property="og:title" content="Information about Genemator" />
        <meta
          property="og:description"
          content="In this page you can get detailed information about Genemator and his works & experiences."
        />
      </Head>
      <Header subtitle="About" />
      <div className="h-auto">
        <div className="flex flex-wrap justify-center items-center mb-8 mt-12">
          <img
            src={"/avatar.jpg"}
            className="avatar h-auto sm:w-1/2 lg:1/2 xl:w-1/4 px-5 py-5"
            alt="Genemator's Logo"
          />
          {/*<img*/}
          {/*functions="/big_logo.png"*/}
          {/*className="avatar h-auto sm:w-1/2 lg:1/2 xl:w-1/4 px-5 py-5"*/}
          {/*alt="Genemator's Logo"*/}
          {/*/>*/}
        </div>
        <div className="flex mb-4 justify-center mt-8">
          <div className="text-white text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-white hover:text-black">
            <strong>
              {">"}愛されるコード{"<"}
            </strong>
          </div>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl border rounded hover:bg-white hover:text-black">
            <Typewriter
              options={{
                deleteSpeed: 25,
                strings: [
                  "Senior Developer from Uzbekistan's Top 1 ¯\\_(ツ)_/¯",
                  "Welcome to my showcase ^_^",
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={() => {}}
            />
          </div>
        </div>
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="text-base leading-6 text-white font-semibold tracking-wide uppercase">
                BRIEF
              </p>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
                ABOUT MYSELF
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-300 lg:mx-auto">
                Hello dear visitor! I’m{" "}
                <span style={{ color: "#1aff31" }}>Sokhibjon Orzikulov</span>,
                who is famous under the nickname{" "}
                <span className="genemator-colorful">Genemator</span>. I’m glad
                to see you visit my website. For the beginning, let me introduce
                myself. I’m a Senior Full-Stack developer with more than 7 years
                of experience. Although I professionally code using 7 different
                programming languages as JavaScript, TypeScript, Java, Kotlin,
                C, C++, Assembler, Python2, Python3. I mainly use C++ for its
                total control and wide range of functions. That said, my
                knowledge is not limited to coding. I am also a specialist in
                creating 3D driven video and photo. Besides, I prefer Cinema 4D
                as 3D engine and utilize Adobe Products for editing purposes. I
                can also create different songs and music for my projects by
                using special applications on a professional level. For the time
                being, I am a second-year student at Westminster International
                University in Tashkent. My nationality is{" "}
                <span className="text-blue-500">Uz</span>
                <span className="text-red-500">b</span>
                <span className="text-green-400">ek</span> and I’m only 19 years
                old 😎
              </p>
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="text-base leading-6 text-white font-semibold tracking-wide uppercase">
                SKILLS
              </p>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
                DIRECTIONS THAT I COVER
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-300 lg:mx-auto">
                As everybody knows, there are multiple directions in IT sphere
                and all of them specialize in some kind of skills.
              </p>
            </div>

            <div className="mt-10">
              <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-white">
                        Front End
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-300">
                        With the help of trendy JavaScript frameworks as React,
                        Vue or maybe Next.JS I can build speedy and beautifully
                        designed web apps with out-of-box functionalities.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="22"
                            y1="12"
                            x2="2"
                            y2="12"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                          />
                          <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="6"
                            y1="16"
                            x2="6.01"
                            y2="16"
                          />
                          <line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="10"
                            y1="16"
                            x2="10.01"
                            y2="16"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-white">
                        Back End
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-300">
                        I am able to build up my own server from zero to hero
                        with various programming languages and frameworks. For
                        example, Express.js on Node.js, Django or Flask on
                        Python, also Oak on Deno.land
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <ellipse
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            cx="12"
                            cy="5"
                            rx="9"
                            ry="3"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-white">
                        Database
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-300">
                        Thanks for database programming knowledge, I have
                        possibilities to create server with fully integrated
                        datasets. As an example, postgresql, mysql, vanilla sql
                        and so on.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-white">
                        Scripting
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-300">
                        With my knowledge on Bash, ZSH or V programming
                        language, I can build my environment & build scripts,
                        startups or unit tests for project on ease.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="m-8">
          <div
            className="coding inverse-toggle px-5 pt-4 shadow-lg text-white text-sm font-mono subpixel-antialiased
              bg-black border pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
          >
            <div className="top mb-2 flex">
              <div className="h-3 w-3 bg-red-500 rounded-full" />
              <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full" />
              <div className="ml-2 h-3 w-3 bg-green-500 rounded-full" />
            </div>
            <div className="mt-4 flex-wrap">
              <div className="text-green-400">
                {"¸,ø¤º°`°º¤ø,¸¸,ø¤º° genemator °º¤ø,¸¸,ø¤º°`°º¤ø,¸ $"}
              </div>
              <div className=" items-center pl-2">
                <Typewriter
                  options={{
                    autoStart: true,
                    cursor: "¦",
                  }}
                  onInit={(typewriter: any) => {
                    typewriter
                      .typeString("...")
                      .pauseFor(3000)
                      .deleteChars(3)
                      .typeString("./goodbyeworld") //
                      .pauseFor(1000)
                      .pasteString(
                        "<br>" + "Thank you for being with me all time! 💖",
                        node
                      )
                      .pasteString(
                        "<br>" +
                          'Now, I want you to find "trying//cry4help" by funeral and sing with me! I\'ll be waiting for you next 10 seconds here... ಥ_ಥ',
                        node
                      )
                      .pauseFor(1000)
                      .pasteString("<br/>" + "Are you ready?", node)
                      .pauseFor(1000)
                      .pasteString("<br/>" + "1...", node)
                      .pauseFor(1000)
                      .pasteString(" 2...", node)
                      .pauseFor(1000)
                      .pasteString(" 3...", node)
                      .pauseFor(1000)
                      .deleteAll(1)
                      .pasteString("<br/>" + "(#--------) 5%", node)
                      .pauseFor(1000)
                      .pasteString("<br/>" + "(###------) 26%", node)
                      .pauseFor(1000)
                      .pasteString("<br/>" + "(#####----) 52%", node)
                      .pauseFor(1000)
                      .pasteString("<br/>" + "(######---) 72%", node)
                      .pauseFor(1000)
                      .pasteString("<br/>" + "(#######--) 84%", node)
                      .pauseFor(1000)
                      .pasteString("<br/>" + "(########-) 99%", node)
                      .pauseFor(1000)
                      .pasteString("<br/>" + "Goodbye World! (┬┬﹏┬┬)", node)
                      .pauseFor(5000)
                      .typeString("  exit")
                      .pasteString("<br/>" + "[Process completed]", node)
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
