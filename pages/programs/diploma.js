import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import ProgramCard from "../../components/notice/programCard";

export default function Diploma() {
  return (
    <Layout>
      <HeadingBar name="Diploma Course" />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
    </Layout>
  );
}
