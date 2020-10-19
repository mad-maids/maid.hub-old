/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Link from "next/link";
import { useRouter } from "next/router";
import Transition from "./Transition";
import React, { useState } from "react";
import {id} from "../id.json"

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
              href={"https://github.com/" + id}
              target="_blank"
              className="whitespace-no-wrap text-base leading-6 font-medium text-black hover:text-gray-700 focus:outline-none focus:text-gray-400"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 50 50">
                <path d="M21.398438 3 A 1.0001 1.0001 0 0 0 20.513672 3.5351562L2.1152344 38.535156 A 1.0001 1.0001 0 0 0 2.1113281 38.542969 A 1.0001 1.0001 0 0 0 2.0859375 38.599609 A 1.0001 1.0001 0 0 0 2.0742188 38.626953 A 1.0001 1.0001 0 0 0 2.0683594 38.638672 A 1.0001 1.0001 0 0 0 2.0410156 38.720703 A 1.0001 1.0001 0 0 0 2.0253906 38.787109 A 1.0001 1.0001 0 0 0 2.015625 38.826172 A 1.0001 1.0001 0 0 0 2.015625 38.830078 A 1.0001 1.0001 0 0 0 2.0039062 38.916016 A 1.0001 1.0001 0 0 0 2 39.005859 A 1.0001 1.0001 0 0 0 2 39.019531 A 1.0001 1.0001 0 0 0 2 39.029297 A 1.0001 1.0001 0 0 0 2.0078125 39.117188 A 1.0001 1.0001 0 0 0 2.0175781 39.181641 A 1.0001 1.0001 0 0 0 2.0273438 39.228516 A 1.0001 1.0001 0 0 0 2.0507812 39.310547 A 1.0001 1.0001 0 0 0 2.0722656 39.365234 A 1.0001 1.0001 0 0 0 2.0859375 39.404297 A 1.0001 1.0001 0 0 0 2.0917969 39.416016 A 1.0001 1.0001 0 0 0 2.1308594 39.494141 A 1.0001 1.0001 0 0 0 2.2460938 39.65625 A 1.0001 1.0001 0 0 0 2.2539062 39.666016 A 1.0001 1.0001 0 0 0 2.296875 39.710938L2.3164062 39.728516L9.296875 46.628906 A 1.0001 1.0001 0 0 0 10 46.917969L43.355469 46.917969 A 1.0001 1.0001 0 0 0 43.390625 46.916016 A 1.0001 1.0001 0 0 0 43.394531 46.916016 A 1.0001 1.0001 0 0 0 43.412109 46.914062 A 1.0001 1.0001 0 0 0 43.455078 46.912109 A 1.0001 1.0001 0 0 0 43.46875 46.910156 A 1.0001 1.0001 0 0 0 43.517578 46.904297 A 1.0001 1.0001 0 0 0 43.591797 46.888672 A 1.0001 1.0001 0 0 0 43.59375 46.888672 A 1.0001 1.0001 0 0 0 43.869141 46.775391 A 1.0001 1.0001 0 0 0 43.878906 46.769531 A 1.0001 1.0001 0 0 0 43.951172 46.720703 A 1.0001 1.0001 0 0 0 43.953125 46.71875 A 1.0001 1.0001 0 0 0 44.029297 46.65625 A 1.0001 1.0001 0 0 0 44.072266 46.615234 A 1.0001 1.0001 0 0 0 44.099609 46.585938 A 1.0001 1.0001 0 0 0 44.138672 46.539062 A 1.0001 1.0001 0 0 0 44.162109 46.507812 A 1.0001 1.0001 0 0 0 44.166016 46.5 A 1.0001 1.0001 0 0 0 44.216797 46.423828 A 1.0001 1.0001 0 0 0 44.246094 46.371094 A 1.0001 1.0001 0 0 0 44.253906 46.355469 A 1.0001 1.0001 0 0 0 44.273438 46.310547 A 1.0001 1.0001 0 0 0 44.300781 46.242188 A 1.0001 1.0001 0 0 0 44.314453 46.201172L44.320312 46.185547 A 1.0001 1.0001 0 0 0 44.324219 46.169922L46.958984 37.285156 A 1.0001 1.0001 0 0 0 46.888672 36.542969L29.898438 3.5644531L29.888672 3.5429688 A 1.0001 1.0001 0 0 0 29.871094 3.5136719 A 1.0001 1.0001 0 0 0 29.837891 3.4570312 A 1.0001 1.0001 0 0 0 29.779297 3.375 A 1.0001 1.0001 0 0 0 29.712891 3.3007812 A 1.0001 1.0001 0 0 0 29.658203 3.2480469 A 1.0001 1.0001 0 0 0 29.640625 3.2324219 A 1.0001 1.0001 0 0 0 29.580078 3.1855469 A 1.0001 1.0001 0 0 0 29.560547 3.171875 A 1.0001 1.0001 0 0 0 29.544922 3.1621094 A 1.0001 1.0001 0 0 0 29.474609 3.1210938 A 1.0001 1.0001 0 0 0 29.384766 3.078125 A 1.0001 1.0001 0 0 0 29.3125 3.0507812 A 1.0001 1.0001 0 0 0 29.310547 3.0507812 A 1.0001 1.0001 0 0 0 29.253906 3.0351562 A 1.0001 1.0001 0 0 0 29.195312 3.0195312 A 1.0001 1.0001 0 0 0 29.193359 3.0195312 A 1.0001 1.0001 0 0 0 29.117188 3.0078125 A 1.0001 1.0001 0 0 0 29.039062 3.0019531 A 1.0001 1.0001 0 0 0 29 3L28.994141 3L21.398438 3 z M 22.003906 5L27.410156 5L15.099609 30.566406 A 1.0001 1.0001 0 0 0 16 32L24.445312 32L28.195312 38L4.6542969 38L22.003906 5 z M 29.029297 6.2421875L44.927734 37.099609L43.070312 43.359375L30.435547 20.761719 A 1.0001 1.0001 0 0 0 28.658203 20.826172L28.642578 20.857422 A 1.0001 1.0001 0 0 0 28.59375 20.951172L24.363281 30L17.589844 30L29.029297 6.2421875 z M 29.585938 23.5625L41.642578 44.917969L10.410156 44.917969L5.4335938 40L6 40L30 40 A 1.0001 1.0001 0 0 0 30.099609 39.994141 A 1.0001 1.0001 0 0 0 30.847656 38.470703L26.136719 30.931641L26.21875 30.757812L29.585938 23.5625 z" />{" "}
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
                    target="_blank"
                    href="https://github.com/00010023"
                    className="w-full flex items-center justify-center px-4 py-2 border border text-base leading-6 font-medium rounded-md text-black bg-transparent hover:bg-black hover:text-white focus:outline-none focus:border-white focus:shadow-outline-white active:bg-white transition ease-in-out duration-150"
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
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      />
                    </svg>
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
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      />
                    </svg>
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
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      />
                    </svg>
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
