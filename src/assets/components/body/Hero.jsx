import React from "react";
import BgImage from "../../images/imgHero/bg-hero.png";
import prod28 from "../../images/imgHero/product_28.png";
import prod5 from "../../images/imgHero/product_5.png";
import prod21 from "../../images/imgHero/product_21.png";
import prod26 from "../../images/imgHero/product_26.png";
import prod20 from "../../images/imgHero/product_20.png";
import { motion } from "framer-motion";

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
      <div className="flex justify-center w-full mb-10 relative">
        <div className="flex flex-col justify-end h-full absolute left-[300px] z-10">
          {/* image black red powder */}
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.5,
            }}
            src={prod28}
            alt="bg-123"
            className="w-40 h-48"
          />
        </div>
        <div className="flex flex-col justify-end h-full absolute left-[450px] z-20">
          {/* image red powder */}
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.0,
            }}
            src={prod5}
            alt="bg-123"
            className="w-52 h-60"
          />
        </div>
        <div className="flex flex-col justify-end h-full absolute z-30">
          {/* image blue powder */}
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            src={prod21}
            alt="bg-123"
            className="w-60 h-72"
          />
        </div>
        <div className="flex flex-col justify-end h-full absolute right-[450px] z-20">
          {/* image yellow powder */}
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.0,
            }}
            src={prod26}
            alt="bg-123"
            className="w-52 h-60"
          />
        </div>
        <div className="flex flex-col justify-end h-full absolute right-[300px] z-10">
          {/* image black yellow powder */}
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.5,
            }}
            src={prod20}
            alt="bg-123"
            className="w-40 h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
