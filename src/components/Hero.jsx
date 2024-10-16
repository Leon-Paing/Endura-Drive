import React, { useEffect, useState } from "react";
import {motion, AnimatePresence, easeInOut, easeIn, easeOut, circInOut} from "framer-motion";
import LazyLoad from "react-lazyload";

const Hero = () => {
  const HeroImages = [
    './CarHero.jpg',
    './CarHero2.jpg',
    './CarHero3.jpg',
    './CarHero4.jpg',
    './CarHero5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentHeroImg, setCurrentHeroImg] = useState(HeroImages[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= HeroImages.length ? 0 : nextIndex;
        });
      }, 500);

    }, 7000);

    return () => clearInterval(interval);
  }, [HeroImages.length]);

  useEffect(() => {
    setCurrentHeroImg(HeroImages[currentIndex]);
  }, [currentIndex, HeroImages]);

  return (
    <LazyLoad className="w-screen xl:h-screen lg:h-[500px] md:h-[500px] sm:h-[400px] xs:h-[400px]  flex justify-center items-center p-0 m-0 overflow-clip relative shadow-xl">
      <AnimatePresence>
      <motion.img
        className="flex justify-center items-center w-screen xl:h-[100%] lg:h-[500px] sm:h-[400px] xs:h-[400px] md:h-full object-cover shadow-in transition-all ease-in-out absolute"
        key={currentIndex}
        src={currentHeroImg}
        alt="Hero"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0.1}}
        transition={{ease:circInOut, duration: 2}} 
      />
      </AnimatePresence>
    </LazyLoad>
  );
};

export default Hero;