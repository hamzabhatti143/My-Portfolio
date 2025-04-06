import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Started from "@/components/Started";
import Image from "next/image";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
const page = () => {
  return (
    <>
      {/* Hero + Header section start */}
      <div className="bg-[#28293E] h-96">
        <Header />

        <div className="w-full flex flex-col justify-center items-center px-10 md:px-20 lg:px-32">
          <h1 className="text-5xl md:text-[72px] text-white font-bold">
            About Me
          </h1>
          <p className="text-gray-300 w-full md:w-1/2 text-center mt-10 md:mt-6">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </div>
      {/* Hero + Header section start */}

      {/* About Section Start */}

      <div className="w-full flex flex-col justify-center items-center mt-6 md:mt-12">
        <Image
          src={"/images/about.png"}
          alt="Developer"
          width={1000}
          height={400}
          className="rounded p-6 md:px-6 lg:p-0"
        />
        <h5 className="text-base text-[#EF6D58] w-full md:w-1/2 px-6 mt-10 md:mt-20">Gabriel Pires</h5>
        <h1
          className="leading-[45px] md:leading-[48px]  w-full md:w-1/2 px-6 tracking-wider
            lg:leading-[70px] text-[37px] md:text-[45px] lg:text-[56px] font-bold"
        >
          Professional Web Designer
        </h1>
        <p className="w-full md:w-1/2 px-6 leading-7 tracking-wider mt-4">
          Ability to put themselves in the merchants shoes. It is meant to
          partner on the long run, and work as an extension of the merchants
          team. <br /><br /> A digital agency is a business you hire to outsource your
          digital marketing efforts, instead of handling in-house. They can
          provide your business with a variety of digital solutions to promote
          your product or service online and help you.
        </p>
      </div>

<div className="w-full px-4 md:px-20  flex flex-col md:flex-row justify-center items-center mt-10">
        <div
          className="flex items-center gap-4 w-full md:w-2/5 cursor-pointer
         border border-[#EF6D58] p-6 hover:bg-[#EF6D58] hover:text-white"
        >
          <div className="rounded-full bg-[#EF6D58] p-6 w-16 flex justify-center">
            <FaCalendarCheck className="fill-white w-10" />
          </div>
          <div>
            <h3 className="text-[40px] font-bold">42%</h3>
            <p className="text-base md:text-xs lg:text-base">Years of experience</p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 w-full md:w-2/5 cursor-pointer
         border border-[#EF6D58] p-6 hover:bg-[#EF6D58] hover:text-white"
        >
          <div className="rounded-full bg-[#EF6D58] p-6 w-16 flex justify-center">
            <FaEnvelope className="fill-white w-10" />
          </div>
          <div>
            <h3 className="text-[40px] font-bold">73+</h3>
            <p className="text-base md:text-xs lg:text-base">Projects Done</p>
          </div>
        </div>
      </div>
      {/* About Section End */}

      {/* Started Start */}

      <Started />

      {/* Started End */}

      {/* Footer Start */}

      <Footer />
      {/* Footer end */}
    </>
  );
};

export default page;
