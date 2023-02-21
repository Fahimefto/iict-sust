import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel() {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url("/3.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-indigo-800"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <h1 className="mb-5 text-4xl font-bold ">
            Institute of Information and Communication Technology, SUST
          </h1>
          <p className="mb-5 w-full mx-auto">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.Provident cupiditate voluptatem et in.
            Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.Provident cupiditate
            voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id
            nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
