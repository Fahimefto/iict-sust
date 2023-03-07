import React from "react";
import Layout from "../../components/common/Layout";
import { ListGroup } from "flowbite-react";
import { BiBulb } from "react-icons/bi";

const aims = [
  {
    id: 1,
    title: "To provide quality education in the field of ICT",
  },
  {
    id: 2,
    title:
      "To produce ICT professionals who can contribute to the development of the country",
  },
  {
    id: 3,
    title: "To conduct research in the field of ICT",
  },
  {
    id: 1,
    title: "To provide quality education in the field of ICT",
  },
  {
    id: 2,
    title:
      "To produce ICT professionals who can contribute to the development of the country",
  },
  {
    id: 3,
    title: "To conduct research in the field of ICT",
  },
  {
    id: 1,
    title: "To provide quality education in the field of ICT",
  },
  {
    id: 2,
    title:
      "To produce ICT professionals who can contribute to the development of the country",
  },
  {
    id: 3,
    title: "To conduct research in the field of ICT",
  },
  {
    id: 1,
    title: "To provide quality education in the field of ICT",
  },
  {
    id: 2,
    title:
      "To produce ICT professionals who can contribute to the development of the country",
  },
  {
    id: 3,
    title: "To conduct research in the field of ICT",
  },
];

function Aimobjective() {
  return (
    <Layout>
      <section>
        {" "}
        <h1 className="text-2xl font-bold text-gray-800 text-center mt-10 mb-2">
          Aim & Objective
        </h1>
        <hr className="border-2 w-4/6 m-auto  border-rose-800"></hr>
        <div className="flex flex-col items-center justify-center min-w-screen-2xl">
          <ul className="  mx-10 max-w-screen-2xl flex flex-col border-none mt-5 list-disc">
            {aims.map((aim, i) => (
              <li
                className="border rounded-md bg-white list-inside px-3 py-3 cursor-pointer hover:text-white hover:bg-rose-800"
                key={i}
              >
                {aim.title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default Aimobjective;
