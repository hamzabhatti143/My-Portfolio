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
       <div data-aos="fade-up"
        data-aos-duration="1200" className="flex flex-wrap justify-center gap-6 mt-10">
        {portfolioData.map((item, index) => (
          <div
            key={index}
            className="w-11/12 md:w-1/4 flex flex-col items-center space-y-4"
          >
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={item.imageUrl}
                alt={item.alt || "Portfolio Image"}
                width={450}
              height={500}
              className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioCards;
