import React, { useEffect, useState } from "react";
import HeadingBar from "../../components/common/headingBar";
import FacultyCard from "../../components/about/facultyCard";
import Layout from "../../components/common/Layout";
import { Axios } from "axios";

export default function Officerstaff() {
  const officer = [
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
  // const staff = [
  //   {
  //     id: 1,
  //     name: "Hello Ahmed Hello",
  //     designation: "Professor",
  //     email: "hello@gmail.com",
  //   },
  //   {
  //     id: 1,
  //     name: "Hello Ahmed Hello",
  //     designation: "Professor",
  //     email: "hello@gmail.com",
  //   },
  //   {
  //     id: 1,
  //     name: "Hello Ahmed Hello",
  //     designation: "Professor",
  //     email: "hello@gmail.com",
  //   },
  //   {
  //     id: 1,
  //     name: "Hello Ahmed Hello",
  //     designation: "Professor",
  //     email: "hello@gmail.com",
  //   },
  //   {
  //     id: 1,
  //     name: "Hello Ahmed Hello",
  //     designation: "Professor",
  //     email: "hello@gmail.com",
  //   },
  // ];
  const [staff,setStaff] = useState([])
  async function getStaff(){
    try{
      const response = await Axios.get("http://localhost:5000/api/staffs");
      const data = response.data;
      console.log(data);
      setStaff(data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getStaff();
  })
  console.log(getStaff);
  return (
    <Layout>
      <HeadingBar name="Officer" />
      <div className="max-w-screen-2xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 place-items-center">
        {officer.map((officer) => (
          <FacultyCard
            name={officer.name}
            email={officer.email}
            designation={officer.designation}
            key={officer.id}
          />
        ))}
      </div>

      <HeadingBar name="Staff" />
      <div className="max-w-screen-2xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 place-items-center">
        {staff.map((staff) => (
          <>
          <FacultyCard
            name={staff.staffName}
            email={staff.staffEmail}
            designation={staff.staffDesignation}
            key={staff.StaffId}
          />
          <p>Name</p>
          </>
          
        ))}
      </div>
    </Layout>
  );
}
