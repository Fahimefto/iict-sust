import React, { useState, useEffect } from "react";
import EventCard from "../life_at_iict/eventCard";
import Carousel from "react-multi-carousel";
import { Button } from "flowbite-react";
import Axios from "axios";

export default function Achievements() {
  const [allAcheivements, setAllAchievements] = useState([]);

  async function getCertificateNotice() {
    try {
      const response = await Axios.get(
        "http://localhost:5000/api/achievements"
      );
      const data = response.data;
      setAllAchievements(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCertificateNotice();
  }, []);

  console.log("allAcheivements", allAcheivements);
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="border bg-gray-50 ">
        <div className="   p-10 rounded-md ">
          <h2 className="text-2xl font-bold text-center mb-2 uppercase tracking-widest text-gray-800">
            Achievement
          </h2>
          <hr className="mb-10 border-2 w-1/4 m-auto border-rose-800"></hr>

          <Carousel responsive={responsive}>
            {allAcheivements.length > 0 &&
              allAcheivements.map((achievement) => (
                <div key={achievement.id} className="event-card-container">
                  <EventCard
                    date={achievement.date}
                    location={achievement.location}
                    title={achievement.title}
                    description={achievement.description}
                  />
                </div>
              ))}
          </Carousel>

          <Button
            className="m-auto mt-10 "
            color="failure"
            outline={true}
            pill={true}
          >
            See All
          </Button>
        </div>
      </div>
    </>
  );
}
