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
          className="hover:opacity-60 cursor-pointer"
        />
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

export default PortfolioCards;
