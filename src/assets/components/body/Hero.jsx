import React from "react";
import BgImage from "../../images/imgHero/bg-hero.png";
import prod28 from "../../images/imgHero/product_28.png";
import prod5 from "../../images/imgHero/product_5.png";
import prod21 from "../../images/imgHero/product_21.png";
import prod26 from "../../images/imgHero/product_26.png";
import prod20 from "../../images/imgHero/product_20.png";

const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={bgImage}
      className="h-96 flex flex-col justify-end items-end">
      <div className="flex justify-center w-full mb-10">
        <img
          src={prod28}
          alt="bg-123"
          className="w-40 h-48"
        />
        <img
          src={prod5}
          alt="bg-123"
          className="w-40 h-48"
        />
        <img
          src={prod21}
          alt="bg-123"
          className="w-40 h-48"
        />
        <img
          src={prod26}
          alt="bg-123"
          className="w-40 h-48"
        />
        <img
          src={prod20}
          alt="bg-123"
          className="w-40 h-48"
        />
      </div>
    </div>
  );
};

export default Hero;
