import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2
          className=" font-palanquin text-8xl capitalize  font-bold lg:max-w-lg "
          data-aos="fade-right"
          data-aos-duration="800"
        >
          We provide you <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> quality </span>
          Shoes
        </h2>
        <p
          className="mt-4 lg:max-w-lg  info-text "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p
          className="mt-6 lg:max-w-lg info-text"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11" data-aos="fade-up" data-aos-duration="1000">
          <Button label="View Details" iconURL={arrowRight} />
        </div>
      </div>
      <div
        className="flex flex-1 justify-center items-center"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <img
          src={shoe8}
          alt="Shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
