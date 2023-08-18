import React, { useState } from 'react';
import { routes } from '../../utils/Routes';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Menu } from '@headlessui/react';

const Nav1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header aria-label="IICT SUST" className="shadow-md bg-white">
        <div className="mx-auto max-w-screen p-4">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex lg:w-0 lg:flex-1">
              <Link href="/">
                <img
                  src="/images/iict.png"
                  className="h-10 w-20"
                  alt="IICT Logo"
                />
              </Link>
            </div>

            <nav
              aria-label="Site Nav"
              className="hidden gap-8 text-sm font-medium lg:flex justify-center items-center"
            >
              {routes.map(route => {
                return route.sub.length ? (
                  <Menu
                    as="div"
                    className="relative inline-block text-left"
                    key={route.name}
                  >
                    <div className="items-center flex">
                      <Menu.Button className="inline-flex w-full justify-center rounded-md   text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {route.name}
                        <i className=" icon-arrow-down h-5 w-4 flex justify-center items-center text-red-dark" />
                      </Menu.Button>
                    </div>
                    <Menu.Items className="absolute -right-12 w-56 top-12 origin-top-right divide-y divide-red-light rounded-md bg-gray-50 shadow-lg ring-4 ring-red-darker ring-opacity-5 focus:outline-none">
                      {route.sub.map(sub => (
                        <Menu.Item key={sub.name}>
                          {({ active }) => (
                            <Link href={sub.path} passHref>
                              <a
                                className={`group group-odd:bg-white justify-center flex w-full items-center rounded-sm px-2 py-3 text-sm  hover:bg-red-darker hover:text-white `}
                              >
                                {sub.name}
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                ) : (
                  <Link className="" href={route.path} key={route.name}>
                    {route.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
              <Link href="#">
                <img
                  src="/images/sust.png"
                  className="h-12 w-12"
                  alt="SUST Logo"
                />
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                className="rounded-lg bg-gray-100 p-2 text-gray-600"
                type="button"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <i
                  className={` ${
                    isOpen ? 'icon-cross text-red-dark' : 'icon-toggle-menu'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="lg:hidden absolute w-full top-18 right-0 flex max-h-[35rem] md:min-h-[30rem] mb-10 pb-5 flex-col justify-between border-r bg-white   border-b-2 border-opacity-25 border-gray-700 rounded-b-2xl shadow-lg">
          <div className="px-5  overflow-y-auto">
            <nav
              aria-label="Side Nav"
              className="mt-6 flex flex-col space-y-1 even:bg-slate-50"
            >
              {routes.map(route => {
                if (route.sub.length < 1) {
                  return (
                    <>
                      <Link href={route.path} key={route.name}>
                        <a className="flex items-center gap-2 rounded-lg hover:bg-red-lighter px-4 py-2 text-gray-800">
                          <i className=" icon-arrow-right-circle h-5 w-5 text-red-darker hover:text-white" />
                          <span className="text-sm font-medium">
                            {route.name}
                          </span>
                        </a>
                      </Link>
                      <hr></hr>
                    </>
                  );
                } else {
                  return (
                    <>
                      <details
                        className="group [&_summary::-webkit-details-marker]:hidden"
                        key={route.name}
                      >
                        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-800 hover:bg-red-lighter hover:text-gray-700">
                          <div className="flex items-center gap-2">
                            <i className=" icon-arrow-right-circle h-5 w-5 text-red-darker hover:text-white" />

                            <span className="text-sm font-medium">
                              {route.name}
                            </span>
                          </div>

                          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <i className="icon-arrow-down h-5 w-5" />
                          </span>
                        </summary>

                        <nav
                          aria-label="Teams Nav"
                          className="mt-2 flex flex-col px-4"
                        >
                          {route.sub.map((sub, index) => {
                            return (
                              <>
                                <Link href={sub.path} key={sub.name}>
                                  <a className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 hover:bg-red-darker hover:text-white">
                                    <i className="flex icon-minus h-5 w-5 text-red-dark justify-center items-center" />
                                    <span className="text-sm font-medium">
                                      {sub.name}
                                    </span>
                                  </a>
                                </Link>
                                {route.sub.length !== index + 1 ? <hr /> : null}
                              </>
                            );
                          })}
                        </nav>
                      </details>
                      <hr />
                    </>
                  );
                }
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Nav1), { ssr: false });
