import Image from "next/image";
import React from "react";

export default function ImageSlider() {
  return (
    <div className="w-full relative    ">
      <div className=" bg-gradient-to-b from-gray-700 via-gray-900 to-black relative">
        <picture>
          <img
            src="/event-swe-tour-2k19.jpg"
            className="w-full h-[35rem] mix-blend-soft-light object-cover"
          ></img>
        </picture>
      </div>
      <div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white  text-2xl lg:text-5xl">
          Departmental Tour, Saint Martin Tour, 2019
        </h1>
      </div>
    </div>
  );
}
