import React from "react";
import { products } from "../constant";
import PopularProductCard from "../components/PopularProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularProducts = () => {
  return (
    <div id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2
          className="font-palanquin text-4xl font-bold"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p
          className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Experience top notch quality and with our sought-after
          selections.Discover a world of confort, design and value
        </p>
      </div>
      <div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-md:mx-auto sm:gap-4 gap-14"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
