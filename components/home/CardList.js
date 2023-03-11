import Link from "next/link";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import Button from "../common/Button";
export default function CardList() {
  return (
    <div className=" shadow-none  border-none mt-10 mb-10">
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-800 dark:text-white">
        Institute of Information and Communication Technology,{" "}
        <span className="text-rose-800">SUST</span>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 md:mx-20   mx-5 text-justify mt-5">
        The Institute of Information and Communication Technology (IICT) at
        Shahjalal University of Science and Technology (SUST) is a leading
        educational institution in Bangladesh that offers undergraduate,
        graduate and postgraduate programs in information and communication
        technology. The IICT was established in 2000 and has since then become
        one of the premier institutions of its kind in the country. The IICT is
        committed to providing high-quality education and research in the field
        of information and communication technology. Its programs are designed
        to prepare students to become innovative and creative professionals who
        can effectively contribute to the development of the country&apos;s ICT
        industry. The Institute offers a range of programs, including Bachelor
        of Science (BSc) in Software Engineering, Master of Science (MSc) in
        Information and Communication Technology, and PhD in Information and
        Communication Technology.
      </p>
    </div>
  );
}
