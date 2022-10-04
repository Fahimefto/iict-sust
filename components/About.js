import React from "react";
import { FaUniversity } from "react-icons/fa";
export default function About() {
  return (
    <div className="flex mt-10">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center ">
          <FaUniversity size={30} />

          <h1 className=" ml-3 text-3xl text-center font-bold ">
            About <span className="text-rose-700">IICT, SUST</span>
          </h1>
        </div>
        <div className=" text-lg px-14 sm:m-5 bg- py-5 rounded-lg">
          <h1 className="text-justify ">
            Institute of Information and Communication Technology (IICT), the
            first institute of Shahjalal University of Science and Technology
            was established in 2007 with an aim to promote and provide
            facilities for both post graduate and graduate studies and to
            actively pursue research in ICT in order to develop knowledge based
            products and services. It cultures a proactive and enthusiastic
            environment welcoming innovation, entrepreneurship and scholarship.
            IICT currently offers Masters in IT, PGD in IT, including
            undergraduate program B.Sc. (Engg.) in Software Engineering (SWE)
            since 2016.
          </h1>
        </div>
      </div>
    </div>
  );
}
