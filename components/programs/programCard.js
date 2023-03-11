import React from "react";

import { MdOutlineSchool } from "react-icons/md";
import { TbAlignBoxLeftTop } from "react-icons/tb";
export default function ProgramCard() {
  return (
    <div
      className="bg-white max-w-6xl mt-10 lg:mx-auto  mx-10
      "
    >
      <article className="animate-background rounded-xl  bg-[length:400%_400%] p-0.5 border-2 border-rose-800 transition [animation-duration:_6s] ">
        <div className="rounded-[10px] bg-white p-4 items-center text-center sm:p-6">
          <a href="#" className="justify-center flex flex-col">
            <h3 className="mt-0.5 text-lg font-bold text-gray-900">
              Masters in IT
            </h3>
            <h3 className="mt-0.5 text font-medium text-gray-900">
              Total Credit : 100
            </h3>
            <h3 className="mt-0.5  font-medium text-gray-900">
              Course Duration : 1.5 Years
            </h3>
            <h3 className="mt-0.5  font-medium text-gray-900">
              Total Semester : 3
            </h3>
          </a>

          <div className="mt-4 flex gap-3 justify-center h-full">
            <span className="whitespace-nowrap rounded-full bg-rose-800 px-3 py-2  text-white font-bold flex items-center">
              Curriculam
              <TbAlignBoxLeftTop className="ml-1" />
            </span>
            <span className="whitespace-nowrap rounded-full bg-rose-800 px-3 py-2  text-white font-bold flex items-center">
              Admission
              <MdOutlineSchool className="ml-1" />
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
