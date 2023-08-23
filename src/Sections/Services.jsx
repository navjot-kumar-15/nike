import React from "react";
import { services } from "../constant";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section
      className="max-container flex justify-center flex-wrap gap-9"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
