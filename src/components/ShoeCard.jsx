import React from "react";

const ShoeCard = ({ imgURL, bigShoeImg, changeBigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2   ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1
      bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 rounded-tl-[1.9rem] `}
      onClick={handleClick}
    >
      <div>
        <img
          src={imgURL?.thumbnail}
          alt=""
          width={127}
          height={103.34}
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
