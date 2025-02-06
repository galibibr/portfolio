import { MdOutlineWorkOutline } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";

export const Qualification = () => {
   return (
      <section className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[80px] md:mt-[150px]">
         <p className="text-center md:text-[38px] text-[30px] font-[600]">Qualification</p>
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
                           className="md:text-[18px] font-[600] leading-4 underline hover:text-[#2d2e32]"
                           rel="noreferrer">
                           TNU
                        </a>
                        <p className="text-[#2d2e32] font-[600] text-[14px] md:text-[16px]">
                           Informatics
                        </p>
                        <p className="text-[#2d2e32] leading-4 text-[14px] md:text-[16px]">
                           Bachelor&apos;s degree
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
                           className="md:text-[18px] font-[600] leading-4 underline hover:text-[#2d2e32]"
                           rel="noreferrer">
                           Ilmhona
                        </a>
                        <p className="text-[#2d2e32] md:font-[600] text-[14px] md:text-[16px] leading-[15px] my-[4px]">
                           Front-end Level 1
                        </p>
                        <ul className="pl-[5px] text-[14px] md:text-[16px]">
                           <li className="md:leading-[18px] leading-[15px]">- HTML</li>
                           <li className="md:leading-[18px] leading-[15px]">- CSS</li>
                           <li className="md:leading-[18px] leading-[15px]">- JavaScript</li>
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
                           className="md:text-[18px] font-[600] leading-4 underline hover:text-[#2d2e32]"
                           rel="noreferrer">
                           SoftClub
                        </a>
                        <p className="text-[#2d2e32] md:font-[600] text-[14px] md:text-[16px] leading-[15px] my-[4px]">
                           Front-end
                        </p>
                        <ul className="pl-[5px] text-[14px] md:text-[16px]">
                           <li className="md:leading-[18px] leading-[15px]">- C++</li>
                           <li className="md:leading-[18px] leading-[15px]">- HTML / CSS</li>
                           <li className="md:leading-[18px] leading-[15px]">- Git</li>
                           <li className="md:leading-[18px] leading-[15px]">- JavaScript</li>
                           <li className="md:leading-[18px] leading-[15px]">- React</li>
                           <li className="md:leading-[18px] leading-[15px]">- TypeScript</li>
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
                           className="md:text-[18px] font-[600] leading-4 underline hover:text-[#2d2e32]"
                           rel="noreferrer">
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
                           Private school &quot;Navovar&quot;
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
   );
};
