import React, { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import HeadingBar from "../../components/common/headingBar";
import EventCard from "../../components/life_at_iict/eventCard";
import Axios from "axios";

function News() {
  const [newsAndEventes, setNewsAndEventes] = useState([]);

  async function getNewsAndEventes() {
    try {
      const response = await Axios.get(
        "http://localhost:5000/api/events"
      );
      const data = response.data;
      setNewsAndEventes(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
   getNewsAndEventes();
  }, []);
  return (
    <Layout>
      <HeadingBar name="News & Events" />
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 lg:mx-auto max-w-screen-2xl gap-5 mt-10">
      {newsAndEventes.map((acheivement) => (
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

export default News;
