import React from "react";
import App from "next/app";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import "../components/app.css";
import "../components/markdown.css";
import "../components/ngprogress.css";
import "preact/debug";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  window.scrollTo(0, 0);
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

export default class MaidWebsiteApp extends App {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen">
        <Head>
          <meta property="og:site_name" content="Mad Maid's Hub" />
          <title>Mad Maid's Hub</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
