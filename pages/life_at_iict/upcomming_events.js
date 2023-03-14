import React, { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import EventCard from "../../components/life_at_iict/eventCard";
import Axios from "axios";

export default function Upcomming_event() {
  const [upcomigEventes, setUpcomingEventes] = useState([]);

  async function getUpComingEventes() {
    try {
      const response = await Axios.get(
        "http://localhost:5000/api/up-events"
      );
      const data = response.data;
      setUpcomingEventes(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
   getUpComingEventes();
  }, []);
  return (
    <Layout>
      <HeadingBar name="Upcomming Events" />
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 lg:mx-auto max-w-screen-2xl gap-5 mt-10">
      {upcomigEventes.map((acheivement) => (
          <EventCard
            key={acheivement.id}
            date={acheivement.date}
            location={acheivement.location}
            title={acheivement.title}
            description={acheivement.description}
          />
        ))}
      </div>
    </Layout>
  );
}
