import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1 " data-aos="fade-right" data-aos-duration="800">
        <img
          src={offer}
          alt="Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col  max-xl:text-8xl  ">
        <h2
          className=" font-palanquin text-[5rem] capitalize w-full font-bold lg:max-w-lg max-xl:w-full "
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <span className="text-coral-red ">Special</span> Offer
        </h2>
        <p
          className="mt-4 info-text"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p
          className="mt-6 info-text"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div
          className="mt-11 flex flex-wrap max-lg:justify-center gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            iconURL={arrowRight}
            backgroundColor="bg-white"
            borderColor="border border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
