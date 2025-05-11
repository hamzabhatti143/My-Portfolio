"use client";
import React, { useState } from "react";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface Portf {
  alt: string;
  imageUrl: string;
  link: string;
}
export const revalidate = 10;
const PortfolioCards = () => {
  const [portfolioData, setPortfolioData] = useState<Portf[]>([]);

  useEffect(() => {
    Aos.init({ easing: "ease-in-out" });

    const fetchData = async () => {
      const data = await sanityFetch<
        { imageUrl: string; alt: string; link: string }[]
      >(
        `*[_type == 'portfolio']{
    "imageUrl": image.asset->url,
    "alt": image.alt,
    "link": link.href
  }`
      );
      setPortfolioData(data);
    };

    fetchData();
  }, []);
  return (
    <>
      {portfolioData.map((item, index) => (
        <div
          key={index}
          className="w-11/12 md:w-1/4 flex flex-col items-center space-y-4"
        >
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={item.imageUrl}
              alt={item.alt || "Portfolio Image"}
              width={272}
              height={240}
              className="rounded-md w-[272px] h-60 object-cover"
            />
          </Link>
        </div>
      ))}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center items-center flex-col mt-20"
      >
        <Link href="https://furniro-ecommerce-model.vercel.app/">
          <Image
            src={"/images/port-6.png"}
            alt="Furniro"
            width={700}
            height={500}
            className="hover:opacity-70 cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
        </Link>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className=" aos-init aos-animate w-full space-x-0 md:space-x-4 mt-10 flex overflow-hidden flex-wrap mb-6 justify-around items-center gap-4"
        >
          <Link href="https://airfolio-demo.netlify.app/">
            <Image
              src={"/images/port-3.png"}
              alt="Airfolio"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://morrent-ten.vercel.app/">
            <Image
              src={"/images/port-4.png"}
              alt="Morrent"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://creativeskillancers.netlify.app/">
            <Image
              src={"/images/port-1.png"}
              alt="Creative Skillancers"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://wordmingle123.netlify.app/">
            <Image
              src={"/images/port-2.png"}
              alt="Word Mingle"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://marketing-factory.netlify.app/">
            <Image
              src={"/images/port-5.png"}
              alt="Marketing Factory"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://gardendecore.net/">
            <Image
              src={"/images/port-8.png"}
              alt="Garden Decore"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://creativetrensetters.netlify.app/">
            <Image
              src={"/images/port-9.png"}
              alt="Creative Trend Setters"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://assignment-6-murex.vercel.app/">
            <Image
              src={"/images/port-7.png"}
              alt="Ddsgnr"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://dynamic-blogging-website.vercel.app/">
            <Image
              src={"/images/port-10.png"}
              alt="Dynamic Blog"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://hamza-assignment-3.netlify.app/">
            <Image
              src={"/images/port-12.png"}
              alt="Portfolio"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>

          <Link href="https://hackaton-practice.vercel.app/">
            <Image
              src={"/images/port-11.png"}
              alt="Ecommerce Model"
              width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioCards;
