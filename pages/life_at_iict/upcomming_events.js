import React from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import EventCard from "../../components/life_at_iict/eventCard";

export default function Upcomming_event() {
  return (
    <Layout>
      <HeadingBar name="Upcomming Events" />
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 lg:mx-auto max-w-screen-2xl gap-5 mt-10">
        <EventCard /> <EventCard /> <EventCard /> <EventCard /> <EventCard />
        <EventCard /> <EventCard />
      </div>
    </Layout>
  );
}
