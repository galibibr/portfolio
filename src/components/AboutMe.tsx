import { BiSupport } from "react-icons/bi";
import { PiMedal } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaSheetPlastic } from "react-icons/fa6";

import myImg2 from "@/assets/0011.jpg";
import Image from "next/image";

export const AboutMe = () => {
   return (
      <section
         id="about"
         className="md:max-w-[1000px] pt-[60px] max-w-[550px] mx-auto px-[25px] mb-[50px]">
         <p className="text-center md:text-[38px] text-[30px] font-[600]">About Me</p>
         <p className="text-center">My introduction</p>
         <div className="grid md:gap-0 gap-[40px] md:grid-cols-2 py-[40px] md:py-[60px]">
            <div className="md:pr-[60px] flex justify-center md:justify-start">
               <Image
                  src={myImg2}
                  className="div-shadow md:w-[350px] md:h-[350px] w-[260px] h-[260px] object-cover rounded-[20px]"
                  alt="Gholibjoni Ibrohimzoda Front-end Developer"
               />
            </div>
            <div className="flex flex-col justify-between gap-[25px] md:gap-0 text-center md:text-start">
               <div className="grid grid-cols-3 gap-[10px]">
                  <div className="div-shadow rounded-[8px] md:p-[20px] p-[10px] flex bg-white flex-col items-center">
                     <PiMedal className="text-[20px] md:text-[24px]" />
                     <p className="font-[600] md:text-[18px] mt-[4px]">Experience</p>
                     <p className="md:text-[14px] text-[11px] text-center w-full">1 + Years</p>
                  </div>
                  <div className="div-shadow rounded-[8px] md:p-[20px] p-[10px] flex bg-white flex-col items-center">
                     <MdOutlineWorkOutline className="text-[20px] md:text-[24px]" />
                     <p className="font-[600] md:text-[18px] mt-[4px]">Completed</p>
                     <p className="md:text-[14px] text-[11px] text-center w-full">6 + Projects</p>
                  </div>
                  <div className="div-shadow rounded-[8px] md:p-[20px] p-[10px] flex bg-white flex-col items-center">
                     <BiSupport className="text-[20px] md:text-[24px]" />
                     <p className="font-[600] md:text-[18px] mt-[4px]">Support</p>
                     <p className="md:text-[14px] text-[11px] text-center w-full">Online 24/7</p>
                  </div>
               </div>
               <p>
                  Front-end developer, I create web pages with UI / UX user interface, I have years
                  of experience and many clients are happy with the projects carried out. I have
                  years of experience and many clients are happy with the projects carried out.
               </p>
               <div className="flex justify-center md:justify-start">
                  <a
                     //  href={myCV}
                     href={"/"}
                     //  download={myCV}
                     className="div-shadow bg-[#2d2e32] text-white flex items-center px-[22px] py-[14px] md:px-[26px] md:py-[17px] gap-[7px] rounded-[15px] text-[14px] hover:bg-black hover:scale-[1.05] duration-200">
                     <p className="font-[600]">Download CV</p>
                     <FaSheetPlastic className="text-[20px]" />
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};
