"use client";
import Footer from "@/components/Footer";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Started from "@/components/Started";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import Web from "@/components/Web";
import Contact1 from "@/components/Contact1";
import Features from "@/components/Features";
import Project from "@/components/Project";
import Hero from "@/components/Hero";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <Hero />

      <Service />

      <Portfolio />

      <Web />

      <Features />

      <Started />

      <Contact1 />

      <Project />

      <Footer />
    </>
  );
}
