/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "../components/app.css";
import "../components/markdown.css";
import "../components/ngprogress.css";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  window.scrollTo(0, 0);
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const preview = `https://genemator.me/preview.png`;
    return (
      <div className="h-screen">
        <Head>
          <meta property="og:image" content={preview} />
          <meta property="og:site_name" content="Genemator's" />
          <title>Genemator's Portfolio Website</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
