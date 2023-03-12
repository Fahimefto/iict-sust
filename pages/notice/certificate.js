import React, { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import programCard from "../../components/programs/programCard";
import NoticeCard from "../../components/notice/noticeCard";
import Axios from "axios";
export default function CertificateNotice() {
  const [certificateNotice, setCertificateNotice] = useState([]);

  async function getCertificateNotice() {
    try {
      const response = await Axios.get("http://localhost:5000/api/notices/certificate");
      const data = response.data;
      setCertificateNotice(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCertificateNotice();
  }, []);
  return (
    <Layout>
      <HeadingBar name="Certificate Notice" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 max-w-screen-2xl lg:mx-auto place-items-center gap-5 mt-10">
      {certificateNotice.map((notice) => (
        <NoticeCard key={notice.id} date={notice.createdAt} title={notice.title} description={notice.description} />
      ))}
      </div>
    </Layout>
  );
}
