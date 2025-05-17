import React from "react";
import Slider from "./Slider";
import Image from "next/image";
const FinalCta = () => {
  return (
    <div>
      <Slider />
      {/*  */}
      <div className="flex  items-center mt-10">
        <div className="w-[40%]">
          <div className="flex justify-center">
            <p className="text-[44px] text-[#1B1B1B] font-semibold">
              {" "}
              Your next car is <br />
              waiting for you here.
            </p>
          </div>
          <div className="flex justify-end mt-20 pr-10">
            <button className="bg-[#930505] text-[37px] font-semibold text-[#F2E1E1] rounded-full px-10">
              More
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex w-[65%]  justify-end">
          <div>
            <Image src="/laptop.png" alt="" width={540} height={499} />
          </div>
          <div className="w-[400px] h-[499px] bg-[#697986]"></div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default FinalCta;
