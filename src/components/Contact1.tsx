"use client";
import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";
const Contact1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div data-aos="zoom-in-up" className="w-full flex flex-col md:flex-row items-center bg-[#28293E] h-auto md:h-[550px]">
        <div className="w-full md:w-1/2 pt-10">
          <div className="w-3/4 h-[450px] rounded-lg mx-auto md:mx-20 bg-white">
            <h4 className="text-2xl font-bold px-8 pt-8">Get In touch</h4>
            <div className="px-8 pt-8 space-y-6">
              <input
                type="email"
                placeholder="Enter Your email"
                className="w-full rounded p-2 border-2 border-black"
                id=""
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded p-2 border-2 border-black"
                id=""
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="w-full h-28 rounded p-2 border-2 border-black"
              ></textarea>
              <Link
                href="/"
                className="border-2 text-white border-[#EF6D58] bg-[#EF6D58]
           px-4 py-2 rounded-lg hover:bg-transparent hover:text-[#EF6D58] font-bold ml-0 md:ml-72"
              >
                <button className="mt-6">Submit Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 space-y-0 md:space-y-6 text-center md:text-start">
          <h5 className="text-base uppercase text-[#EF6D58]">Contact</h5>
          <h2 className="text-white text-3xl md:text-[56px] font-bold">
            Contact Me
          </h2>
          <p className="text-white w-full md:w-3/4 leading-7 tracking-wider">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact1;
