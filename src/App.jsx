import React, { useState } from "react";
import "./App.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Skill from "./components/Skill";

// text color #2d2e32

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="text-[#2d2e32]">
      {/* Nav */}
      <nav className="shadow-[0px_0px_10px_0.1px] shadow-black/10 flex justify-between fixed top-0 w-full px-[35px] py-[10px] bg-nav">
        <a href="#" className="text-[22px] font-[700]">
          Galib.dev
        </a>
        <ul className="hidden md:flex items-center gap-[20px] text-[18px] font-[600]">
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
        {/* menu */}
        <button
          onClick={() => setModal(true)}
          className="text-[28px] flex md:hidden">
          <HiOutlineMenu />
        </button>
      </nav>
      {/* Header */}
      <header className="min-h-screen">
        {/* info */}
        <div className="md:max-w-[1000px] max-w-[550px] mt-[70px] mx-auto px-[25px] py-[40px] gap-[40px] md:gap-0 md:py-[80px] flex flex-col-reverse md:grid md:grid-cols-2">
          <div className="flex flex-col justify-center text-center md:text-start items-center md:items-start gap-[22px]">
            <p className="md:text-[56px] text-[38px] font-[700] leading-[44px] md:leading-[70px]">
              Front-End React Developer
            </p>
            <p className="text-[#555] md:text-[17px] text-[15px] md:px-0 px-[20px] font-[500]">
              Hi, I'm Galib Ibragimov. A passionate Front-end React Developer
              based in Tajikistan, Dushanbe.
            </p>
            <div className="flex gap-2 text-[24px] md:text-[30px]">
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
      {/* modal menu */}
      {modal && (
        <div className="absolute top-0 w-full h-screen overflow-y-hidden bg-white py-[9px] px-[35px]">
          <div className="flex justify-end">
            <button onClick={() => setModal(false)} className="text-[32px]">
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
      <section className="pb-[50px] px-[35px] max-w-[550px] mx-auto">
        <h2 className="text-center text-[28px] font-[600]">Skills</h2>
        <p className="text-center">My technical lavel</p>
        <div className="mt-[20px] border rounded-[20px] bg-white p-[20px] md:p-[30px]">
          <Skill skill={"HTML"} progress={'85'}/>
          <Skill skill={"CSS"} progress={'80'}/>
          <Skill skill={"JavaScript"} progress={'75'}/>
          <Skill skill={"React"} progress={'70'}/>
          <Skill skill={"TypeScript"} progress={'55'}/>
          <Skill skill={"Git"} progress={'70'}/>
          <Skill skill={"Tailwind"} progress={'80'}/>
          <Skill skill={"SASS"} progress={'75'}/>
          <Skill skill={"MUI"} progress={'65'}/>
          <Skill skill={"Ant D"} progress={'70'}/>
          <Skill skill={"Next.js"} progress={'55'}/>
        </div>
      </section>
    </div>
  );
};

export default App;
