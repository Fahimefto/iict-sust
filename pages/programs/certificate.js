import React, { useEffect, useState } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import ProgramCard from "../../components/programs/programCard";
import Axios from "axios";
export default function Certificate() {
  const [certificateCourse, setCertificateCourse] = useState([]);

  async function getCertificateCourse() {
    try {
      const response = await Axios.get(
        "http://localhost:5000/api/programs/certificate-course"
      );
      console.log(response);
      const data = response.data;
      setCertificateCourse(data);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getCertificateCourse();
  }, []);
  //console.log( getCertificateCourse);
  return (
    <Layout>
      <HeadingBar name="Certificate Course" />
      {certificateCourse.map((program) => (
        <ProgramCard key={program._id} type={program.type}date={program.createdAt} title={program.title} description={program.description} session={program.session} file={program.file} image={program.image}/>
      ))}
    </Layout>
  );
}
