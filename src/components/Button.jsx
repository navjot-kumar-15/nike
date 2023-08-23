import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <>
      <button
        className={`flex justify-center items-center 
        px-7 gap-2 font-montserrat text-lg py-4 leading-none
        rounded-full
        hover:scale-95
        transition-all ease-in-out delay-100
        max-sm:text-[15px]
        max-sm:w-auto
        btn
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt="arrow right icon"
            className="w-5 h-5 ml-2 rounded-full"
          />
        )}
      </button>
    </>
  );
};

export default Button;
