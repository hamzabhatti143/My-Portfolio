"use client";
import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="w-full bg-[#28293E] mt-6 p-6 md:p-12 lg:p-20 flex flex-wrap md:flex-wrap lg:flex-nowrap">
        <div
          className="w-full order-2 md:order-1 flex flex-col justify-center
         pl-0 md:pl-12 lg:pl-20 md:w-1/2 mb-4 md:mb-0"
        >
          <h5 className="text-base text-[#EF6D58] ">Features</h5>
          <h2
            className="leading-[45px] md:leading-[48px] text-white 
            lg:leading-[70px] text-[37px] md:text-[45px]  lg:text-[56px] font-bold pr-4 md:pr-6 lg:pr-16"
          >
            Give Your Site A New Look
          </h2>
          <p className="text-grey mt-4 tracking-widest mb-8 text-white">
            Service range including technical skills, design, business
            understanding.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="rounded-full bg-[#EF6D58] p-2 w-8 flex justify-center">
                <IoMdCheckmark className="fill-white w-10" />
              </div>
              <p className="text-white">Range including technical skills</p>
            </div>

            <div className="flex gap-4 items-center">
              <div className="rounded-full bg-[#EF6D58] p-2 w-8 flex justify-center">
                <IoMdCheckmark className="fill-white w-10" />
              </div>
              <p className="text-white">Business understanding</p>
            </div>

            <div className="flex gap-4 items-center">
              <div className="rounded-full bg-[#EF6D58] p-2 w-8 flex justify-center">
                <IoMdCheckmark className="fill-white w-10" />
              </div>
              <p className="text-white">Partner on the long run</p>
            </div>
          </div>
        </div>

        <div className="w-full order-1 md:order-2 md:w-1/2 flex justify-center items-center">
          <Image
            src={"/images/feature.png"}
            alt="features"
            width={400}
            height={500}
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Features;
