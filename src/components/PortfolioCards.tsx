import React from "react";
import Image from "next/image";
const PortfolioCards = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-20">
        <Image
          src={"/images/port-6.png"}
          alt="Furniro"
          width={700}
          height={500}
          className="hover:opacity-70 cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
        />
        <div className="w-full space-x-0 md:space-x-4 mt-10 flex flex-wrap mb-6 justify-around items-center gap-4">
          <Image
            src={"/images/port-3.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-4.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-1.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-2.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-5.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-8.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-9.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-7.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-10.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-12.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
          <Image
            src={"/images/port-11.png"}
            alt="Portfolio"
            width={450}
            height={500}
            className="cursor-pointer transition-transform scale-95 hover:scale-90 md:hover:scale-110"
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioCards;
