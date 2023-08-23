import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex items-center justify-center flex-col gap-10"
      id="contact-us"
    >
      <h3
        className="capitalize text-4xl font-bold lg:max-w-3xlfont-palanquin"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Sign up for <span className="text-coral-red">updates</span> & newsletter
      </h3>
      <div
        className="flex gap-5 border-[2px] border-slate-gray p-3 rounded-full max-sm:h-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <input
          type="text"
          placeholder="Subscribe@nike.com"
          className="outline-none border-none text-slate-gray"
        />
        <Button label="Sign Up" fillWidth className="max-sm:text-sm" />
      </div>
    </section>
  );
};

export default Subscribe;
