import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constant";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="absolute padding-x py-8 w-full z-50 ">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Nike" width={130} height={29} />
          </a>
          <ul className="flex flex1 justify-center items-center gap-16 max-lg:hidden xl:mr-[2rem]">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block relative"
            onClick={() => setOpen(!open)}
          >
            <img src={hamburger} width={25} height={25} alt="Hamburber" />
            {open && (
              <ul className="absolute -left-[8rem] top-[2rem] max-sm:-left[8rem] sm:-left[7rem]  flex flex-1 flex-col justify-center items-center gap-5 z-50  bg-coral-red h-[30vh] w-40">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
