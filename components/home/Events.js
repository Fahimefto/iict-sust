import { Button, Card } from "flowbite-react";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import Axios from "axios";

export default function Events() {
  const [upcomigEventes, setUpcomingEventes] = useState([]);

  async function getUpComingEventes() {
    try {
      const response = await Axios.get("http://localhost:5000/api/up-events");
      const data = response.data;
      setUpcomingEventes(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUpComingEventes();
  }, []);

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
      <div className="border ">
        <div className="   p-10 rounded-md ">
          <h2 className="text-2xl font-bold text-center mb-2 uppercase tracking-widest text-gray-800">
            Events
          </h2>
          <hr className="mb-10 border-2 w-1/4 m-auto border-rose-800"></hr>

          <Carousel responsive={responsive}>
            {upcomigEventes.length > 0 &&
              upcomigEventes.map((event) => {
                return (
                  <div key={event.id} className="max-w-sm h-full">
                    <Card
                      imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                      className="bg-gray-100 h-full"
                    >
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {event.title}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {event.description}
                      </p>
                    </Card>
                  </div>
                );
              })}
            {/* <div className="max-w-sm">
              <Card
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                className="bg-gray-100"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div> */}
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
