import React from "react";
import HeroImg from "../../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-orange-600 uppercase font-semibold"
            >
              100% Satisfaction Guarantee
            </motion.p>
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold lg:text-6xl !leading-tight"
            >
              Find Your Perfect <span className="text-primary">Tutor</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            className="font-semibold text-sm">
           E-Learning Eğitim Platformu her yaştan öğrenmek isteyen bireylerin sayısız çeşitlikte istedikleri alanda kurslara erişimini sağlayan öğrenme platformudur...
            </motion.p>
            <p className="text-red-800 border-4 border-yellow-500">
                Siz de kursları inceleyerek size en uygun kursu seçebilir anında izlemeye başlayabilirsiniz!
            </p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
            
            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
