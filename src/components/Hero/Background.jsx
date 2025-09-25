import React, { useState, useEffect } from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Hero1 from "../../assets/Hero1.jpg"
import Hero2 from "../../assets/Hero2.jpg"
import Hero3 from "../../assets/Hero3.jpg"
import Hero4 from "../../assets/Hero4.jpg"
const HeroBackground = () => {
  const images = [
    Hero1,
    Hero2,
    Hero3,
    Hero4,
  ];

  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const duration = 7000;
  const tick = 50;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
    setProgress(0); // reset progress
  };

  // progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (tick / duration) * 100;
      });
    }, tick);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(goNext, duration);
    return () => clearInterval(interval);
  }, [currentIndex]);

  //border stroke
  const size = 93;
  const strokeWidth = 5;
  const totalLength = (size + size) * 2; // perimeter of square

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Sliding images container */}
      <div
        className="flex w-full h-full transition-transform duration-[1200ms] ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-full bg-center bg-cover flex-shrink-0"
            style={{ backgroundImage: `url(${img})` }}
          >
            {/* Overlay per slide */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

           
          </div>
        ))}
      </div>

      {/* --------------  */}
      <div className="absolute bottom-[50px] z-10 left-[135px] lg:left-[120px] md:left-[90px] sm:left-[30px] flex flex-row cursor-pointer items-center p-4 space-x-4">
        <div className="relative w-[93px] lg:w-[83px] md:w-[75px] sm:w-[60px] h-[93px] lg:h-[83px] md:h-[75px] sm:h-[60px]" onClick={goNext}>
          {/* Next image */}
          <img
            src={images[(currentIndex + 1) % totalImages]}
            alt="Next"
            className="w-full h-full object-cover"
          />

          <div className="absolute z-50 inset-0 flex items-center justify-center text-[#EEF4F9] text-[18px] md:text-[15px] sm:text-[12px] bg-black bg-opacity-15 hover:bg-opacity-50 transition">
            Next
          </div>
        </div>

        {/* Border Animation */}
        <svg
          className="absolute left-[-18px] lg:left-[-13px] md:left-[-13px] sm:left-[-10px] lg:top-[2px] md:top-1 sm:top-[5px] inset-0 w-[130px] lg:w-[110px] md:w-[100px] sm:w-[80px] h-[130px] lg:h-[110px] md:h-[100px] sm:h-[80px]"
          viewBox={`0 0 ${size} ${size}`}
        >
          <rect
            x={strokeWidth / 2}
            y={strokeWidth / 2}
            width={size - strokeWidth}
            height={size - strokeWidth}
            stroke="#ffffffd0"
            strokeWidth="1px"
            fill="transparent"
            strokeOpacity="0.3"
          />
          <rect
            x={strokeWidth / 2}
            y={strokeWidth / 2}
            width={size - strokeWidth}
            height={size - strokeWidth}
            stroke="#fff"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={totalLength}
            strokeDashoffset={totalLength - (progress / 100) * totalLength}
            strokeLinecap="butt"
            className="transition-all duration-50 ease-linear"
          />
        </svg>

        <div className="text-[20px] lg:text-[18px] md:text-[15px] sm:text-[10px] text-white flex flex-row items-center pl-[40px]  lg:pl-[30px] sm:pl-[10px] space-x-[20px] lg:space-x-[15px] md:space-x-[10px] cursor-default">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>{" "}
          <hr className="w-[110px] lg:w-[100px] lg:w-[80px] sm:w-[50px]" />
          <span>{String(totalImages).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
