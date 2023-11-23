import React, { useState } from "react";
import "./App.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import myImg from "./assets/Me.png";
import { PiMedal } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaSheetPlastic } from "react-icons/fa6";
import myCV from "./assets/Galib Ibragimov CV .pdf";
import Skill from "./components/Skill";
import { BsFillPatchCheckFill } from "react-icons/bs";
import amazon from "./assets/projects/amazon.png";
import amazon2 from "./assets/projects/amazon2.png";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

// text color #2d2e32

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <div
      className={`text-[#2d2e32] ${
        modal ? "overflow-hidden" : "overflow-auto"
      }`}>
      {/* Nav */}
      <nav className="shadow-[0px_0px_10px_0.1px] shadow-black/10 flex justify-between fixed top-0 z-30 w-full px-[35px] py-[10px] bg-nav">
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
              Skills
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
      <header>
        {/* info */}
        <div className="md:max-w-[1000px] max-w-[550px] mt-[100px] mx-auto px-[25px] gap-[40px] md:gap-0 md:py-[80px] mb-[100px] flex flex-col-reverse md:grid md:grid-cols-2">
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
                className="div-shadow bg-[#2d2e32] text-white flex items-center px-[22px] py-[14px] md:px-[26px] md:py-[17px] gap-[7px] rounded-[15px] text-[14px] hover:bg-black hover:scale-[0.95] duration-200">
                <p className="font-[600]">Say Hello</p>
                <FaTelegramPlane className="text-[20px]" />
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
        <div className="fixed top-0 z-30 w-full h-screen overflow-y-hidden bg-white py-[9px] px-[35px]">
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
              <a href="#">Skills</a>
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
      {/* About me */}
      <section className="md:max-w-[1000px] max-w-[550px] mx-auto px-[25px] mb-[50px]">
        <p className="text-center md:text-[38px] text-[30px] font-[600]">
          About Me
        </p>
        <p className="text-center">My introduction</p>
        <div className="grid md:gap-0 gap-[40px] md:grid-cols-2 py-[40px] md:py-[60px]">
          <div className="md:pr-[60px] flex justify-center md:justify-start">
            <img
              className="div-shadow md:w-[350px] md:h-[350px] w-[260px] h-[260px] object-cover rounded-[20px]"
              src={myImg}
              alt="Galib"
            />
          </div>
          <div className="flex flex-col justify-between gap-[25px] md:gap-0 text-center md:text-start">
            <div className="grid grid-cols-3 gap-[10px]">
              <div className="div-shadow border rounded-[8px] md:p-[20px] p-[10px] flex bg-white flex-col items-center">
                <PiMedal className="text-[20px] md:text-[24px]" />
                <p className="font-[600] md:text-[18px] mt-[4px]">Experience</p>
                <p className="md:text-[14px] text-[11px] text-center w-full">
                  3 + Years
                </p>
              </div>
              <div className="div-shadow border rounded-[8px] md:p-[20px] p-[10px] flex bg-white flex-col items-center">
                <MdOutlineWorkOutline className="text-[20px] md:text-[24px]" />
                <p className="font-[600] md:text-[18px] mt-[4px]">Completed</p>
                <p className="md:text-[14px] text-[11px] text-center w-full">
                  14 + Projects
                </p>
              </div>
              <div className="div-shadow border rounded-[8px] md:p-[20px] p-[10px] flex bg-white flex-col items-center">
                <BiSupport className="text-[20px] md:text-[24px]" />
                <p className="font-[600] md:text-[18px] mt-[4px]">Support</p>
                <p className="md:text-[14px] text-[11px] text-center w-full">
                  Online 24/7
                </p>
              </div>
            </div>
            <p>
              Front-end developer, I create web pages with UI / UX user
              interface, I have years of experience and many clients are happy
              with the projects carried out. I have years of experience and many
              clients are happy with the projects carried out.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href={myCV}
                download={myCV}
                className="div-shadow bg-[#2d2e32] text-white flex items-center px-[22px] py-[14px] md:px-[26px] md:py-[17px] gap-[7px] rounded-[15px] text-[14px] hover:bg-black hover:scale-[0.95] duration-200">
                <p className="font-[600]">Download CV</p>
                <FaSheetPlastic className="text-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[80px] md:mt-[150px]">
        <p className="text-center md:text-[38px] text-[30px] font-[600]">
          Skills
        </p>
        <p className="text-center">My technical lavel</p>
        <div className="div-shadow my-[40px] md:my-[60px] md:pm-[60px] border bg-white rounded-[20px] p-[25px] md:p-[30px] lg:p-[60px] grid md:grid-cols-2 gap-x-[35px] md:gap-x-[60px] gap-y-[15px] md:gap-y-0">
          <div className="flex flex-col gap-[15px]">
            <Skill name="HTML" percent={80} />
            <Skill name="CSS" percent={85} />
            <Skill name="SASS" percent={75} />
            <Skill name="JavaScript" percent={75} />
            <Skill name="React" percent={70} />
            <Skill name="Redux" percent={70} />
            <Skill name="Git" percent={80} />
          </div>
          <div className="flex flex-col gap-[15px]">
            <Skill name="Tailwind" percent={85} />
            <Skill name="Material Design" percent={70} />
            <Skill name="Ant Design" percent={65} />
            <Skill name="REST / API" percent={80} />
            <Skill name="TypeScript" percent={55} />
            <Skill name="Next.js" percent={50} />
            {/* <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
              <div className="col-start-1 row-start-1 row-end-2 px-[10px] flex items-center">
                <BsFillPatchCheckFill />
              </div>
              <p className="col-start-2 text-[18px] font-[600]">sss</p>
              <div className="col-start-2 row-start-2 flex items-center gap-[5px]">
                <div className="w-full bg-[#2d2e32] p-[2px] rounded-full">
                  <div className="rounded-full bg-white">
                    <div
                      className={`w-[55%] bg-[#2d2e32] p-[3px]`}></div>
                  </div>
                </div>
                <p className="text-[14px] leading-[0px]">55%</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
              <div className="col-start-1 row-start-1 row-end-2 px-[10px] flex items-center">
                <BsFillPatchCheckFill />
              </div>
              <p className="col-start-2 text-[18px] font-[600]">sss</p>
              <div className="col-start-2 row-start-2 flex items-center gap-[5px]">
                <div className="w-full bg-[#2d2e32] p-[2px] rounded-full">
                  <div className="rounded-full bg-white">
                    <div
                      className={`w-[50%] bg-[#2d2e32] p-[3px]`}></div>
                  </div>
                </div>
                <p className="text-[14px] leading-[0px]">55%</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
              <div className="col-start-1 row-start-1 row-end-2 px-[10px] flex items-center">
                <BsFillPatchCheckFill />
              </div>
              <p className="col-start-2 text-[18px] font-[600]">sss</p>
              <div className="col-start-2 row-start-2 flex items-center gap-[5px]">
                <div className="w-full bg-[#2d2e32] p-[2px] rounded-full">
                  <div className="rounded-full bg-white">
                    <div
                      className={`w-[60%] bg-[#2d2e32] p-[3px]`}></div>
                  </div>
                </div>
                <p className="text-[14px] leading-[0px]">60%</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
              <div className="col-start-1 row-start-1 row-end-2 px-[10px] flex items-center">
                <BsFillPatchCheckFill />
              </div>
              <p className="col-start-2 text-[18px] font-[600]">sss</p>
              <div className="col-start-2 row-start-2 flex items-center gap-[5px]">
                <div className="w-full bg-[#2d2e32] p-[2px] rounded-full">
                  <div className="rounded-full bg-white">
                    <div
                      className={`w-[65%] bg-[#2d2e32] p-[3px]`}></div>
                  </div>
                </div>
                <p className="text-[14px] leading-[0px]">65%</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
              <div className="col-start-1 row-start-1 row-end-2 px-[10px] flex items-center">
                <BsFillPatchCheckFill />
              </div>
              <p className="col-start-2 text-[18px] font-[600]">sss</p>
              <div className="col-start-2 row-start-2 flex items-center gap-[5px]">
                <div className="w-full bg-[#2d2e32] p-[2px] rounded-full">
                  <div className="rounded-full bg-white">
                    <div
                      className={`w-[70%] bg-[#2d2e32] p-[3px]`}></div>
                  </div>
                </div>
                <p className="text-[14px] leading-[0px]">70%</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
              <div className="col-start-1 row-start-1 row-end-2 px-[10px] flex items-center">
                <BsFillPatchCheckFill />
              </div>
              <p className="col-start-2 text-[18px] font-[600]">sss</p>
              <div className="col-start-2 row-start-2 flex items-center gap-[5px]">
                <div className="w-full bg-[#2d2e32] p-[2px] rounded-full">
                  <div className="rounded-full bg-white">
                    <div
                      className={`w-[75%] bg-[#2d2e32] p-[3px]`}></div>
                  </div>
                </div>
                <p className="text-[14px] leading-[0px]">75%</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
              <div className="col-start-1 row-start-1 row-end-2 px-[10px] flex items-center">
                <BsFillPatchCheckFill />
              </div>
              <p className="col-start-2 text-[18px] font-[600]">sss</p>
              <div className="col-start-2 row-start-2 flex items-center gap-[5px]">
                <div className="w-full bg-[#2d2e32] p-[2px] rounded-full">
                  <div className="rounded-full bg-white">
                    <div
                      className={`w-[80%] bg-[#2d2e32] p-[3px]`}></div>
                  </div>
                </div>
                <p className="text-[14px] leading-[0px]">80%</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
              <div className="col-start-1 row-start-1 row-end-2 px-[10px] flex items-center">
                <BsFillPatchCheckFill />
              </div>
              <p className="col-start-2 text-[18px] font-[600]">sss</p>
              <div className="col-start-2 row-start-2 flex items-center gap-[5px]">
                <div className="w-full bg-[#2d2e32] p-[2px] rounded-full">
                  <div className="rounded-full bg-white">
                    <div
                      className={`w-[85%] bg-[#2d2e32] p-[3px]`}></div>
                  </div>
                </div>
                <p className="text-[14px] leading-[0px]">85%</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* <div className="p-[50px] bg-black/10">
        <div className="border w-[300px] h-[250px] overflow-hidden relative ee">
          <img
          className="pr"
            src="https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp"
            alt=""
          />
        </div>
      </div> */}

      {/* Projects */}
      <section className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[130px] md:mt-[200px]">
        <p className="text-center md:text-[38px] text-[30px] font-[600]">
          Portfolio
        </p>
        <p className="text-center">Most recent work</p>
        <div className="my-[40px] md:my-[60px]">
          {/* amazon */}
          <div className="p-[20px] div-amazon rounded-[20px] grid md:grid-cols-[60%_40%] bg-white">
            {/* photo */}
            <a
              href="https://next-store-amazon.vercel.app/"
              target="_blank"
              className="w-auto h-[360px] box-amazon overflow-hidden rounded-[20px]">
              <img src={amazon2} className="img-amazon" alt="amazon web" />
            </a>
            {/* info */}
            <div className="text-center flex md:text-[17px] pt-[20px] px-[20px] gap-[8px] flex-col justify-around md:pl-[40px] md:pr-[20px]">
              <p>
                <b>AMAZON</b>{" "}
                <span className="text-[14px]">(OCTOBER 2023)</span>
              </p>
              <p className="leading-[22px]">
                Online shopping is a form of e-commerce that allows consumers to
                directly purchase goods or services from a seller online using a
                web browser or mobile application.
              </p>
              {/* skills */}
              <div className="flex flex-wrap text-[16px] justify-center gap-y-[5px] gap-x-[15px]">
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=nextjs"
                  />
                  <b>Next.js</b>
                </p>
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=typescript"
                  />
                  <b>TypeScript</b>
                </p>
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=tailwind"
                  />
                  <b>Tailwind</b>
                </p>
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=redux"
                  />
                  <b>Redux</b>
                </p>
              </div>
              <div className="flex justify-evenly">
                <a
                  href="https://github.com/galibibr/next-store-amazon"
                  target="_blank"
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[0.95] duration-300">
                  Code <FiGithub className="text-[22px]" />
                </a>
                <a
                  href="https://next-store-amazon.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[0.95] duration-300">
                  Live Demo <RiExternalLinkLine className="text-[24px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
