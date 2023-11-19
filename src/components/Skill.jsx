import React from 'react'

const Skill = ({skill, progress}) => {
  return (
    <div className="grid grid-cols-3 gap-[10px] items-center">
      <p className="">{skill}</p>
      <div className="bg-black/20 rounded-[10px] my-2 relative col-span-2">
        <div
          className={`bg-[#2d2e32] text-white text-center text-[12px] rounded-[10px_0_0px_10px] h-full w-[${progress}%]`}>
          {progress}%
        </div>
      </div>
    </div>
  );
}

export default Skill