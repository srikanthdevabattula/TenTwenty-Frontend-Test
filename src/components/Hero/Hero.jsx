import React from "react";
import { motion } from "framer-motion";
import Background from "./Background";

const Hero = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/*Background Images*/}
      <Background />

      {/* Overlay content */}
      <div className="absolute inset-0 text-white justify-center flex flex-col left-[136px] lg:left-[120px] md:left-[90px] sm:left-[30px]">
        {/* Small Heading */}
        <motion.h6
          className="text-[18px] md:text-[15px] text-[#EEF4F9]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }} 
        >
          Welcome To TenTwenty Farms
        </motion.h6>

        {/* Main Heading */}
        <motion.h1
          className="text-[64px] lg:text-[54px] md:text-[40px] sm:text-[28px] text-[#EEF4F9] capitalize leading-none"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          From our Farms
          <br /> to your hands
        </motion.h1>
      </div>
    </main>
  );
};

export default Hero;
