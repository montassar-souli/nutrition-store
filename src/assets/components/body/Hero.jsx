import React from "react";
import BgImage from "../../images/imgHero/bg-hero.png";

const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={bgImage}
      className="h-80">
      <img
        src="./"
        alt=""
      />
      <img
        src=""
        alt=""
      />
      <img
        src=""
        alt=""
      />
      <img
        src=""
        alt=""
      />
      <img
        src=""
        alt=""
      />
    </div>
  );
};

export default Hero;
