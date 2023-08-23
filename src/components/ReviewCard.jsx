import React from "react";
import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="Customer"
        className="rounded-full object-cover w-[120px] h-[120px] "
      />
      <p className="text-center mt-6 info-text max-w-sm">{feedback}</p>
      <div className="flex justify-center items-center mt-3 gap-2">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="text-slate-gray font-montserrat text-xl">{rating}</p>
      </div>
      <h3 className="text-3xl font-palanquin ">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
