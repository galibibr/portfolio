import React, { useState } from "react";
import "./App.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

// text color #2d2e32

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <div
      className={`text-[#2d2e32] ${
        modal ? "overflow-hidden" : "overflow-auto"
      }`}>
      {/* Nav */}
      <nav className="shadow-[0px_0px_10px_0.1px] shadow-black/10 flex justify-between fixed top-0 w-full px-[35px] py-[10px] bg-nav">
        <a href="/" className="text-[22px] font-[700]">
          Galib.dev
        </a>
        <ul className="hidden md:flex items-center gap-[20px] text-[18px] font-[600]">
          <li>
            <a
              className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
              href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
              href="#">
              About
            </a>
          </li>
          <li>
            <a
              className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
              href="#">
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
              href="#">
              Contacts
            </a>
          </li>
        </ul>
        {/* menu */}
        <button
          onClick={() => setModal(true)}
          className="text-[28px] flex md:hidden hover:text-black hover:scale-[0.90] duration-200">
          <HiOutlineMenu />
        </button>
      </nav>
      {/* Header */}
      <header className="">
        {/* info */}
        <div className="md:max-w-[1000px] max-w-[550px] mt-[100px] mx-auto px-[25px] gap-[40px] md:gap-0 md:py-[80px] flex flex-col-reverse md:grid md:grid-cols-2">
          <div className="flex flex-col justify-center text-center md:text-start items-center md:items-start gap-[22px]">
            <p className="md:text-[56px] text-[38px] font-[700] leading-[44px] md:leading-[70px]">
              Front-End React Developer
            </p>
            <p className="text-[#555] md:text-[17px] text-[15px] md:px-0 px-[20px] font-[500]">
              Hi, I'm Galib Ibragimov. A passionate Front-end React Developer
              based in Tajikistan, Dushanbe.
            </p>
            <div className="flex items-center gap-[20px]">
              <div className="flex gap-2 text-[24px] md:text-[30px]">
                <a
                  href="#"
                  className="hover:text-black hover:scale-[0.90] duration-200">
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/galibibr"
                  target="_blank"
                  className="hover:text-black hover:scale-[0.90] duration-200">
                  <FaGithub />
                </a>
              </div>
              <a
                href="https://t.me/galibibr"
                target="_blank"
                className="bg-[#2d2e32] text-white flex items-center px-[16px] py-[10px] gap-[7px] rounded-[15px] text-[14px] hover:bg-black hover:scale-[0.95] duration-200">
                <p className="font-[600]">Say Hello</p>
                <FaTelegramPlane />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="im"></div>
          </div>
        </div>
        {/* stack */}
      </header>
      {/* modal menu */}
      {modal && (
        <div className="fixed top-0 z-20 w-full h-screen overflow-y-hidden bg-white py-[9px] px-[35px]">
          <div className="flex justify-end">
            <button
              onClick={() => setModal(false)}
              className="text-[32px]  hover:text-black hover:scale-[0.90] duration-200">
              <IoClose />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center h-full gap-[30px] text-[24px] font-[600]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
      )}
      {/* Skills */}
      <section className="pb-[50px] px-[35px] max-w-[550px] mx-auto mt-[100px]">
        <h2 className="text-center text-[28px] font-[600]">Skills</h2>
        <p className="text-center">My technical lavel</p>
        <div className="mt-[20px] border rounded-[20px] bg-white p-[20px] md:p-[30px]">
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">HTML</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[85%]">
                85%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">CSS</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[80%]">
                80%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">JavaScript</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[75%]">
                75%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">React</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[70%]">
                70%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">Redux</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[70%]">
                65%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">REST / API</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[70%]">
                65%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">TypeScript</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[55%]">
                55%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">Git</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[70%]">
                70%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">Tailwind</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[80%]">
                80%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">SASS</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[75%]">
                75%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">MUI</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[65%]">
                65%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">AntD</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[70%]">
                70%
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[10px] items-center">
            <p className="">Next.js</p>
            <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
              <div className="bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[55%]">
                55%
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
