import React from "react";
import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, price, name, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} className="w-[280px] h-[280px]" alt="" />
      <div className="flex mt-8 justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl  leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl text-coral-red font-semibold font-montserrat leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
