import React, { useEffect, useState } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import Axios from "axios";

export default function Research() {
  const [tabs, setTabs] = useState(0);
  const [researchAreas, setResearchAreas] = useState([])

  async function getResearchAreas() {
    try {
      const response = await Axios.get("http://localhost:5000/api/researchs");
      const data = response.data;
      setResearchAreas(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getResearchAreas();
  }, []);

  // const researchAreas = [
  //   {
  //     name: "Machine Learning",
  //     description:
  //       "Machine learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence. Machine learning algorithms build a mathematical model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so.",
  //   },
  //   {
  //     name: "Natural Language Processing",
  //     description:
  //       "Natural language ",
  //   },
  //   {
  //     name: "Computer Vision",
  //     description:
  //       "Computer vision is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to understand and automate tasks that the human visual system can do.",
  //   },
  // ];
  return (
    <Layout>
      <HeadingBar name="Research Areas" />
      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto mt-10">
        <div className="min-w-fit  p-5 rounded-md">
          <div>
            <h1 className="font-bold text-xl">Research Areas</h1>
            <hr className="mt-1 border-2 border-rose-800"></hr>
            <ul className="mt-5">
              {researchAreas.map((area, index) => (
                <li
                  className="p-5 border rounded-md hover:cursor-pointer hover:bg-rose-800 font-bold hover:text-white border-rose-800"
                  onClick={() => setTabs(index)}
                  key={index}
                >
                  {area.area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" bg-gray-50 rounded-md border mx-5 p-5">
          <h1 className="text-xl font-bold ">{researchAreas[tabs]?.title}</h1>
          <hr className="border-2 border-rose-800 mt-1"></hr>
          <p className="cursor-default leading-relaxed mt-5">
            {researchAreas[tabs]?.description}
          </p>
        </div>
      </div>
    </Layout>
  );
}
