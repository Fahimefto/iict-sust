import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import ProgramCard from "../../components/programs/programCard";

export default function Graduate() {
  return (
    <Layout>
      <HeadingBar name="Graduate Program" />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
    </Layout>
  );
}
