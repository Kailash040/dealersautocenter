import React from "react";

const Navbar = () => {
  return (
   
      <nav className="flex justify-between items-center px-20 py-0 bg-[#6E7E8C] shadow">
        <h1 className="text-[37px] font-semibold text-[#E7EAEC]">
          <span className="text-[#8A1A1C] text-[48.2px]">D&nbsp;</span>ealers Auto
          Center
        </h1>
        <button className="text-2xl text-[#CACCCE] border border-gray-300 px-4 py-1 rounded-3xl cursor-pointer">
          Login / Signup
        </button>
      </nav>
    
  );
};

export default Navbar;
