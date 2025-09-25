import React from "react";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

const Cards = () => {
  return (
    <div>
      <div className="text-center py-[50px] flex flex-col justify-center items-center  ">
        <motion.h1
          className="text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }} // triggers when 30% is visible
        >
          Quality Products
        </motion.h1>

       
        <motion.p
          className="w-[50%] md:w-[60%] sm:w-[80%] text-[#7A7777] text-[20px] lg:text-[18px] md:text-[17px] sm:text-[14px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>
      </div>

      {/* Carousel Section */}
      <Carousel />
    </div>
  );
};

export default Cards;
