import Link from "next/link";
import { useRouter } from "next/router";
import Transition from "./Transition";
import React, { useState } from "react";

const Header = ({
  type,
  subtitle,
}: {
  type?: string;
  subtitle: string;
}): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  const path = useRouter().pathname;

  const homeDetectMenu = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
            Home
          </a>
        </Link>
      );
    }
  };

  const homeDetectResponsive = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
            <svg
              className="flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
            </svg>
            <div className="text-base leading-6 font-medium">Home</div>
          </a>
        </Link>
      );
    }
  };

  return (
    <div className="relative bg-black z-10">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center">
                <div className="text-white px-2 maid-title">
                  Maid's {type ? type : "Hub"}
                </div>
                {subtitle && (
                  <div className="text-white">
                    {">"} {subtitle}
                  </div>
                )}
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {homeDetectMenu()}
            {/*<Link href="/x">*/}
            {/*  <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">*/}
            {/*    LMS*/}
            {/*  </a>*/}
            {/*</Link>*/}
            <Link href="/t">
              <a className="text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Timetable
              </a>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              href="https://intranet.maid.uz/"
              target="_blank"
              rel="noreferrer"
              className="whitespace-no-wrap maid-title text-base leading-6 font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-400"
            >
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
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Transition
        show={menuOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg border shadow-xs bg-black">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white maid-title">Mad Maid's</div>{" "}
                    {subtitle && (
                      <div className="text-white">
                        {">"} {subtitle}
                      </div>
                    )}
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-gray-100 focus:outline-none focus:bg-white focus:text-black transition duration-150 ease-in-out"
                    >
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav className="grid row-gap-8">
                    {homeDetectResponsive()}
                    {/*<Link href="/x">*/}
                    {/*  <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">*/}
                    {/*    <svg*/}
                    {/*      className="flex-shrink-0 h-6 w-6"*/}
                    {/*      fill="none"*/}
                    {/*      viewBox="0 0 24 24"*/}
                    {/*      stroke="currentColor"*/}
                    {/*    >*/}
                    {/*      <path*/}
                    {/*        strokeLinecap="round"*/}
                    {/*        strokeLinejoin="round"*/}
                    {/*        strokeWidth="2"*/}
                    {/*        d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"*/}
                    {/*      />*/}
                    {/*    </svg>*/}
                    {/*    <div className="text-base leading-6 font-medium">*/}
                    {/*      LMS*/}
                    {/*    </div>*/}
                    {/*  </a>*/}
                    {/*</Link>*/}
                    <Link href="/t">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-white hover:bg-white hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          Timetable
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                  <a
                    href="https://github.com/mad-maids"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://t.me/madmaids"
                    className="text-base leading-6 font-medium text-white hover:text-gray-300 transition ease-in-out duration-150"
                  >
                    Telegram
                  </a>
                </div>
                <div className="space-y-6">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://intranet.maid.uz"
                    className="w-full maid-title flex items-center justify-center px-4 py-2 border border text-base leading-6 font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black focus:outline-none focus:border-white focus:shadow-outline-white active:bg-white transition ease-in-out duration-150"
                  >
                    Intranet
                  </a>
                  <span className="w-full flex rounded-md shadow-sm" />
                  <p className="text-center text-base leading-6 font-medium text-white">
                    Proudly crafted with{" "}
                    <a
                      href="https://vercel.com"
                      className="text-gray-400 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Vercel / Next.js
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
