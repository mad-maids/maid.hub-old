/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Musics = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Music Station | Genemator's</title>
        <meta property="og:title" content="Genemator's Music Station" />
        <meta
          property="og:description"
          content="At this page you can list existing posts in our website!"
        />
      </Head>
      <Header subtitle="Music Station" />
      <div className="pt-8 px-4 sm:px-6 lg:pt-8 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <iframe
            className="border rounded-lg"
            frameBorder="0"
            style={{ width: "100%", height: "600px" }}
            src="https://music.yandex.ru/iframe/#playlist/ferollo/1019"
          >
            Listen to{" "}
            <a href="https://music.yandex.ru/users/ferollo/playlists/1019?lang=en">
              Genemator's Choice
            </a>{" "}
            — <a href="https://music.yandex.ru/users/ferollo">𝕲𝖊𝖓𝖊𝖒𝖆𝖙𝖔𝖗</a> on
            Yandex Music
          </iframe>
        </div>
      </div>
      <Footer simple={true} />
    </>
  );
};

export default Musics;
