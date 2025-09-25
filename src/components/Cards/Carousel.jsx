import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Cards.css";
import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slide4.jpg'
import slide5 from '../../assets/slide5.jpg'
import slide6 from '../../assets/slide6.jpg'

const images = [
  { src: slide1, name: "Client 1", location:"Dubai, United Arab Emirates" },
  { src: slide2, name: "Client 2", location:"Cape Town, South Africa"},
  { src: slide3, name: "Client 3", location:"Toronto, Canada"},
  { src: slide4, name: "Client 4", location:"Sydney, Australia"},
  { src: slide5, name: "Client 5", location:"New York, United States"},
  { src: slide6, name: "Client 6", location:"London, United Kingdom"},
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateDistance, setTranslateDistance] = useState(550);

  // Update spacing based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if(width < 640) setTranslateDistance(250);      // small screens
      else if(width < 1024) setTranslateDistance(350); // medium screens
      else setTranslateDistance(550);                 // large screens
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > 50) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="drag-carousel-container">
      <motion.div
        className="drag-carousel"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((img, i) => {
          let position = i - currentIndex;
          if (position < -Math.floor(images.length / 2)) position += images.length;
          if (position > Math.floor(images.length / 2)) position -= images.length;

          if (Math.abs(position) > 1) return null;

          return (
            <motion.div
              key={i}
              className={`drag-carousel-item ${position === 0 ? "active" : ""}`}
              style={{
                transform: `
                  translateX(${position * translateDistance}px) 
                  translate(-50%, -50%) 
                  scale(${position === 0 ? 1 : 0.9}) 
                  rotate(${position * 8}deg)
                `,
                zIndex: position === 0 ? 3 : 1,
              }}
            >
              <img src={img.src} alt={img.name} />
              
              
              {position === 0 && (
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      className="img-name text-center"
      initial={{ opacity: 0, y: 20 ,x:-140}}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h3
        className="text-[30px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {img.name}
      </motion.h3>
      <motion.p
        className="text-[20px] w-[300px] text-[#7A7777]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {img.location}
      </motion.p>
    </motion.div>
  </AnimatePresence>
)}

            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
