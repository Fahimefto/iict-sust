import React, { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import NoticeCard from "../../components/notice/noticeCard";
import Axios from "axios";

export default function General() {
  const [generalNotice, setGeneralNotice] = useState([]);

  async function getGeneralNotice() {
    try {
      const response = await Axios.get("http://localhost:5000/api/notices");
      const status = response.status;
      const data = response.data;
      const filteredGeneralNotice = data.filter(
        (data) => data.type === "urgent"
      );
      setGeneralNotice(filteredGeneralNotice);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getGeneralNotice();
  }, []);

  console.log(generalNotice);
  return (
    <Layout>
      <HeadingBar name="General Notice" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 max-w-screen-2xl lg:mx-auto place-items-center gap-5 mt-10">
      {generalNotice.map((notice) => (
        <NoticeCard key={notice.id} date={notice.createdAt} title={notice.title} description={notice.description} />
      ))}
      </div>
    </Layout>
  );
}
