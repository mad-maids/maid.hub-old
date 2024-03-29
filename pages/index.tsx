import { join } from "path";
import { promises } from "fs";
import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Link from "next/link";

interface Props {
  news: string;
}

export default function Home(props: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Mad Maid's Hub</title>
        <meta property="og:title" content="Welcome to Mad Maid's Hub" />
        <meta
          property="og:description"
          content="Welcome to our Hub System Management!"
        />
      </Head>
      <Header subtitle="Home" />
      <Notification news={props.news} />
      <div className="h-auto">
        <div className="h-auto">
          <div className="flex mt-48 mb-4 justify-center">
            <div className="maid-colorful font-bold px-3 text-white text-center xl:text-6xl lg:text-5xl text-4xl border-4 rounded-lg">
              Maid's Hub
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl">
              Yet another educational management by Mad Maids!
            </div>
          </div>
          <div className="max-w-screen-md mx-auto">
            <div className="grid gap-2 grid-cols-2 col-gap-5 row-gap-12 mb-4 mt-4 justify-center mb-32">
              {/*<Link href={"/x"} as="/wtf">*/}
              {/*  <div className="bg-white p-3 text-black text-center xl:text-3xl lg:text-2xl text-1xl border rounded-md hover:text-white hover:bg-transparent cursor-pointer m-4 p-2">*/}
              {/*    {"LMS"}*/}
              {/*  </div>*/}
              {/*</Link>*/}
              <Link href={"/posts"} as="/wtf">
                <div className="bg-white p-3 text-black text-center xl:text-3xl lg:text-2xl text-1xl border rounded-md hover:text-white hover:bg-transparent cursor-pointer m-4 p-2">
                  {"Posts"}
                </div>
              </Link>
              <Link href={"/t"} as="/wtf">
                <div className="bg-white p-3 text-black text-center xl:text-3xl lg:text-2xl text-1xl border rounded-md hover:text-white hover:bg-transparent cursor-pointer m-4 p-2">
                  {"Timetable"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async (): Promise<{ props: { news: any } }> => {
  const file = await promises.readFile(join(".", "news.json"), {
    encoding: "utf8",
  });
  const parsed = JSON.parse(file);

  return {
    props: { news: parsed.news },
  };
};
