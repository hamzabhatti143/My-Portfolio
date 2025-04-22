import Footer from "@/components/Footer";
import Hero from "@/components/Portfolio/Hero";

import PortfolioCards from "@/components/Portfolio/PortfolioCards";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />

      <PortfolioCards />

      <Footer />
    </>
  );
};

export default page;
