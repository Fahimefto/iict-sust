import { Card, Dropdown } from "flowbite-react";
import React from "react";

export default function FacultyCard(props) {
  return (
    <div className="min-w-full ">
      <Card className="hover:bg-gray-100 hover:scale-95 duration-500 ease-out">
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
        </div>
      </Card>
    </div>
  );
}
