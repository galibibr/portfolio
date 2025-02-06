
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";

export const Contacts = () => {
   return (
      <section
         id="contacts"
         className="md:max-w-[1000px] max-w-[550px] px-[25px] mx-auto mt-[17px] pt-[60px] md:mt-[140px]">
         <p className="text-center md:text-[38px] text-[30px] font-[600]">Contact Me</p>
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
                  target="_blank"
                  rel="noreferrer">
                  @galibibr
               </a>
            </div>
         </div>
      </section>
   );
};
