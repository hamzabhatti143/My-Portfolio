"use client";
import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Header from "@/components/Header";
const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div className="bg-[#28293E] h-96">
        <Header />

        <div data-aos="fade-down" className="w-full flex flex-col justify-center items-center px-10 md:px-20 lg:px-32">
          <h1  className="text-5xl md:text-[72px] text-white font-bold">
            Portfolio
          </h1>
          <p className="text-gray-300 w-full md:w-1/2 text-center mt-10 md:mt-6">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
