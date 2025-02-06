import { RiExternalLinkLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import amazon2 from "@/assets/projects/amazon2.png";
import carland from "@/assets/projects/carland.png";
import countries from "@/assets/projects/countries.png";
import Image from "next/image";

export const Projects = () => {
   return (
      <section
         id="projects"
         className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[70px] pt-[60px] md:mt-[140px]">
         <p className="text-center md:text-[38px] text-[30px] font-[600]">Portfolio</p>
         <p className="text-center">Most recent work</p>
         <div className="my-[40px] md:my-[60px] flex flex-col gap-[40px]">
            {/* amazon */}
            <div className="p-[20px] div-amazon rounded-[20px] grid md:grid-cols-[60%_40%] bg-white">
               {/* photo */}
               <a
                  href="https://next-store-amazon.vercel.app/"
                  target="_blank"
                  className="w-auto h-[160px] sm:h-[240px] lg:h-[270px] md:h-[360px] box-amazon overflow-hidden rounded-[20px]"
                  rel="noreferrer">
                  <Image src={amazon2} className="img-amazon" alt="amazon web" />
               </a>
               {/* info */}
               <div className="text-center flex md:text-[17px] pt-[20px] md:pt-0 gap-[8px] flex-col justify-around md:pl-[40px] md:pr-[20px]">
                  <p>
                     <b>AMAZON</b> <span className="text-[14px]">(OCTOBER 2023)</span>
                  </p>
                  <p className="leading-[22px]">
                     Online shopping is a form of e-commerce that allows consumers to directly.
                  </p>
                  {/* skills */}
                  <div className="flex flex-wrap text-[16px] justify-center gap-y-[5px] gap-x-[15px]">
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=nextjs"
                           alt="nextjs"
                        /> */}
                        <b>Next.js</b>
                     </p>
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=typescript"
                           alt="typescript"
                        /> */}
                        <b>TypeScript</b>
                     </p>
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=tailwind"
                           alt="tailwind"
                        /> */}
                        <b>Tailwind CSS</b>
                     </p>
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=redux"
                           alt="redux"
                        /> */}
                        <b>Redux</b>
                     </p>
                  </div>
                  <div className="flex justify-evenly">
                     <a
                        href="https://github.com/galibibr/next-store-amazon"
                        target="_blank"
                        className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300"
                        rel="noreferrer">
                        Code <FiGithub className="text-[22px]" />
                     </a>
                     <a
                        href="https://next-store-amazon.vercel.app/"
                        target="_blank"
                        className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300"
                        rel="noreferrer">
                        Live Demo <RiExternalLinkLine className="text-[24px]" />
                     </a>
                  </div>
               </div>
            </div>

            {/* carland */}
            <div className="p-[20px] div-carland rounded-[20px] flex flex-col-reverse md:grid md:grid-cols-[40%_60%] bg-white">
               {/* info */}
               <div className="text-center flex md:text-[17px] pt-[20px] md:pt-0 gap-[8px] flex-col justify-around md:pr-[40px] md:pl-[20px]">
                  <p>
                     <b>CARLAND</b> <span className="text-[14px]">(DECEMBER 2023)</span>
                  </p>
                  <p className="leading-[22px]">
                     A car rental website is an online platform that allows users to rent cars for
                     personal or business use.
                  </p>
                  {/* skills */}
                  <div className="flex flex-wrap text-[16px] justify-center gap-y-[5px] gap-x-[15px]">
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=nextjs"
                           alt="nextjs"
                        /> */}
                        <b>Next.js</b>
                     </p>
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=javascript"
                           alt="javascript"
                        /> */}
                        <b>JavaScript</b>
                     </p>
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=tailwind"
                           alt="tailwind"
                        /> */}
                        <b>Tailwind CSS</b>
                     </p>
                  </div>
                  <div className="flex justify-evenly">
                     <a
                        href="https://github.com/galibibr/carland"
                        target="_blank"
                        className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300"
                        rel="noreferrer">
                        Code <FiGithub className="text-[22px]" />
                     </a>
                     <a
                        href="https://carland-tau.vercel.app/"
                        target="_blank"
                        className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300"
                        rel="noreferrer">
                        Live Demo <RiExternalLinkLine className="text-[24px]" />
                     </a>
                  </div>
               </div>
               {/* photo */}
               <a
                  href="https://carland-tau.vercel.app/"
                  target="_blank"
                  className="w-auto h-[160px] sm:h-[240px] lg:h-[270px] md:h-[360px] box-amazon overflow-hidden rounded-[20px]"
                  rel="noreferrer">
                  <Image src={carland} className="img-carland" alt="amazon web" />
               </a>
            </div>

            {/* countries */}
            <div className="p-[20px] div-carland rounded-[20px] flex flex-col-reverse md:grid md:grid-cols-[40%_60%] bg-white">
               {/* info */}
               <div className="text-center flex md:text-[17px] pt-[20px] md:pt-0 gap-[8px] flex-col justify-around md:pr-[40px] md:pl-[20px]">
                  <p>
                     <b>COUNTRIES</b> <span className="text-[14px]">(DECEMBER 2023)</span>
                  </p>
                  <p className="leading-[22px]">Countries of the World.</p>
                  {/* skills */}
                  <div className="flex flex-wrap text-[16px] justify-center gap-y-[5px] gap-x-[15px]">
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=html"
                           alt="html"
                        /> */}
                        <b>NTML5</b>
                     </p>
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=css"
                           alt="csss"
                        /> */}
                        <b>CSS3</b>
                     </p>
                     <p className="flex gap-[3px]">
                        {/* <img
                           className="w-[20px]"
                           src="https://skillicons.dev/icons?i=javascript"
                           alt="javascript"
                        /> */}
                        <b>JavaScript</b>
                     </p>
                  </div>
                  <div className="flex justify-evenly">
                     <a
                        href="https://github.com/galibibr/countries"
                        target="_blank"
                        className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300"
                        rel="noreferrer">
                        Code <FiGithub className="text-[22px]" />
                     </a>
                     <a
                        href="https://coutries.vercel.app/"
                        target="_blank"
                        className="flex items-center gap-[5px] hover:text-black hover:scale-[1.05] duration-300"
                        rel="noreferrer">
                        Live Demo <RiExternalLinkLine className="text-[24px]" />
                     </a>
                  </div>
               </div>
               {/* photo */}
               <a
                  href="https://coutries.vercel.app/"
                  target="_blank"
                  className="w-auto box-amazon overflow-hidden rounded-[20px]"
                  rel="noreferrer">
                  <Image src={countries} className="" alt="amazon web" />
               </a>
            </div>
         </div>
      </section>
   );
};
