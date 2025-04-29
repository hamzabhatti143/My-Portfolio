"use client";
import React from "react";
import Image from "next/image";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-6 md:mt-12">
        <Image
          src={"/images/about.png"}
          alt="Developer"
          data-aos="fade-up"
          width={1000}
          height={400}
          className="rounded p-6 md:px-6 lg:p-0"
        />
        <h5 data-aos="fade-down" className="text-base text-black text-[#EF6D58] w-full md:w-1/2 px-6 mt-10 md:mt-20">
          Hamza Bhatti
        </h5>
        <h1 data-aos="fade-down"
          className="leading-[45px] md:leading-[48px] text-black w-full md:w-1/2 px-6 tracking-wider
            lg:leading-[70px] text-[37px] md:text-[45px] lg:text-[56px] font-bold"
        >
          Professional Web Designer
        </h1>
        <p data-aos="fade-up" className="w-full text-black md:w-1/2 px-6 leading-7 tracking-wider mt-4">
          Ability to put themselves in the merchants shoes. It is meant to
          partner on the long run, and work as an extension of the merchants
          team. <br />
          <br /> A digital agency is a business you hire to outsource your
          digital marketing efforts, instead of handling in-house. They can
          provide your business with a variety of digital solutions to promote
          your product or service online and help you.
        </p>
      </div>

      <div data-aos="fade-down" className="w-full px-4 md:px-20  flex flex-col md:flex-row justify-center items-center mt-10">
        <div
          className="flex items-center gap-4 w-full md:w-2/5 cursor-pointer
         border border-[#EF6D58] p-6 hover:bg-[#EF6D58] hover:text-white"
        >
          <div className="rounded-full bg-[#EF6D58] p-6 w-16 flex justify-center">
            <FaCalendarCheck className="fill-white w-10" />
          </div>
          <div>
            <h3 className="text-[40px] font-bold text-black">42%</h3>
            <p className="text-base md:text-xs text-black lg:text-base">
              Years of experience
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 w-full md:w-2/5 cursor-pointer
         border border-[#EF6D58]  p-6 hover:bg-[#EF6D58] hover:text-white"
        >
          <div className="rounded-full bg-[#EF6D58] p-6 w-16 flex justify-center">
            <FaEnvelope className="fill-white w-10" />
          </div>
          <div>
            <h3 className="text-[40px] font-bold text-black">73+</h3>
            <p className="text-base md:text-xs lg:text-base text-black">Projects Done</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
