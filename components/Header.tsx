/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Link from "next/link";
import { useRouter } from "next/router";
import Transition from "./Transition";
import React, { useState } from "react";
import { id } from "../id.json";

const Header = ({ subtitle }: { subtitle: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const path = useRouter().pathname;

  const homeDetectMenu = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="text-base leading-6 font-medium text-black hover:text-gray-700 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
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
          <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-black hover:bg-black hover:text-white transition ease-in-out duration-150">
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
    <div className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b border-gray-800 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center">
                <div className="text-black px-2 genemator-title">WestHub</div>
                {subtitle && (
                  <div className="text-black">
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
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-800 focus:text-gray-500 transition duration-150 ease-in-out"
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
            <Link href="/x">
              <a className="text-base leading-6 font-medium text-black hover:text-gray-700 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150">
                Modules
              </a>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              href={"https://genemator.me/"}
              target="_blank"
              className="whitespace-no-wrap text-base leading-6 font-medium genemator-title text-black hover:text-gray-700 focus:outline-none focus:text-gray-400"
            >
              G
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
            <div className="rounded-lg border shadow-xs bg-white">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-black genemator-title">WestHub</div>{" "}
                    {subtitle && (
                      <div className="text-black">
                        {">"} {subtitle}
                      </div>
                    )}
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-gray-500 focus:outline-none focus:bg-white focus:text-black transition duration-150 ease-in-out"
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
                    <Link href="/x">
                      <a className="-m-3 p-3 flex items-center space-x-3 rounded-md text-black hover:bg-black hover:text-white transition ease-in-out duration-150">
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
                            d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          Modules
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                  <a
                    href="https://chisel.uz/"
                    className="text-base leading-6 font-medium text-black hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    Chisel Devs
                  </a>
                  <a
                    href="https://t.me/SeventyPlus"
                    className="text-base leading-6 font-medium text-black hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    +70
                  </a>
                  <a
                    href="https://t.me/SeventyPlusBIS"
                    className="text-base leading-6 font-medium text-black hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    BIS
                  </a>
                  <a
                    href="https://t.me/genemators"
                    className="text-base leading-6 font-medium text-black hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    Genemator's
                  </a>
                </div>
                <div className="space-y-6">
                  <a
                    href={"https://genemator.me/"}
                    className="w-full flex items-center justify-center px-4 py-2 border border text-base leading-6 font-medium rounded-md text-black genemator-title bg-transparent hover:bg-black hover:text-white focus:outline-none focus:border-white focus:shadow-outline-white active:bg-white transition ease-in-out duration-150"
                  >
                    Genemator's
                  </a>
                  <span className="w-full flex rounded-md shadow-sm" />
                  <p className="text-center text-base leading-6 font-medium text-black">
                    Proudly crafted by{" "}
                    <a
                      href="https://genemator.me"
                      className="text-gray-700 hover:text-gray-500 transition ease-in-out duration-150"
                    >
                      4BIS1 & Genemator
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
