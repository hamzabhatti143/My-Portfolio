"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
   <nav className="bg-[#28293E] text-white w-full relative">
  <div className="w-full flex items-center justify-between px-6 md:px-16 lg:px-32 py-4">
    {/* Logo */}
    <div className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="HB Logo"
        width={130}
        height={100}
      />
    </div>

    {/* Toggle Button for Small Screens */}
    <div className="md:hidden">
      <button
        className="text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12" // Cross icon
                : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
            }
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Navigation Links */}
  <div
    className={`${
      isOpen ? "block" : "hidden"
    } md:flex md:items-center md:justify-between md:relative md:w-auto md:bg-transparent`}
  >
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center px-6 md:px-16 lg:px-32 pb-4 md:pb-0">
      <li>
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </li>
      <li>
        <Link href="/portfolio" className="hover:underline">
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#28293E] transition"
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
};

export default Header;
