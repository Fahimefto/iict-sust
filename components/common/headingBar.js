import React from "react";

export default function HeadingBar(props) {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 text-center mt-10 mb-2">
        {props.name}
      </h1>
      <hr className="border-2 w-4/6 m-auto  border-rose-800"></hr>
    </>
  );
}
