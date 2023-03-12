import React, { useEffect, useState } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import ProgramCard from "../../components/programs/programCard";
import Axios from "axios";

export default function Graduate() {
  const [graduateProgram, setGraduateProgram] = useState([]);

  async function getGraduateProgram() {
    try {
      const response = await Axios.get(
        "http://localhost:5000/api/programs/postgrad"
      );
      console.log(response);
      const data = response.data;
      setGraduateProgram(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getGraduateProgram();
  }, []);
  //console.log(getGraduateProgram);

  return (
    <Layout>
      <HeadingBar name="Graduate Program " />
      {graduateProgram.map((program) => (
        <ProgramCard key={program._id} type={program.type}date={program.createdAt} title={program.title} description={program.description} session={program.session} file={program.file} image={program.image}/>
      ))}
     
    </Layout>
  );
}
