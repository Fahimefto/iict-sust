import React, { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import EventCard from "../../components/life_at_iict/eventCard";
import Axios from "axios";

export default function Acheivement() {
  const [acheivements, setAchievements] = useState([]);

  async function getAchievements() {
    try {
      const response = await Axios.get(
        "http://localhost:5000/api/achievements"
      );
      const data = response.data;
      setAchievements(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAchievements();
  }, []);

  return (
    <Layout>
      <HeadingBar name="Achievements" />
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 lg:mx-auto max-w-screen-2xl gap-5 mt-10">
        {acheivements.map((acheivement) => (
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
