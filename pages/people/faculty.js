import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import PeopleCard from "../../components/people/PeopleCard";

export default function Faculty() {
  const teachers = [
    { name: "Teacher 1", department: "Department 1" },
    { name: "Teacher 2", department: "Department 2" },
    { name: "Teacher 3", department: "Department 3" },
    { name: "Teacher 4", department: "Department 4" },
    { name: "Teacher 5", department: "Department 5" },
  ];

  return (
    <Layout>
      <HeadingBar name="Faculty" />
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-10 max-w-screen-2xl lg:mx-auto place-items-center gap-5 mt-10">
      {teachers.map((teacher) => (
        <PeopleCard
          key={teacher.name}
          name={teacher.name}
          department={teacher.department}
        />
      ))}
      </div>
    </Layout>
  );
}
