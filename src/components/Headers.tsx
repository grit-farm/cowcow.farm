"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import Analytics from "./Analytics";
import MetaInfo from "./MetaInfo";
import ChannelTalk from "./ChannelTalk";

const Headers = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Suspense>
        <Analytics />
        <MetaInfo />
        <ChannelTalk />
      </Suspense>
      <header>
        <nav className=" bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap max-w-7xl justify-between items-center mx-auto ">
            <Link href="/" className="flex items-center">
              {/* <img src="" className="mr-3 h-6 sm:h-9" alt="Petsta" /> */}
              <h1 className="self-center text-xl font-semibold whitespace-nowrap">
                COWCOW
              </h1>
            </Link>
            <div className="flex md:hidden items-center lg:order-2">
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                !toggle && "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="flex items-center">
                  <Link
                    href="posts"
                    className="block w-full py-2 text-neutral-800 hover:text-neutral-900 hover:font-bold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 "
                  >
                    칼럼
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tally.so/r/nWEdEP"
                    target="_blank"
                    className="block w-full font-bold py-2 text-blue-500 hover:text-blue-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 "
                  >
                    선착순 한정 9,900원
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Headers;
