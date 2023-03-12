import React ,{ useEffect, useState } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import ProgramCard from "../../components/programs/programCard";
import Axios from "axios";

export default function Diploma() {

  const [diplomaProgram, setDiplomaProgram] = useState([]);

  async function getDiplomaProgram() {
    try {
      const response = await Axios.get(
        "http://localhost:5000/api/programs/diploma"
      );
      console.log(response);
      const data = response.data;
      setDiplomaProgram(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDiplomaProgram();
  }, []);
  //console.log(getdiplomaProgram);
  return (
    <Layout>
      <HeadingBar name="Diploma Course" />
      {diplomaProgram.map((program) => (
        <ProgramCard key={program._id} type={program.type}date={program.createdAt} title={program.title} description={program.description} session={program.session} file={program.file} image={program.image}/>
      ))}
      
    </Layout>
  );
}
