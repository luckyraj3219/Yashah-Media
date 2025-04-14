"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/id/1018/1000/600",
  "https://picsum.photos/id/1015/1000/600",
  "https://picsum.photos/id/1019/1000/600",
  "https://picsum.photos/id/1016/1000/600",
];

const texts = [
  "Creative Digital Solutions",
  "Empowering Brands Online",
  "Innovative Media Strategies",
  "Your Vision, Our Creation",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[80vh] overflow-hidden">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4 text-white">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{texts[index]}</h2>
          <p className="text-lg md:text-xl">
            We bring your brand vision to life with modern media strategies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
