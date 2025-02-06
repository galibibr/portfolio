'use client';

import { useState } from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export const Header = () => {
   const [modal, setModal] = useState(false);

   return (
      <header id="home" className="min-h-screen pt-[100px] text-[#2d2e32]">
         {/* Nav */}
         <nav className="shadow-[0px_0px_10px_0.1px] shadow-black/10 flex justify-between fixed top-0 z-30 w-full px-[35px] py-[10px] bg-nav">
            <Link href="/" className="text-[22px] font-[700]">
               Galib.dev
            </Link>
            <ul className="hidden md:flex items-center gap-[20px] text-[18px] font-[600]">
               <li>
                  <Link
                     className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
                     href="#home">
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
                     href="#about">
                     About
                  </Link>
               </li>
               <li>
                  <Link
                     className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
                     href="#skills">
                     Skills
                  </Link>
               </li>
               <li>
                  <Link
                     className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
                     href="#projects">
                     Projects
                  </Link>
               </li>
               <li>
                  <Link
                     className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
                     href="#contacts">
                     Contacts
                  </Link>
               </li>
            </ul>
            {/* menu */}
            <button
               onClick={() => setModal(true)}
               className="text-[28px] flex md:hidden hover:text-black hover:scale-[1.1] duration-200">
               <HiOutlineMenu />
            </button>
         </nav>
         {/* modal menu */}
         {modal && (
            <div className="fixed top-0 z-30 anim w-full h-screen overflow-y-hidde bg-[#fafafa] py-[9px] px-[35px]">
               <div className="flex justify-end">
                  <button
                     onClick={() => setModal(false)}
                     className="text-[32px]  hover:text-black hover:scale-[1.1] duration-200">
                     <IoClose />
                  </button>
               </div>
               <ul className="flex flex-col items-center pb-[100px] justify-center h-full gap-[30px] text-[24px] font-[600]">
                  <li>
                     <Link href="#home" onClick={() => setModal(false)}>
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link href="#about" onClick={() => setModal(false)}>
                        About
                     </Link>
                  </li>
                  <li>
                     <Link href="#skills" onClick={() => setModal(false)}>
                        Skills
                     </Link>
                  </li>
                  <li>
                     <Link href="#projects" onClick={() => setModal(false)}>
                        Projects
                     </Link>
                  </li>
                  <li>
                     <Link href="#contacts" onClick={() => setModal(false)}>
                        Contacts
                     </Link>
                  </li>
               </ul>
            </div>
         )}
         {/* info */}
         <div className="md:max-w-[1000px] max-w-[550px] mx-auto px-[25px] gap-[40px] md:gap-0 md:py-[80px] mb-[100px] flex flex-col-reverse md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center text-center md:text-start items-center md:items-start gap-[22px]">
               <p className="md:text-[56px] text-[38px] font-[700] leading-[44px] md:leading-[70px]">
                  Front-End React Developer
               </p>
               <p className="text-[#555] md:text-[17px] text-[15px] md:px-0 px-[20px] font-[500]">
                  Hi, I&apos;m Galib Ibragimov. A am Front-end React Developer from Tajikistan.
               </p>
               <div className="flex items-center gap-[20px]">
                  <div className="flex gap-2 text-[24px] md:text-[30px]">
                     <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/galib-ibragimov-317261234/"
                        className="hover:text-black hover:scale-[1.1] duration-200"
                        rel="noreferrer">
                        <FaLinkedinIn />
                     </Link>
                     <Link
                        href="https://github.com/galibibr"
                        target="_blank"
                        className="hover:text-black hover:scale-[1.1] duration-200"
                        rel="noreferrer">
                        <FaGithub />
                     </Link>
                  </div>
                  <Link
                     href="https://t.me/galibibr"
                     target="_blank"
                     className="div-shadow bg-[#2d2e32] text-white flex items-center px-[22px] py-[14px] md:px-[26px] md:py-[17px] gap-[7px] rounded-[15px] text-[14px] hover:bg-black hover:scale-[1.05] duration-200"
                     rel="noreferrer">
                     <p className="font-[600]">Say Hello</p>
                     <FaTelegramPlane className="text-[20px]" />
                  </Link>
               </div>
            </div>
            <div className="flex justify-center md:justify-end">
               <div className="im"></div>
            </div>
         </div>
         {/* stack */}
      </header>
   );
};
