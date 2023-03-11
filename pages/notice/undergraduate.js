import React, { useState, useEffect } from "react";
import Axios from "axios";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import NoticeCard from "../../components/notice/noticeCard";

export default function Undergraduate() {
  const [undergraduateNotice, setUndergraduateNotice] = useState([]);

  async function getUndergraduateNotice() {
    try {
      const response = await Axios.get("http://localhost:5000/api/notices");
      const data = response.data;
      const filteredUndergraduateNotice = data.filter(
        (data) => data.type === "sports"
      );
      setUndergraduateNotice(filteredUndergraduateNotice);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUndergraduateNotice();
  }, []);
  return (
    <Layout>
      <HeadingBar name="Undergraduate Notice" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 max-w-screen-2xl lg:mx-auto place-items-center gap-5 mt-10">
      {undergraduateNotice.map((notice) => (
        <NoticeCard key={notice.id} date={notice.createdAt} title={notice.title} description={notice.description} />
      ))}
      </div>
    </Layout>
  );
}
