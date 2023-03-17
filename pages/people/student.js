import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import FacultyCard from "../../components/about/facultyCard";
import StudentCard from "../../components/about/studentCard";

export default function Student() {
  const student = [
    {
      id: 1,
      name: "Hello Ahmed Hello",
      registrationNumber: "20188310**",
      email: "hello@gmail.com",
      batch: "2018",
    },
    {
      id: 2,
      name: "Hello Ahmed Hello",
      registrationNumber: "20188310**",
      email: "hello@gmail.com",
      batch: "2018",
    },
    {
      id: 3,
      name: "Hello Ahmed Hello",
      registrationNumber: "20188310**",
      email: "hello@gmail.com",
      batch: "2018",
    },
    {
      id: 4,
      name: "Hello Ahmed Hello",
      registrationNumber: "20188310**",
      email: "hello@gmail.com",
      batch: "2018",
    },
    {
      id: 5,
      name: "Hello Ahmed Hello",
      registrationNumber: "20188310**",
      email: "hello@gmail.com",
      batch: "2018",
    },
  ];
  return (
    <Layout>
      <HeadingBar name="Stduent" />
      <div className="max-w-screen-2xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 place-items-center">
        {student.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            email={student.email}
            designation={student.registrationNumber}
            batch={student.batch}
          />
        ))}
      </div>
    </Layout>
  );
}
