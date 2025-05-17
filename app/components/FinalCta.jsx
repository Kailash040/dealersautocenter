import React from "react";
import Slider from "./Slider";
import Image from "next/image";
const FinalCta = () => {
  return (
    <div>
      <Slider />
      {/*  */}
      <div className="flex  items-center mt-10 max-[900px]:justify-center">
        <div className="w-[40%] max-[900px]:w-full max-[900px]:px-5">
          <div className="flex justify-center max-[1240px]:pl-5 max-[900px]:pl-0 max-[900px]:full">
            <p className="text-[44px] text-[#1B1B1B] font-semibold max-lg:flex max-[1240px]:text-3xl max-[900px]:w-full">
              {" "}
              Your next car is <br className="max-[900px]:hidden" />
              waiting for you here.
            </p>
          </div>
          <div className="flex justify-end mt-20 pr-10 max-[1240px]:pr-0 max-[900px]:justify-center max-[900px]:mt-10">
            <button className="bg-[#930505] text-[37px] font-semibold text-[#F2E1E1] rounded-full px-10 max-[1240px]:text-2xl ">
              More
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex w-[65%]  justify-end relative max-[900px]:hidden">
          <div className="absolute left-[10%] top-5">
            <Image src="/laptop.png" alt="laptop" width={540} height={499} />
          </div>
          <div className="w-[75%] h-[499px] bg-[#697986]"></div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default FinalCta;
