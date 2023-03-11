import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import ProgramCard from "../../components/programs/programCard";

export default function Undergraduate() {
  return (
    <Layout>
      <HeadingBar name="Under-Graduation Programs" />
      <ProgramCard /> <ProgramCard /> <ProgramCard /> <ProgramCard />
    </Layout>
  );
}
