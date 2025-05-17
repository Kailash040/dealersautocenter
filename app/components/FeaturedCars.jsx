"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Slider from "./Slider";
// import { Pagination } from "swiper/modules";
const FeaturedCars = () => {
  return (
    <div className="my-10">
      {/*  */}
      <div className="bg-[#d8dce0] py-5  ">
       <Slider/>
      </div>
      {/*  */}
      <div className="mt-10 flex  gap-5 items-center max-[1040px]:flex-col">
        <div className="pl-20 max-[1040px]:flex  max-[1040px]:justify-center max-[1040px]:items-center max-[1040px]:gap-2 max-sm:pl-0">
          <p className="text-[#222222] font-semibold text-2xl max-sm:text-xl ">
            Browse Cars <br className="max-[1040px]:hidden" /> By
          </p>{" "}
          <p className="text-3xl text-[#9F2121] max-sm:text-xl">BodyClass</p>
        </div>

        <div className="flex gap-5 max-[1200px]:flex-wrap max-[1200px]:justify-center">
          {/*  */}
          {/*  */}
          <div className="flex  flex-col items-center shadow-xl px-6    py-2 rounded-lg">
            <div>
              <p className="text-[#AF4646] text-xl font-medium mb-5">Sedan</p>
            </div>
            <div>
              <Image src="/car2.png" alt="" width={336} height={251} />
            </div>
            <div>
              <p className="text-base text-[#6F6F6F] mt-5">(360cars)</p>
            </div>
          </div>
          <div className="flex  flex-col items-center shadow-xl px-6    py-2 rounded-lg">
            <div>
              <p className="text-[#AF4646] text-xl font-medium mb-5">Truck</p>
            </div>
            <div>
              <Image src="/car3.png" alt="" width={336} height={251} />
            </div>
            <div>
              <p className="text-base text-[#6F6F6F] mt-5">((360cars))</p>
            </div>
          </div>
          <div className="flex  flex-col items-center shadow-xl px-6    py-2 rounded-lg">
            <div>
              <p className="text-[#AF4646] text-xl font-medium mb-5">
                Convertibl
              </p>
            </div>
            <div>
              <Image src="/car4.png" alt="" width={336} height={251} />
            </div>
            <div>
              <p className="text-base text-[#6F6F6F] mt-5">(360cars)</p>
            </div>
          </div>
          <div className="flex  flex-col items-center shadow-xl px-6    py-2 rounded-lg">
            <div>
              <p className="text-[#AF4646] text-xl font-medium mb-5">Sedan</p>
            </div>
            <div>
              <Image src="/car2.png" alt="" width={336} height={251} />
            </div>
            <div>
              <p className="text-base text-[#6F6F6F] mt-5">(360cars)</p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
