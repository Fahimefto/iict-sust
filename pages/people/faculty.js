import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import FacultyCard from "../../components/about/facultyCard";

export default function Faculty() {
  const faculty = [
    {
      id: 1,
      name: "Hello Ahmed Hello",
      designation: "Professor",
      email: "hello@gmail.com",
    },
    {
      id: 1,
      name: "Hello Ahmed Hello",
      designation: "Professor",
      email: "hello@gmail.com",
    },
    {
      id: 1,
      name: "Hello Ahmed Hello",
      designation: "Professor",
      email: "hello@gmail.com",
    },
    {
      id: 1,
      name: "Hello Ahmed Hello",
      designation: "Professor",
      email: "hello@gmail.com",
    },
    {
      id: 1,
      name: "Hello Ahmed Hello",
      designation: "Professor",
      email: "hello@gmail.com",
    },
  ];
  return (
    <Layout>
      <HeadingBar name="Faculty" />
      <div className="max-w-screen-2xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 place-items-center">
        {faculty.map((faculty) => (
          <FacultyCard
            name={faculty.name}
            email={faculty.email}
            designation={faculty.designation}
            key={faculty.id}
          />
        ))}
      </div>
    </Layout>
  );
}
