"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Web = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div
        className="w-full p-6 md:p-12 lg:p-20 flex flex-wrap md:flex-wrap lg:flex-nowrap overflow-hidden"
      >
        <div data-aos="fade-up-right" className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/images/pic2.png"}
            alt="about"
            width={400}
            height={500}
            className=""
          />
        </div>
        <div data-aos="fade-up-left" className="w-full flex flex-col justify-center pl-0 md:pl-12 lg:pl-20 md:w-1/2 mb-4 md:mb-0">
          <h5 className="text-base text-[#EF6D58] ">Hamza Bhatti</h5>
          <h1
            className="leading-[45px] md:leading-[48px] 
                  lg:leading-[70px] text-[37px] text-black  md:text-[45px] lg:text-[56px] font-bold pr-4"
          >
            Professional Web Designer
          </h1>
          <h4 className="text-xl text-black ">Provides a full service range</h4>
          <p className="text-grey mt-4 text-black  tracking-widest mb-8 ">
            Ability to put themselves in the merchants shoes. It is meant to
            partner on the long run, and work as an extension of the merchants
            team.
          </p>
          <Link
            href="/about"
            className=" text-black text-center font-bold bg-white
                 px-4 py-4 rounded-lg w-2/4 lg:w-1/4 hover:bg-[#EF6D58] hover:text-white"
          >
            <button>About Me</button>
          </Link>
        </div>
      </div>

      <div
        data-aos="fade-down"
        className="w-full px-4 md:px-20 gap-4 flex flex-col md:flex-row"
      >
        <div
          className="flex items-center gap-4 w-full md:w-1/2 cursor-pointer
               border border-[#EF6D58] p-6 hover:bg-[#EF6D58] hover:text-white"
        >
          <div className="rounded-full bg-[#EF6D58] p-8 w-20 flex justify-center">
            <FaCalendarCheck className="fill-white w-10" />
          </div>
          <div>
            <h3 className="text-[40px] text-black  font-bold">42%</h3>
            <p className="text-black ">Years of experience</p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 w-full md:w-1/2 cursor-pointer
               border border-[#EF6D58] p-6 hover:bg-[#EF6D58] hover:text-white"
        >
          <div className="rounded-full bg-[#EF6D58] p-8 w-20 flex justify-center">
            <FaEnvelope className="fill-white w-10" />
          </div>
          <div>
            <h3 className="text-[40px] text-black  font-bold">73+</h3>
            <p className="text-black ">Projects Done</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Web;
