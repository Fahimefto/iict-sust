import React from "react";
import EventCard from "./EventCard";
import Carousel from "react-multi-carousel";
import { Button } from "flowbite-react";

export default function Achievements() {
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
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
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
