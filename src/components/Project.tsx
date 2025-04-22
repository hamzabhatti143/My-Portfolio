"use client";
import React from "react";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center items-center overflow-hidden">
        <div data-aos="fade-down-left" className="w-full md:w-1/2 px-16 mt-6 md:mt-0">
          <h5 className="text-[#EF6D58]">Hamza Bhatti</h5>
          <h2 className="text-3xl text-black md:text-[56px] font-bold pr-0 md:pr-10 leading-[50px]">
            Help To Build Your Dream Project
          </h2>
          <p></p>
        </div>
        <div data-aos="fade-down-right" className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/images/pic3.png"}
            alt="Project"
            width={400}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
