/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next/types";

import { promises } from "fs";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { join } from "path";

interface QuoteMeta {
  id: string;
  title: string;
  publish_date: string;
  snippet: string;
}

interface Props {
  quotes: QuoteMeta[];
}

const Quotes = (props: Props): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Quotes | Genemator's</title>
        <meta property="og:title" content="Page where you can list quotes" />
        <meta
          property="og:description"
          content="At this page you can read Genemator's quotes that were created being motivated from a story!"
        />
      </Head>
      <Header subtitle="Quotes" />
      <div className="pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="border-b-2 border-gray-100 pb-10">
            <h2 className="text-4xl font-bold tracking-tight">Quotes</h2>
            <div className="mt-3 sm:mt-4">
              <p className="text-xl leading-7 text-white">
                My yearly life quotes which I create being motivated from a
                story of the year.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
            {props.quotes.map((quote) => {
              const date = new Date(quote.publish_date);
              const format = new Intl.DateTimeFormat(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              });
              return (
                <div key={quote.id}>
                  <p className="text-sm leading-5 text-gray-200">
                    <time dateTime={quote.publish_date}>
                      {format.format(date)}
                    </time>
                  </p>
                  <div className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-white">
                      {quote.title}
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-300">
                      {quote.snippet}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dir = await promises.readdir("./public/quotes");
  const quoteIds = dir.filter((name) => name.endsWith(".json"));
  const quotes = await (
    await Promise.all(
      quoteIds.map(async (name) => {
        const file = await promises.readFile(join("./public/quotes", name), {
          encoding: "utf8",
        });
        return { ...JSON.parse(file), id: name.replace(/\.json$/, "") };
      })
    )
  ).reverse();
  return {
    props: { quotes },
  };
};

export default Quotes;
