import React ,{ useEffect, useState } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import ProgramCard from "../../components/programs/programCard";
import Axios from "axios";
export default function Undergraduate() {
  const [undergraduateProgram, setunderGraduateProgram] = useState([]);

  async function getunderGraduateProgram() {
    try {
      const response = await Axios.get(
        "http://localhost:5000/api/programs/undergrad"
      );
      console.log(response);
      const data = response.data;
      setunderGraduateProgram(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getunderGraduateProgram();
  }, []);
  //console.log(getunderGraduateProgram);
  return (
    <Layout>
      <HeadingBar name="Under-Graduation Programs" />
      {undergraduateProgram.map((program) => (
        <ProgramCard key={program._id} type={program.type} date={program.createdAt} title={program.title} description={program.description} session={program.session} file={program.file} image={program.image}/>
      ))}
    </Layout>
  );
}
