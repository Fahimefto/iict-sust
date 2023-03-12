import React, { useState, useEffect } from "react";
import Axios from "axios";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import NoticeCard from "../../components/notice/noticeCard";

export default function Projects() {
  const [projectNotice, setProjectNotice] = useState([]);

  async function getProjectNotice() {
    try {
      const response = await Axios.get("http://localhost:5000/api/notices/projects");
      const data = response.data;

      setProjectNotice(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getProjectNotice();
  }, []);

  return (
    <Layout>
      <HeadingBar name="Projects Notice" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 max-w-screen-2xl lg:mx-auto place-items-center gap-5 mt-10">
      {projectNotice.map((notice) => (
        <NoticeCard key={notice.id} date={notice.createdAt} title={notice.title} description={notice.description} />
      ))}
      </div>
    </Layout>
  );
}
