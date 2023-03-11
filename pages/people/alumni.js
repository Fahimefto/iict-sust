import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import Link from "next/link";

export default function Alumni() {
  const alumnis = [
    {
      bacth: "Praromvik",
      session: "2016-17",
    },
    {
      bacth: "Praromvik",
      session: "2016-17",
    },
    {
      bacth: "Praromvik",
      session: "2016-17",
    },
    {
      bacth: "Praromvik",
      session: "2016-17",
    },
    {
      bacth: "Praromvik",
      session: "2016-17",
    },
    {
      bacth: "Praromvik",
      session: "2016-17",
    },
  ];
  return (
    <Layout>
      <HeadingBar name="Alumni" />
      <div className="mt-10">
        {alumnis.map((alumni, index) => (
          <Link href="#" key={index}>
            <div className="max-w-screen-xl lg:mx-auto border-2 border-rose-800 p-2 rounded-md text-center xs:mx-10 mb-5">
              <h2 className="font-bold text-xl text-gray-800">
                {alumni.bacth}
              </h2>
              <h2 className="text-gray-600 ">Session: {alumni.session}</h2>
              <button className="bg-rose-900 rounded-full px-3 py-2  font-bold mt-2 text-white hover:scale-105">
                See More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
