"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <h5 data-aos="fade-up" className="text-[#EF6D58] text-center uppercase mt-10 font-semibold">
        Service
      </h5>
      <h2 data-aos="fade-up" className="text-center text-black font-bold text-4xl md:text-[50px] lg:text-[56px] leading-none">
        How I Can Help <br /> You With
      </h2>

      <div data-aos="fade-down" className="w-full flex flex-col md:flex-row px-10 md:px-32 mt-10">
        <div className="w-11/12 md:w-1/2">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-[#EF6C57] w-16 h-16 rounded-full mt-4 md:mt-0">
              <Image
                src={"/images/shape.png"}
                alt="shape"
                width={50}
                height={50}
                className="py-4 pl-4"
              />
            </div>
            <h4 className="text-4xl md:text-2xl text-black font-bold">
              Design
            </h4>
          </div>
          <p className="w-full pt-10 px-0 text-justify md:px-6 text-black">
            Agency is a business you hire to outsource your digital marketing
            efforts, instead of handling in-house.
          </p>

          <div className="px-6 pt-8 flex gap-4 items-center">
            <div className="cursor-pointer rounded-full bg-white hover:bg-[#EF6C57] hover:text-white p-2 w-10 flex justify-center text-[#EF6C57]">
              +
            </div>
            <Link
              href={"/contact"}
              className="text-base 
            hover:border-[#EF6C57] hover:border-2 text-black hover:px-2 hover:rounded-lg"
            >
              <button>Learn More</button>
            </Link>
          </div>
        </div>
        <div className="w-11/12 md:w-1/2">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-[#EF6C57] w-16 h-16 rounded-full mt-4 md:mt-0">
              <Image
                src={"/images/shape.png"}
                alt="shape"
                width={50}
                height={50}
                className="py-4 pl-4"
              />
            </div>
            <h4 className="text-4xl md:text-2xl font-bold text-black">
              Development
            </h4>
          </div>
          <p className="w-full pt-10 px-0 text-justify text-black md:px-6">
            Hire to outsource your digital marketing efforts, instead of
            handling in-house can provide your business.
          </p>

          <div className="px-6 pt-8 mb-4 flex gap-4 items-center">
            <div className="cursor-pointer rounded-full bg-white hover:bg-[#EF6C57] hover:text-white p-2 w-10 flex justify-center text-[#EF6C57]">
              +
            </div>
            <Link
              href={"/contact"}
              className="text-base 
            hover:border-[#EF6C57] text-black hover:border-2 hover:px-2 hover:rounded-lg"
            >
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
