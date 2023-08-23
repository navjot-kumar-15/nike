import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => {
  return (
    <footer className="max-container overflow-hidden">
      <div className="flex justify-between items-start max-lg:flex-col">
        <div className="flex items-start flex-col">
          <a href="/" data-aos="fade-right" data-aos-duration="800">
            <img src={footerLogo} alt="Nike" width={150} height={46} />
          </a>
          <p
            className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex justify-center items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-between lg:gap-10 gap-20 flex-wrap max-lg:mt-5">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4
                className="text-white font-montserrat text-2xl leading-normal underline underline-offset-8 decoration-coral-red mb-3"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                {section.title}
              </h4>
              <ul data-aos="fade-left" data-aos-duration="1000">
                {section.links.map((link) => (
                  <li>
                    <a
                      href=""
                      className="text-white hover:text-coral-red transition-all duration-300 ease-in-out max-sm:text-white "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
