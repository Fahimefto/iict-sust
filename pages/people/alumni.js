import React, { useEffect, useState } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import Link from "next/link";
import Axios from "axios";
export default function Alumni() {
  const [alumni, setAlumni] = useState([]);

  async function getAlumni() {
    try {
      const response = await Axios.get("http://localhost:5000/api/alumni");
      //console.log(response);
      const data = response.data;
      console.log(data);
      setAlumni(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAlumni();
  }, []);
  //console.log(getAlumni);
  return (
    <Layout>
      <HeadingBar name="Alumni" />
      <div className="mt-10">
        {alumni.map((alumni) => (
          <Link href="#" key={alumni.id}>
            <div className="max-w-screen-xl lg:mx-auto border-2 border-rose-800 p-2 rounded-md text-center xs:mx-10 mb-5">
              <h2 className="font-bold text-xl text-gray-800">
                {alumni.batchName}
              </h2>
              <h2 className="text-gray-600 ">Session: {alumni.session}</h2>
              <button className="bg-rose-900 rounded-full px-3 py-2  font-bold mt-2 text-white hover:scale-105">
                See More{alumni.file}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
