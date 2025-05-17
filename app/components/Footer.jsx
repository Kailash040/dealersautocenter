import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 bg-[#697986] px-20 list-none max-md:px-5">
      <div>
        <p className="pt-10 text-[#930505] font-semibold text-[37px] max-sm:text-[30px]">
          Ghada Motors LLC
        </p>
      </div>
      <div className="flex mt-5 ">
        <div className="w-[50%] pl-15 flex flex-col gap-3   max-md:pl-0">
          <li>
            <a href="" className="text-white text-2xl max-sm:text-base">
              Home
            </a>
          </li>
          <li>
            <a href="" className="text-white text-2xl max-sm:text-base">
              Inventory
            </a>
          </li>
          <li>
            <a href="" className="text-white text-2xl max-sm:text-base">
              Finance
            </a>
          </li>
        </div>
        <div className="w-[50%] flex flex-col gap-3">
          <li>
            <a href="" className="text-white text-2xl max-sm:text-base">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="text-white text-2xl max-sm:text-base">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="" className="text-white text-2xl max-sm:text-base">
              Terms and Conditions
            </a>
          </li>
        </div>
      </div>
      {/*  */}
      <div className="mx-20 pt-5 border-t-2 border-white mt-5 max-md:mt-2 max-md:w-full max-md:mx-0">
        <div>
          {" "}
          <p className="text-white  text-center text-lg font-medium max-md:text-base ">
            By Calling the dealership you agree and accept to Terms and
            Conditions of use.
          </p>
        </div>
        <div>
          <p className="text-center text-xs text-white mt-5 pb-2">
            Powered by Dealer Auto Center Inc 2024 | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
