import React from "react";
import { reviews } from "../constant";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className=" max-container">
      <h3
        className="font-bold font-palanquin text-4xl text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        What Our <span className="text-coral-red">Customer</span> says?
      </h3>
      <p
        className="m-auto mt-4 max-w-lg  text-center info-text"
        data-aos="fade-down"
        data-aos-duration="900"
      >
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div
        className="flex flex-1 mt-24 justify-evenly  items-center max-lg:flex-col gap-14"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
