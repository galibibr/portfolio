import React, { useState } from "react";
import "./App.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import myImg from "./assets/Me.png";
import myImg2 from "./assets/0011.jpg";
import { PiMedal } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaSheetPlastic } from "react-icons/fa6";
import myCV from "./assets/Galib Ibragimov CV .pdf";
import Skill from "./components/Skill";
import { BsFillPatchCheckFill } from "react-icons/bs";
import amazon from "./assets/projects/amazon.png";
import amazon2 from "./assets/projects/amazon2.png";
import flash_pizza from "./assets/projects/frash-pizza.png";
import carland from "./assets/projects/carland.png";
import countries from "./assets/projects/countries.png";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";

// text color #2d2e32

const App = () => {
  let imgCountries = 1
  setInterval(function() {
    if (imgCountries < 4) imgCountries += 1
    else imgCountries = 1
  }, 2000)
  const [modal, setModal] = useState(false);

  return (
    <div translate="no"
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
              href="#home">
              Home
            </a>
          </li>
          <li>
            <a
              className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
              href="#about">
              About
            </a>
          </li>
          <li>
            <a
              className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
              href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
              href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-[#2d2e32]/80 hover:text-black hover:font-[600] hover:scale-[0.90] duration-200"
              href="#contacts">
              Contacts
            </a>
          </li>
        </ul>
        {/* menu */}
        <button
          onClick={() => setModal(true)}
          className="text-[28px] flex md:hidden hover:text-black hover:scale-[1.1] duration-200">
          <HiOutlineMenu />
        </button>
      </nav>
      {/* Header */}
      <header id="home" className="min-h-screen pt-[100px]">
        {/* info */}
        <div className="md:max-w-[1000px] max-w-[550px] mx-auto px-[25px] gap-[40px] md:gap-0 md:py-[80px] mb-[100px] flex flex-col-reverse md:grid md:grid-cols-2">
          <div className="flex flex-col justify-center text-center md:text-start items-center md:items-start gap-[22px]">
            <p className="md:text-[56px] text-[38px] font-[700] leading-[44px] md:leading-[70px]">
              Front-End React Developer
            </p>
            <p className="text-[#555] md:text-[17px] text-[15px] md:px-0 px-[20px] font-[500]">
              Hi, I'm Galib Ibragimov. A passionate Front-end React Developer
              based in Russia.
            </p>
            <div className="flex items-center gap-[20px]">
              <div className="flex gap-2 text-[24px] md:text-[30px]">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/galib-ibragimov-317261234/"
                  className="hover:text-black hover:scale-[1.1] duration-200">
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/galibibr"
                  target="_blank"
                  className="hover:text-black hover:scale-[1.1] duration-200">
                  <FaGithub />
                </a>
              </div>
              <a
                href="https://t.me/galibibr"
                target="_blank"
                className="div-shadow bg-[#2d2e32] text-white flex items-center px-[22px] py-[14px] md:px-[26px] md:py-[17px] gap-[7px] rounded-[15px] text-[14px] hover:bg-black hover:scale-[1.05] duration-200">
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
              <a href="#home" onClick={() => setModal(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setModal(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setModal(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setModal(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={() => setModal(false)}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* About me */}
      <section
        id="about"
        className="md:max-w-[1000px] pt-[60px] max-w-[550px] mx-auto px-[25px] mb-[50px]">
        <p className="text-center md:text-[38px] text-[30px] font-[600]">
          About Me
        </p>
        <p className="text-center">My introduction</p>
        <div className="grid md:gap-0 gap-[40px] md:grid-cols-2 py-[40px] md:py-[60px]">
          <div className="md:pr-[60px] flex justify-center md:justify-start">
            <img
              className="div-shadow md:w-[350px] md:h-[350px] w-[260px] h-[260px] object-cover rounded-[20px]"
              src={myImg2}
              alt="Galib"
            />
          </div>
          <div className="flex flex-col justify-between gap-[25px] md:gap-0 text-center md:text-start">
            <div className="grid grid-cols-3 gap-[10px]">
              <div className="div-shadow rounded-[8px] md:p-[20px] p-[10px] flex bg-white flex-col items-center">
                <PiMedal className="text-[20px] md:text-[24px]" />
                <p className="font-[600] md:text-[18px] mt-[4px]">Experience</p>
                <p className="md:text-[14px] text-[11px] text-center w-full">
                  3 + Years
                </p>
              </div>
              <div className="div-shadow rounded-[8px] md:p-[20px] p-[10px] flex bg-white flex-col items-center">
                <MdOutlineWorkOutline className="text-[20px] md:text-[24px]" />
                <p className="font-[600] md:text-[18px] mt-[4px]">Completed</p>
                <p className="md:text-[14px] text-[11px] text-center w-full">
                  14 + Projects
                </p>
              </div>
              <div className="div-shadow rounded-[8px] md:p-[20px] p-[10px] flex bg-white flex-col items-center">
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
                className="div-shadow bg-[#2d2e32] text-white flex items-center px-[22px] py-[14px] md:px-[26px] md:py-[17px] gap-[7px] rounded-[15px] text-[14px] hover:bg-black hover:scale-[1.05] duration-200">
                <p className="font-[600]">Download CV</p>
                <FaSheetPlastic className="text-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[80px] md:mt-[150px]">
        <p className="text-center md:text-[38px] text-[30px] font-[600]">
          Qualification
        </p>
        <p className="text-center">My persolnal journey</p>
        <div className="my-[40px] md:my-[50px] grid md:grid-cols-2 gap-[50px] md:gap-[30px]">
          {/* ///////// */}
          <div className="">
            <p className="flex justify-center items-center gap-[5px] text-[20px] font-[600]">
              <PiStudentBold className="text-[32px]" />
              Eduction
            </p>
            <div className="div-shadow grid grid-cols-2 relative mt-[25px] bg-white rounded-[20px] p-[20px]">
              {/* line */}
              <div className="absolute top-0 w-full h-full grid grid-cols-2 pt-[25px] ">
                <div className="border-r border-[#5b5c5f] w-full h-full"></div>
                <div className="border-l border-[#5b5c5f] w-full h-full"></div>
              </div>
              {/* TNU */}
              <div className="col-span-1 pr-[30px]">
                <div className="relative">
                  <a
                    href="https://www.google.com/search?q=TNU&oq=TNU&gs_lcrp=EgZjaHJvbWUyBggAEEUYPDIJCAEQRRg5GIAEMgcIAhAAGIAEMgkIAxAAGAoYgAQyDwgEEAAYChiDARixAxiABDINCAUQLhjHARjRAxiABDIGCAYQRRg8MgYIBxBFGDzSAQg0MDEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    className="md:text-[18px] font-[600] leading-4 underline hover:text-[#2d2e32]">
                    TNU
                  </a>
                  <p className="text-[#2d2e32] font-[600] text-[14px] md:text-[16px]">
                    Informatics
                  </p>
                  <p className="text-[#2d2e32] leading-4 text-[14px] md:text-[16px]">
                    Bachelor's degree
                  </p>
                  <p className="text-[#2d2e32]/80 mt-[10px] flex items-center gap-[4px] text-[12px]">
                    <FaRegCalendarAlt />
                    2019-2023
                  </p>
                  <div className="p-[7px] md:p-[9px] top-[5px] right-[-37px] md:right-[-39px] rounded-full bg-[#5b5c5f] absolute"></div>
                </div>
              </div>
              {/* Ilmhona */}
              <div className="row-start-2 col-start-2 pl-[30px]">
                <div className="relative">
                  <a
                    href="https://ilmhona.org/"
                    target="_blank"
                    className="md:text-[18px] font-[600] leading-4 underline hover:text-[#2d2e32]">
                    Ilmhona
                  </a>
                  <p className="text-[#2d2e32] md:font-[600] text-[14px] md:text-[16px] leading-[15px] my-[4px]">
                    Front-end Level 1
                  </p>
                  <ul className="pl-[5px] text-[14px] md:text-[16px]">
                    <li className="md:leading-[18px] leading-[15px]">- HTML</li>
                    <li className="md:leading-[18px] leading-[15px]">- CSS</li>
                    <li className="md:leading-[18px] leading-[15px]">
                      - JavaScript
                    </li>
                  </ul>
                  <p className="text-[#2d2e32]/80 mt-[10px] flex items-center gap-[4px] text-[12px]">
                    <FaRegCalendarAlt />
                    10/2022-12/2022
                  </p>
                  <div className="p-[7px] md:p-[9px] top-[3px] left-[-37px] md:left-[-39px] rounded-full bg-[#5b5c5f] absolute"></div>
                </div>
              </div>
              {/* SoftClub */}
              <div className="col-span-1 row-start-3 pr-[30px]">
                <div className="relative">
                  <a
                    href="https://www.softclub.tj/"
                    target="_blank"
                    className="md:text-[18px] font-[600] leading-4 underline hover:text-[#2d2e32]">
                    SoftClub
                  </a>
                  <p className="text-[#2d2e32] md:font-[600] text-[14px] md:text-[16px] leading-[15px] my-[4px]">
                    Front-end
                  </p>
                  <ul className="pl-[5px] text-[14px] md:text-[16px]">
                    <li className="md:leading-[18px] leading-[15px]">- C++</li>
                    <li className="md:leading-[18px] leading-[15px]">
                      - HTML / CSS
                    </li>
                    <li className="md:leading-[18px] leading-[15px]">- Git</li>
                    <li className="md:leading-[18px] leading-[15px]">
                      - JavaScript
                    </li>
                    <li className="md:leading-[18px] leading-[15px]">
                      - React
                    </li>
                    <li className="md:leading-[18px] leading-[15px]">
                      - TypeScript
                    </li>
                  </ul>
                  <p className="text-[#2d2e32]/80 mt-[10px] flex items-center gap-[4px] text-[12px]">
                    <FaRegCalendarAlt />
                    01/2023-09/2023
                  </p>
                  <div className="md:p-[9px] p-[7px] top-[5px] right-[-37px] md:right-[-39px] rounded-full bg-[#5b5c5f] absolute"></div>
                </div>
              </div>
            </div>
          </div>
          {/* ///////// */}
          <div className="">
            <p className="flex justify-center items-center gap-[5px] text-[20px] font-[600]">
              <MdOutlineWorkOutline className="text-[32px]" />
              Experience
            </p>
            <div className="div-shadow grid grid-cols-2 relative mt-[25px] bg-white rounded-[20px] p-[20px]">
              {/* line */}
              <div className="absolute top-0 w-full h-full grid grid-cols-2 pt-[25px]">
                <div className="border-r border-[#5b5c5f] w-full h-full"></div>
                <div className="border-l border-[#5b5c5f] w-full h-full"></div>
              </div>
              {/* Liga */}
              <div className="col-span-1 pr-[30px]">
                <div className="relative">
                  <a
                    href="https://ligarobotov.tj/"
                    target="_blank"
                    className="md:text-[18px] font-[600] leading-4 underline hover:text-[#2d2e32]">
                    Liga Robotov Tajikistan
                  </a>
                  <p className="text-[#2d2e32] text-[14px] md:text-[16px] md:font-[600] leading-[18px] my-[4px]">
                    Robotics and programming instructor
                  </p>
                  <p className="text-[#2d2e32]/80 mt-[10px] flex items-center gap-[4px] text-[12px]">
                    <FaRegCalendarAlt />
                    01/2020-06/2023
                  </p>
                  <div className="md:p-[9px] p-[7px] top-[5px] right-[-37px] md:right-[-39px] rounded-full bg-[#5b5c5f] absolute"></div>
                </div>
              </div>
              {/* Navoar */}
              <div className="row-start-2 col-start-2 pl-[30px]">
                <div className="relative">
                  <p className="md:text-[18px] font-[600] leading-5 hover:text-[#2d2e32]">
                    Private school "Navovar"
                  </p>
                  <p className="text-[#2d2e32] md:font-[600] text-[14px] md:text-[16px]">
                    Chess instructor
                  </p>
                  <p className="text-[#2d2e32]/80 mt-[10px] flex items-center gap-[4px] text-[12px]">
                    <FaRegCalendarAlt />
                    09/2021-06/2023
                  </p>
                  <div className="md:p-[9px] p-[7px] top-[3px] left-[-37px] md:left-[-39px] rounded-full bg-[#5b5c5f] absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[70px] pt-[60px] md:mt-[140px]">
        <p className="text-center md:text-[38px] text-[30px] font-[600]">
          Skills
        </p>
        <p className="text-center">My technical lavel</p>
        <div className="div-shadow my-[40px] md:my-[60px] md:pm-[60px] bg-white rounded-[20px] p-[25px] md:p-[30px] lg:p-[60px] grid md:grid-cols-2 gap-x-[35px] md:gap-x-[60px] gap-y-[15px] md:gap-y-0">
          <div className="flex flex-col gap-[15px]">
            <Skill name="HTML" percent={"80%"} />
            <Skill name="CSS" percent={"85%"} />
            <Skill name="Sass" percent={"75%"} />
            <Skill name="JavaScript" percent={"75%"} />
            <Skill name="React" percent={"70%"} />
            <Skill name="Redux" percent={"70%"} />
            <Skill name="Git" percent={"80%"} />
          </div>
          <div className="flex flex-col gap-[15px]">
            <Skill name="Tailwind CSS" percent={"85%"} />
            <Skill name="Material UI" percent={"70%"} />
            <Skill name="Ant Design" percent={"65%"} />
            <Skill name="REST API" percent={"80%"} />
            <Skill name="TypeScript" percent={"55%"} />
            <Skill name="Next.js" percent={"50%"} />
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

      {/* Projects */}
      <section
        id="projects"
        className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[70px] pt-[60px] md:mt-[140px]">
        <p className="text-center md:text-[38px] text-[30px] font-[600]">
          Portfolio
        </p>
        <p className="text-center">Most recent work</p>
        <div className="my-[40px] md:my-[60px] flex flex-col gap-[40px]">
          {/* amazon */}
          <div className="p-[20px] div-amazon rounded-[20px] grid md:grid-cols-[60%_40%] bg-white">
            {/* photo */}
            <a
              href="https://next-store-amazon.vercel.app/"
              target="_blank"
              className="w-auto h-[160px] sm:h-[240px] lg:h-[270px] md:h-[360px] box-amazon overflow-hidden rounded-[20px]">
              <img src={amazon2} className="img-amazon" alt="amazon web" />
            </a>
            {/* info */}
            <div className="text-center flex md:text-[17px] pt-[20px] md:pt-0 gap-[8px] flex-col justify-around md:pl-[40px] md:pr-[20px]">
              <p>
                <b>AMAZON</b>{" "}
                <span className="text-[14px]">(OCTOBER 2023)</span>
              </p>
              <p className="leading-[22px]">
                Online shopping is a form of e-commerce that allows consumers to
                directly.
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
                  <b>Tailwind CSS</b>
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
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300">
                  Code <FiGithub className="text-[22px]" />
                </a>
                <a
                  href="https://next-store-amazon.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300">
                  Live Demo <RiExternalLinkLine className="text-[24px]" />
                </a>
              </div>
            </div>
          </div>

          {/* carland */}
          {/* <div className="p-[20px] div-amazon rounded-[20px] grid md:grid-cols-[60%_40%] bg-white"> */}
          <div className="p-[20px] div-carland rounded-[20px] flex flex-col-reverse md:grid md:grid-cols-[40%_60%] bg-white">
            {/* info */}
            <div className="text-center flex md:text-[17px] pt-[20px] md:pt-0 gap-[8px] flex-col justify-around md:pr-[40px] md:pl-[20px]">
              <p>
                <b>CARLAND</b>{" "}
                <span className="text-[14px]">(DECEMBER 2023)</span>
              </p>
              <p className="leading-[22px]">
                A car rental website is an online platform that allows users to
                rent cars for personal or business use. 
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
                    src="https://skillicons.dev/icons?i=javascript"
                  />
                  <b>JavaScript</b>
                </p>
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=tailwind"
                  />
                  <b>Tailwind CSS</b>
                </p>
              </div>
              <div className="flex justify-evenly">
                <a
                  href="https://github.com/galibibr/carland"
                  target="_blank"
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300">
                  Code <FiGithub className="text-[22px]" />
                </a>
                <a
                  href="https://carland-tau.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300">
                  Live Demo <RiExternalLinkLine className="text-[24px]" />
                </a>
              </div>
            </div>
            {/* photo */}
            <a
              href="https://carland-tau.vercel.app/"
              target="_blank"
              className="w-auto h-[160px] sm:h-[240px] lg:h-[270px] md:h-[360px] box-amazon overflow-hidden rounded-[20px]">
              <img src={carland} className="img-carland" alt="amazon web" />
            </a>
          </div>

          {/* frash pizza */}
          {/* <div className="p-[20px] div-amazon rounded-[20px] flex flex-col-reverse md:grid md:grid-cols-[40%_60%] bg-white"> */}
          <div className="p-[20px] div-amazon rounded-[20px] grid md:grid-cols-[60%_40%] bg-white">
            {/* photo */}
            <a
              href="https://flash-pizza.vercel.app/"
              target="_blank"
              className="w-auto h-[160px] sm:h-[240px] lg:h-[270px] box-amazon overflow-hidden rounded-[20px]">
              <img src={flash_pizza} className="img-amazon" alt="amazon web" />
            </a>
            {/* info */}
            <div className="text-center flex md:text-[17px] pt-[20px] md:pt-0 gap-[8px] flex-col justify-around md:pl-[40px] md:pr-[20px]">
              <p>
                <b>FLASH PIZZA</b>{" "}
                <span className="text-[14px]">(DECEMBER 2023)</span>
              </p>
              <p className="leading-[22px]">
                Pizza delivery is a service in which pizza is delivered to the
                customer.
              </p>
              {/* skills */}
              <div className="flex flex-wrap text-[16px] justify-center gap-y-[5px] gap-x-[15px]">
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=react"
                  />
                  <b>React</b>
                </p>
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=javascript"
                  />
                  <b>JavaScript</b>
                </p>
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=sass"
                  />
                  <b>Sass</b>
                </p>
                {/* <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=redux"
                  />
                  <b>Redux</b>
                </p> */}
              </div>
              <div className="flex justify-evenly">
                <a
                  href="https://github.com/galibibr/flash-pizza"
                  target="_blank"
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300">
                  Code <FiGithub className="text-[22px]" />
                </a>
                <a
                  href="https://flash-pizza.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300">
                  Live Demo <RiExternalLinkLine className="text-[24px]" />
                </a>
              </div>
            </div>
          </div>

          {/* countries */}
          {/* <div className="p-[20px] div-amazon rounded-[20px] grid md:grid-cols-[60%_40%] bg-white"> */}
          <div className="p-[20px] div-carland rounded-[20px] flex flex-col-reverse md:grid md:grid-cols-[40%_60%] bg-white">
            {/* info */}
            <div className="text-center flex md:text-[17px] pt-[20px] md:pt-0 gap-[8px] flex-col justify-around md:pr-[40px] md:pl-[20px]">
              <p>
                <b>COUNTRIES</b>{" "}
                <span className="text-[14px]">(DECEMBER 2023)</span>
              </p>
              <p className="leading-[22px]">
                Countries of the World.
              </p>
              {/* skills */}
              <div className="flex flex-wrap text-[16px] justify-center gap-y-[5px] gap-x-[15px]">
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=html"
                  />
                  <b>NTML5</b>
                </p>
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=css"
                  />
                  <b>CSS3</b>
                </p>
                <p className="flex gap-[3px]">
                  <img
                    className="w-[20px]"
                    src="https://skillicons.dev/icons?i=javascript"
                  />
                  <b>JavaScript</b>
                </p>
              </div>
              <div className="flex justify-evenly">
                <a
                  href="https://github.com/galibibr/countries"
                  target="_blank"
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300">
                  Code <FiGithub className="text-[22px]" />
                </a>
                <a
                  href="https://coutries.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300">
                  Live Demo <RiExternalLinkLine className="text-[24px]" />
                </a>
              </div>
            </div>
            {/* photo */}
            <a
              href="https://coutries.vercel.app/"
              target="_blank"
              className="w-auto box-amazon overflow-hidden rounded-[20px]">
              <img src={
                
                countries
              } className="" alt="amazon web" />
            </a>
          </div>
        </div>
      </section>

      {/* Contans */}
      <section
        id="contacts"
        className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[17px] pt-[60px] md:mt-[140px]">
        <p className="text-center md:text-[38px] text-[30px] font-[600]">
          Contact Me
        </p>
        <p className="text-center">Get in touch</p>
        <div className="my-[40px] md:my-[60px] grid md:grid-cols-3 gap-[30px]">
          <div className="rounded-[20px] div-shadow p-[20px] bg-white flex flex-col gap-[5px] items-center">
            <MdOutlineAttachEmail className="text-[32px]" />
            <p className="text-[18px] font-[600]">Email</p>
            <a
              className="underline hover:text-black duration-300"
              href="mailto:galibiavi4@gmail.com">
              galibiavi4@gmail.com
            </a>
          </div>
          <div className="rounded-[20px] div-shadow p-[20px] bg-white flex flex-col gap-[5px] items-center">
            <FaWhatsapp className="text-[32px]" />
            <p className="text-[18px] font-[600]">WhatsApp</p>
            <a
              className="underline hover:text-black duration-300"
              href="whatsapp://+79533201232">
              +7 953 320-12-32
            </a>
          </div>
          <div className="rounded-[20px] div-shadow p-[20px] bg-white flex flex-col gap-[5px] items-center">
            <PiTelegramLogoBold className="text-[32px]" />
            <p className="text-[18px] font-[600]">Telegram</p>
            <a
              className="underline hover:text-black duration-300"
              href="https://t.me/galibibr"
              target="_blank">
              @galibibr
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="md:py-[50px] py-[20px] px-[25px] bg-[#2d2e32]">
        <p className="text-center text-white font-[500] md:text-[14px] text-[12px]">
          Copyright © 2023. All rights are reserved
        </p>
      </footer>
    </div>
  );
};

export default App;
