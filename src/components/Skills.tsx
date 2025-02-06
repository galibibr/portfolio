import Skill from "@/components/Skill";

export const Skills = () => {
   return (
      <section
         id="skills"
         className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[70px] pt-[60px] md:mt-[140px]">
         <p className="text-center md:text-[38px] text-[30px] font-[600]">Skills</p>
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
            </div>
         </div>
      </section>
   );
};
