import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constant";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constant";
import ShoeCard from "../components/ShoeCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  AOS.init();
  return (
    <>
      <section
        className="flex xl:flex-row flex-col justify-center items-center w-full  min-h-screen gap-10 max-container overflow-x-hidden "
        id="home"
      >
        {/* Hero-left  */}
        <div className="relative xl:w-2/5  flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-10">
            <span className=" xl:bg-white relative xl:whitespace-nowrap z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span>
            Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop Now" iconURL={arrowRight} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((item) => (
              <div className="" key={item.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {item.value}
                </p>
                <p className="font-montserrat text-slate-gray">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* End Of Hero-left  */}

        {/* Hero-right  */}
        <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40  bg-primary bg-hero bg-cover bg-center -mt-2 max-lg:w-full  w-[100%]">
          <img
            src={bigShoeImg}
            alt="Shoe Collection "
            width={610}
            height={500}
            className="object-contain relative z-10 -mt-10 "
          />
          <div
            className="flex justify-center items-center  sm:gap-6 gap-4 absolute bottom-0 sm:left-[25%] max-sm:px-6 
          "
          >
            {shoes.map((image, index) => (
              <div key={index}>
                <ShoeCard
                  imgURL={image}
                  changeBigShoeImage={(shoe) => {
                    setBigShoeImg(shoe);
                  }}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
        {/* End Of Hero-right  */}
      </section>
    </>
  );
};

export default Hero;
