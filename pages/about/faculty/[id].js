import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import Layout from "../../../components/common/Layout";
import HeadingBar from "../../../components/common/headingBar";
import { Button, Card, Tabs } from "flowbite-react";
import { AiFillLinkedin } from "react-icons/ai";

export default function FacultyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  return (
    <Layout>
      <HeadingBar name={`Faculty Details : ${id}`} />
      <div class="container mx-auto my-5 p-5 min-h-[50rem]">
        <div class="md:flex no-wrap md:-mx-2 h-full">
          <div class="w-full md:w-3/12 md:mx-2">
            <div class="bg-white p-3 hover:shadow">
              <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8"></div>
              <div class="grid grid-cols-1">
                <div class="text-center my-2">
                  <img
                    class="w-auto rounded-full mx-auto"
                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="bg-white p-3 border-t-4 border-rose-800">
              <div class="image overflow-hidden">
                <img
                  class="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                Name
              </h1>
              <h3 class="text-gray-600 font-lg text-semibold leading-6">
                Designation
              </h3>

              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto">
                    <span class="bg-yellow-300 py-1 px-2 rounded text-gray=800 text-sm">
                      On Leave
                    </span>
                  </span>
                </li>
                <li class="flex items-center justify-between py-3">
                  <div>Links</div>
                  <div className="flex ">
                    <AiFillLinkedin size="2rem" />
                    <AiFillLinkedin size="2rem" />
                    <AiFillLinkedin size="2rem" />
                    <AiFillLinkedin size="2rem" />
                  </div>
                </li>
              </ul>
            </div>

            <div class="my-4"></div>
          </div>

          <div class="w-full md:w-9/12 mx-2 h-64">
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">Jane</div>
                  </div>

                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">+11 998001001</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Current Address</div>
                    <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Permanant Address</div>
                    <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com">
                        jane@example.com
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Birthday</div>
                    <div class="px-4 py-2">Feb 06, 1998</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-4"></div>

            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="grid grid-cols-2">
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">Experience</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    <li>
                      <div class="text-teal-600">Owner at Her Company Inc.</div>
                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                    <li>
                      <div class="text-teal-600">Owner at Her Company Inc.</div>
                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                    <li>
                      <div class="text-teal-600">Owner at Her Company Inc.</div>
                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                    <li>
                      <div class="text-teal-600">Owner at Her Company Inc.</div>
                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">Education</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    <li>
                      <div class="text-teal-600">Masters Degree in Oxford</div>
                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                    <li>
                      <div class="text-teal-600">Bachelors Degreen in LPU</div>
                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
