import React from "react";

const Navbar = () => {
  return (
   
      <nav className="flex justify-between items-center px-20 py-0 bg-[#6E7E8C] shadow max-md:px-10 max-sm:px-2">
        <h1 className="text-[37px] font-semibold text-[#E7EAEC] max-md:text-2xl max-sm:text-xl">
          
        <span className="text-[#8A1A1C] text-[48.2px] max-md:text-3xl max-sm:text-2xl">D&nbsp;</span>
        
          ealers Auto
          Center
        </h1>
        <div className="py-2">

        <button className="text-2xl text-[#CACCCE] border border-gray-300 px-4 py-1 rounded-3xl cursor-pointer max-md:text-base max-sm:text-sm">
          Login / Signup
        </button>
        </div>
      </nav>
    
  );
};

export default Navbar;
