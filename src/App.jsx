import React from 'react'
import './App.css'

// text color #2d2e32

const App = () => {
  return (
    <div className="text-[#2d2e32]">
      {/* Nav */}
      <nav className="shadow-md flex justify-between px-[35px] py-[10px]">
        <a href="#" className="text-[24px]">
          Galib.dev
        </a>
        <ul className="flex gap-[20px] text-[20px]">
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
      </nav>
      {/* Header */}
      <header>
        {/* info */}
        <div className="max-w-[1000px] mx-auto px-[25px] py-[80px] grid grid-cols-2">
          <div className="flex flex-col justify-center gap-[22px]">
            <p className="text-[56px] font-[700] leading-[70px]">Front-End React Developer</p>
            <p className='text-[#555] text-[17px] font-[500]'>
              Hi, I'm Galib Ibragimov. A passionate Front-end React Developer
              based in Tajikistan, Dushanbe.
            </p>
            <div>In, GitHub</div>
          </div>
          <div className="flex justify-end">
            <div className="im"></div>
          </div>
        </div>
        {/* stack */}
      </header>
    </div>
  );
}

export default App