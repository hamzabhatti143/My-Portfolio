import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#28293E] w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="HB Logo"
            width={130}
            height={100}
          />
        </div>

        <div className="w-full md:w-1/3 text-white px-20 flex flex-col items-center md:items-start justify-center gap-6">
          <Link href={"/"} className="mt-10">
            Home
          </Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>

        <div className="w-full md:w-1/3 mt-4 flex justify-center items-center gap-4">
          <Link href={"https://www.facebook.com/profile.php?id=100013869544839"}>
            <div className="rounded-full bg-[#EF6D58] p-2 w-8 flex justify-center">
              <FaFacebookF className="fill-white w-10" />
            </div>
          </Link>

          <Link href={"https://www.instagram.com/hamzabhatti_143/"}>
            <div className="rounded-full bg-[#EF6D58] p-2 w-8 flex justify-center">
              <FaInstagram className="fill-white w-10" />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="rounded-full bg-[#EF6D58] p-2 w-8 flex justify-center">
              <FaWhatsapp className="fill-white w-10" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
