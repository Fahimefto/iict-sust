import { Button, Card, Dropdown } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { HiInformationCircle } from "react-icons/hi";
export default function FacultyCard(props) {
  return (
    <div className="min-w-full ">
      <Card className="hover:bg-gray-100  duration-500 ease-out">
        <div className="flex justify-center px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt={`${props.name}`}
          />
          <h5 className="mb-1 text-xl font-bold text-gray-800 dark:text-white">
            {props.name}
          </h5>
          <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
            {props.designation}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {props.email}
          </span>
          {props.id ? (
            <Link href={`/about/faculty/${props.name}`}>
              <div className="px-3 py-2 mt-5 text-sm ease-in-out duration-200 hover:scale-95 rounded-full  bg-rose-800 text-white cursor-pointer flex items-center ">
                See More
                <HiInformationCircle size="1rem" className="ml-1" />
              </div>
            </Link>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
