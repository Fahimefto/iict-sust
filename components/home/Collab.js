import { Button } from "flowbite-react";
import React from "react";
import Carousel from "react-multi-carousel";
import CollabCard from "../common/CollabCard";

export default function Collab() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="border ">
        <div className="   p-10 rounded-md ">
          <h2 className="text-2xl font-bold text-center mb-2 uppercase tracking-widest text-gray-800">
            Industry Collaboration
          </h2>
          <hr className="mb-10 border-2 w-1/4 m-auto border-rose-800"></hr>

          <Carousel responsive={responsive} autoPlay={true}>
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
            <CollabCard />
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
