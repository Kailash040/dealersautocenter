import React from "react";
import Image from "next/image";
const SellYourCar = () => {
  return (
    <div className="bg-[#d9dde1]  flex  w-full justify-between mt-5">
      <div className="w-[70%]">
        <div className="flex flex-col pl-20">
          <div>
            <h5 className="text-[#101011] text-[44px] font-semibold text-center mt-10">
              Sell Your Car
            </h5>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Year"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-[80%] text-[33px] font-semibold"
              />
              <input
                type="text"
                placeholder="Make"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold"
              />
              <input
                type="text"
                placeholder="Model"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold"
              />
              <input
                type="text"
                placeholder="Trim"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-[80%] text-[33px] font-semibold"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="VIN"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold"
              />
              <input
                type="text"
                placeholder="Miles"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Name"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold"
              />
              <input
                type="text"
                placeholder="Email"
                className="px-5 py-3 rounded-full border text-[#969696] border-[#9D9D9D] w-full text-[33px] font-semibold"
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
      <div className="flex flex-col items-center ">
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
