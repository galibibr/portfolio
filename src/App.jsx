import React from 'react'
import './App.css'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// text color #2d2e32

const App = () => {
  return (
    <div className="text-[#2d2e32]">
      {/* Nav */}
      <nav className="shadow-md flex justify-between px-[35px] py-[10px]">
        <a href="#" className="text-[22px] font-[700]">
          Galib.dev
        </a>
        <ul className="flex items-center gap-[20px] text-[18px] font-[600]">
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
      </nav>
      {/* Header */}
      <header>
        {/* info */}
        <div className="md:max-w-[1000px] max-w-[550px] mx-auto px-[25px] py-[40px] gap-[40px] md:gap-0 md:py-[80px] flex flex-col-reverse md:grid md:grid-cols-2">
          <div className="flex flex-col justify-center text-center md:text-start items-center md:items-start gap-[22px]">
            <p className="md:text-[56px] text-[42px] font-[700] leading-[44px] md:leading-[70px]">
              Front-End React Developer
            </p>
            <p className="text-[#555] md:text-[17px] text-[14px] md:px-0 px-[20px] font-[500]">
              Hi, I'm Galib Ibragimov. A passionate Front-end React Developer
              based in Tajikistan, Dushanbe.
            </p>
            <div className='flex gap-2 text-[24px] md:text-[30px]'>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="im"></div>
          </div>
        </div>
        {/* stack */}
      </header>
    </div>
  );
}

export default App