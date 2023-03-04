import React, { useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Menu } from "@headlessui/react";
const Nav1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    {
      name: "Home",
      path: "/",
      sub: [],
    },
    {
      name: "About IICT",
      path: "/about",
      sub: [
        {
          name: "Institution",
          path: "/about/institute",
          sub: [],
        },
        {
          name: "Aim & Objective",
          path: "/about/aim&objective",
          sub: [],
        },
        {
          name: "History",
          path: "/about/history",
          sub: [],
        },
        {
          name: "Faculty",
          path: "/about/faculty",
          sub: [],
        },
        {
          name: "Officer & Staff",
          path: "/about/officer&staff",
          sub: [],
        },
      ],
    },
    {
      name: "Programs",
      path: "#",
      sub: [
        {
          name: "UnderGraduation Program",
          path: "/about/institute",
          sub: [],
        },
        {
          name: "Graduation Program",
          path: "/about/aim&objective",
          sub: [],
        },
        {
          name: "Certificate Course",
          path: "/about/history",
          sub: [],
        },
        {
          name: "Diploma Course",
          path: "/about/faculty",
          sub: [],
        },
      ],
    },
    {
      name: "Notice",
      path: "/about",
      sub: [
        {
          name: "General",
          path: "/about/institute",
          sub: [],
        },
        {
          name: "Projects",
          path: "/about/aim&objective",
          sub: [],
        },
        {
          name: "UnderGraduation Program",
          path: "/about/history",
          sub: [],
        },
        {
          name: "Graduation Program",
          path: "/about/faculty",
          sub: [],
        },
        {
          name: "Certificate Course",
          path: "/about/officer&staff",
          sub: [],
        },
        {
          name: "Diploma Course",
          path: "/about/officer&staff",
          sub: [],
        },
      ],
    },
    {
      name: "Life at IICT",
      path: "/about",
      sub: [
        {
          name: "News & Events",
          path: "/about/institute",
          sub: [],
        },
        {
          name: "Upcoming Events",
          path: "/about/aim&objective",
          sub: [],
        },
        {
          name: "Achievements",
          path: "/about/history",
          sub: [],
        },
      ],
    },
    {
      name: "Research",
      path: "/about",
      sub: [],
    },
    {
      name: "People",
      path: "/about",
      sub: [
        {
          name: "Alumni",
          path: "/about/institute",
          sub: [],
        },
        {
          name: "Faculty",
          path: "/about/aim&objective",
          sub: [],
        },
        {
          name: "Students",
          path: "/about/history",
          sub: [],
        },
        {
          name: "Staff",
          path: "/about/faculty",
          sub: [],
        },
      ],
    },
    {
      name: "Contact",
      path: "/about",
      sub: [],
    },
  ];

  return (
    <>
      <header ariaLabel="IICT SUST" className="shadow-sm">
        <div className="mx-auto max-w-screen p-4">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex lg:w-0 lg:flex-1">
              <Link href="#">
                <img src="/iict.png" className="h-10 w-20" alt="IICT Logo" />
              </Link>
            </div>

            <nav
              ariaLabel="Site Nav"
              className="hidden gap-8 text-sm font-medium lg:flex justify-center items-center"
            >
              {routes.map((route) => {
                if (route.sub.length < 1) {
                  return (
                    <Link className="" href={`${route.path}`} key={route.name}>
                      <a className="">{route.name}</a>
                    </Link>
                  );
                } else {
                  return (
                    <Menu
                      as="div"
                      className="relative inline-block text-left"
                      key={route.name}
                    >
                      <div className="items-center flex">
                        <Menu.Button className="inline-flex w-full justify-center rounded-md   text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          {route.name}
                          <svg
                            className="h-5 w-4 flex justify-center items-center text-red-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </Menu.Button>
                      </div>
                      <Menu.Items className="absolute -right-12 w-56 top-12 origin-top-right divide-y divide-rose-300 rounded-md bg-gray-50 shadow-lg ring-4 ring-red-800 ring-opacity-5 focus:outline-none">
                        {route.sub.map((sub) => (
                          <Menu.Item key={sub.name}>
                            {({ active }) => (
                              <Link href={sub.path} passHref>
                                <a
                                  className={`group group-odd:bg-white justify-center flex w-full items-center rounded-sm px-2 py-3 text-sm  hover:bg-rose-800 hover:text-white `}
                                >
                                  {sub.name}
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Menu>
                  );
                }
              })}
            </nav>

            <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
              <Link href="#">
                <img src="/sust.png" className="h-12 w-12" alt="SUST Logo" />
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                className="rounded-lg bg-gray-100 p-2 text-gray-600"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default dynamic(() => Promise.resolve(Nav1), { ssr: false });
