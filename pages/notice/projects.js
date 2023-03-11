import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import NoticeCard from "../../components/notice/noticeCard";

export default function projects() {
  return (
    <Layout>
      <HeadingBar name="Projects Notice" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 max-w-screen-2xl lg:mx-auto place-items-center gap-5 mt-10">
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
      </div>
    </Layout>
  );
}
