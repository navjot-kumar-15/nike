import React from "react";

const ServiceCard = ({ label, imgURL, subtext }) => {
  return (
    <div className="flex flex-col flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-bold font-palanquin text-3xl leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
