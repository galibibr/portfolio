import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skill = ({name, percent}) => {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
      <div className="col-start-1 row-start-1 row-end-2 pr-[10px] flex items-center">
        <BsFillPatchCheckFill />
      </div>
      <p className="col-start-2 text-[18px] font-[600]">{name}</p>
      <div className="col-start-2 row-start-2 flex items-center gap-[5px]">
        <div className="w-full bg-[#2d2e32] p-[2px] rounded-full">
          <div className="rounded-full bg-white">
            <div className={`w-[${percent}%] bg-[#2d2e32] p-[3px]`}></div>
          </div>
        </div>
        <p className="text-[14px] leading-[0px]">{percent}%</p>
      </div>
    </div>
  );
}

export default Skill