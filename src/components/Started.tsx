import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosGift } from "react-icons/io";

const Started = () => {
  return (
    <>
      <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4'>
        <div className='w-full md:w-1/3'>
            <div className='px-6 md:px-10 lg:px-16'>
                <Image src={"/images/Star.png"} alt='star' width={90} height={60} className='mt-[-40px] lg:mt-[-70px]'/>
                <IoIosGift className='text-white size-6 w-20 mt-[-55px] ml-1'/>
            </div>
            <div className='mt-16 flex flex-col justify-center px-6 md:px-10 lg:px-16 gap-2'>
            <h5 className="text-base text-[#EF6D58]">Get Started</h5>
            <h4 className='text-lg md:text-2xl text-black  lg:text-3xl font-bold'>I Help Companies Move Faster</h4>
            <Link
              href="/portfolio"
              className="border-2 text-white border-[#EF6D58] bg-[#EF6D58] text-center
           px-4 py-4 rounded-lg hover:bg-transparent hover:text-[#EF6D58] w-40"
            >
              <button>See My Work</button>
            </Link>
            </div>
        </div>
        <div className='w-full text-black md:w-1/3 px-6 md:px-10 lg:px-16'>
        <p>Put themselves in the merchants shoes. It is meant to partner on the long run.</p>
        </div>
        <div className='w-full md:w-1/3'>
        <Image src={"/images/block.png"} alt='block' width={500} height={400} />
        </div>
      </div>
    </>
  )
}

export default Started
