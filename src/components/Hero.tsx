"use client";
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";
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
      <div className="bg-[#28293E] h-auto md:h-auto lg:h-[560px]">
        <Header />

        <div
          data-aos="fade-down"
          className="w-full overflow-hidden mt-0 md:mt-10 lg:mt-20 flex flex-col md:flex-row px-10 md:px-20 lg:px-32"
        >
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h5 data-aos="fade-right" className="text-base text-[#EF6D58]">
              Hamza Bhatti
            </h5>
            <h1
              data-aos="fade-down"
              className="text-[#FFFFFF] leading-[45px] md:leading-[48px] lg:leading-[70px] text-[37px] md:text-[45px] lg:text-[72px] font-bold"
            >
              The Simple, Clean Design
            </h1>
            <p
              data-aos="fade-left"
              className="text-[#FFFFFF] mt-4 tracking-widest mb-8"
            >
              Agency provides a full service range including technical skills,
              design, business understanding.
            </p>
            <Link
              href="/portfolio"
              className="border-2 text-white border-[#EF6D58] bg-[#EF6D58]
           px-4 py-4 rounded-lg hover:bg-transparent"
            >
              <button>See My Work</button>
            </Link>
          </div>
          <div data-aos="fade-up" className="w-full md:w-1/2">
            <Image
              src={"/images/pic.png"}
              alt="Hero Image"
              width={350}
              height={100}
              className="ml-0 md:ml-20 lg:ml-44"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
