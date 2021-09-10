/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Router from "next/router";

const Notification = ({ news }: { news: string }): React.ReactElement => {
  const path = useRouter().pathname;

  const NewsPanel = (news: string) => {
    if (path == "/") {
      return (
        <div className="notification-area">
          <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-black">
                <span>
                  <span className="font-bold select-none">News: </span>
                  {news}
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <Link href="/quotes">
                    <a className="text-black underline select-none">
                      Read my blog &rarr;
                    </a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  const NavigationPanel = () => {
    if (path !== "/") {
      return (
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8 text-black">
            <a
              onClick={() => Router.back()}
              className="hover:text-gray-600 rounded cursor-pointer"
            >
              <svg
                className="flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="19"
                  y1="12"
                  x2="5"
                  y2="12"
                />
                <polyline
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  points="12 19 5 12 12 5"
                />
              </svg>
            </a>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {NewsPanel(news)}
      {NavigationPanel()}
    </>
  );
};

export default Notification;
