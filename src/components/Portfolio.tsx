"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="w-full  aos-init aos-animate mt-0 md:mt-10 h-auto md:h-auto lg:h-96 flex flex-col gap-4 px-6 md:px-4 lg:px-16  bg-[#28293E]"
      >
        <h5 className="text-base text-[#EF6D58] pt-20">Portfolio</h5>
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-lg md:text-[56px] text-white font-bold">
            Latest Work
          </h2>
          <Link
            href="/portfolio"
            className="border-2 text-white border-white bg-transparent
                 px-4 py-2  rounded-lg  hover:text-[#EF6D58] active:border-[#EF6D58]
                  active:bg-white focus:bg-white focus:text-[#EF6D58] hover:bg-white"
          >
            <button>Explore More</button>
          </Link>
        </div>

        <div className="w-full flex flex-wrap mb-6 justify-around items-center gap-4">
          <Image
            src={"/images/port-6.png"}
            alt="Portfolio"
            width={350}
            height={500}
          />
          <Image
            src={"/images/port-3.png"}
            alt="Portfolio"
            width={350}
            height={500}
          />
          <Image
            src={"/images/port-4.png"}
            alt="Portfolio"
            width={350}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
