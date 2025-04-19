import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Started from "@/components/Started";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

export default function Home() {
  return (
    <>
      {/* Hero + Header section start */}
      <div className="bg-[#28293E] h-auto md:h-auto lg:h-[560px]">
        <Header />

        <div className="w-full mt-0 md:mt-10 lg:mt-20 flex flex-col md:flex-row px-10 md:px-20 lg:px-32">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h5 className="text-base text-[#EF6D58]">Gabriel Pires</h5>
            <h1 className="text-[#FFFFFF] leading-[45px] md:leading-[48px] lg:leading-[70px] text-[37px] md:text-[45px] lg:text-[72px] font-bold">
              The Simple, Clean Design
            </h1>
            <p className="text-[#FFFFFF] mt-4 tracking-widest mb-8">
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
          <div className="w-full md:w-1/2">
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
      {/* Hero + Header section start */}

      {/* Service section start */}
      <h5 className="text-[#EF6D58] text-center uppercase mt-10 font-semibold">
        Service
      </h5>
      <h2 className="text-center text-black font-bold text-4xl md:text-[50px] lg:text-[56px] leading-none">
        How I Can Help <br /> You With
      </h2>

      <div className="w-full flex flex-col md:flex-row px-10 md:px-32 mt-10">
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
            <h4 className="text-4xl md:text-2xl text-black font-bold">Design</h4>
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
            <h4 className="text-4xl md:text-2xl font-bold text-black">Development</h4>
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
      {/* Service section end */}

      {/* Portfolio section start */}
      <div className="w-full mt-0 md:mt-10 h-auto md:h-auto lg:h-96 flex flex-col gap-4 px-6 md:px-4 lg:px-16  bg-[#28293E]">
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
      {/* Portfolio section end */}

      {/* Web sec section start */}

      <div className="w-full p-6 md:p-12 lg:p-20 flex flex-wrap md:flex-wrap lg:flex-nowrap">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/images/pic2.png"}
            alt="about"
            width={400}
            height={500}
            className=""
          />
        </div>
        <div className="w-full flex flex-col justify-center pl-0 md:pl-12 lg:pl-20 md:w-1/2 mb-4 md:mb-0">
          <h5 className="text-base text-[#EF6D58] ">Gabriel Pires</h5>
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

      <div className="w-full px-4 md:px-20 gap-4 flex flex-col md:flex-row">  
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

      {/* Web sec section end */}

      {/* Features section start */}

      <div className="w-full bg-[#28293E] mt-6 p-6 md:p-12 lg:p-20 flex flex-wrap md:flex-wrap lg:flex-nowrap">
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

      {/* Features section end */}

      {/* Started Start */}

      <Started />

      {/* Started End */}

      {/* Contact section start */}

      <div className="w-full flex flex-col md:flex-row items-center bg-[#28293E] h-auto md:h-[550px]">
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
        <div className="w-full md:w-1/2 p-4 text-center md:text-start">
          <h5 className="text-base uppercase text-[#EF6D58]">Contact</h5>
          <h2 className="text-white text-[56px] font-bold">Contact Me</h2>
          <p className="text-white w-full md:w-3/4 leading-7 tracking-wider">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
        </div>
      </div>

      {/* Contact section end */}
      {/* Project Start */}

      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 px-16">
          <h5 className="text-[#EF6D58]">Gabriel Pires</h5>
          <h2 className="text-3xl text-black md:text-[56px] font-bold pr-10 leading-[50px]">
            Help To Build Your Dream Project
          </h2>
          <p></p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/images/pic3.png"}
            alt="Project"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Project End */}
      {/* Footer Start */}

      <Footer />
      {/* Footer end */}
    </>
  );
}
