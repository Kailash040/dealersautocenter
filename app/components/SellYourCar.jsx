import React from "react";
import Image from "next/image";
const SellYourCar = () => {
  return (
    <div className="bg-[#d9dde1]  flex  w-full justify-between mt-5  max-lg:flex-wrap max-lg:pb-10">
      <div className="w-[70%] max-lg:w-full">
        <div className="flex flex-col pl-20  max-lg:pl-5 max-lg:pr-5">
          <div>
            <h5 className="text-[#101011] text-[44px] font-semibold text-center mt-10 ">
              Sell Your Car
            </h5>
          </div>
          <div className="flex flex-col gap-5 mt-10 max-md:mt-5">
            <div className="flex gap-5 max-md:flex-wrap">
              <input
                type="text"
                placeholder="Year"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-[80%] text-[33px] font-semibold max-md:w-full max-md:text-2xl max-md:px-3"
              />
              <input
                type="text"
                placeholder="Make"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold  max-md:w-full  max-md:text-2xl max-md:px-3"
              />
              <input
                type="text"
                placeholder="Model"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold  max-md:w-full max-md:text-2xl max-md:px-3"
              />
              <input
                type="text"
                placeholder="Trim"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-[80%] text-[33px] font-semibold  max-md:w-full max-md:text-2xl max-md:px-3"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-5 mt-10 max-md:mt-5">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="VIN"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold max-md:text-2xl max-md:px-3"
              />
              <input
                type="text"
                placeholder="Miles"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold max-md:text-2xl max-md:px-3"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10 max-md:mt-5">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold max-md:text-2xl max-md:px-3"
              />
              <input
                type="text"
                placeholder="Email"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold max-md:text-2xl max-md:px-3"
              />
            </div>
          </div>
          {/*  */}
          <div>
            {" "}
            <div className="flex justify-center mt-10">
              <button className="text-2xl font-semibold text-[#EFE6E6] bg-[#930505] px-20 py-2 mt-2 rounded-full curser">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center max-lg:hidden ">
        {/*  */}

        <div>
          <Image src="/car5.png" alt="car" width={412} height={682} />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default SellYourCar;
