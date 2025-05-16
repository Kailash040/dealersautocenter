"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
const Hero = () => {
  return (
    <div className="mb-10">
      <section className="relative bg-cover bg-center h-[600px]">
        <div className=" inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white ">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
              initialSlide={1}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-[url(/banner.webp)] w-full bg-cover bg-center h-[600px] relative">
                <div className="absolute  top-30 flex flex-col  items-start px-20">
                  <div>
                    <h1 className="text-[66px] text-white">Get Your</h1>
                  </div>
                  <div>
                    <h2
                      className="text-[76px] text-[#8D0606] font-semibold
"
                    >
                      Dream Car
                    </h2>
                  </div>
                  <button className="text-[#8D0606] text-[33px] bg-white border border-[#BD6C6C]  font-semibold rounded-full py-0 px-20">
                    Start
                  </button>
                </div>
              </div>
            </SwiperSlide>
            {/* 2 */}
            <SwiperSlide>
              <div className="bg-[url(/banner.webp)] w-full bg-cover bg-center h-[600px] relative">
                <div className="absolute  top-30 flex flex-col  items-start px-20">
                  <div>
                    <h1 className="text-[66px] text-white">Get Your</h1>
                  </div>
                  <div>
                    <h2
                      className="text-[76px] text-[#8D0606] font-semibold
"
                    >
                      Dream Car
                    </h2>
                  </div>
                  <button className="text-[#8D0606] text-[33px] bg-white border border-[#BD6C6C]  font-semibold rounded-full py-0 px-20">
                    Start
                  </button>
                </div>
              </div>
              {/* <Image
              src="/banner.webp"
              width={500}
              height={690}
              className="h-[690px]"
              alt="Picture of the author"
            /> */}
            </SwiperSlide>
            {/* 3 */}
            <SwiperSlide>
              <div className="bg-[url(/banner.webp)] w-full bg-cover bg-center h-[600px] relative">
                <div className="absolute  top-30 flex flex-col  items-start px-20">
                  <div>
                    <h1 className="text-[66px] text-white">Get Your</h1>
                  </div>
                  <div>
                    <h2
                      className="text-[76px] text-[#8D0606] font-semibold
"
                    >
                      Dream Car
                    </h2>
                  </div>
                  <button className="text-[#8D0606] text-[33px] bg-white border border-[#BD6C6C]  font-semibold rounded-full py-0 px-20">
                    Start
                  </button>
                </div>
              </div>
              {/* <Image
              src="/banner.webp"
              width={500}
              height={690}
              className="h-[690px]"
              alt="Picture of the author"
            /> */}
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="absolute bottom-[-50px] w-full  z-10 flex justify-center items-center  ">
          <div className="bg-white rounded-full shadow-lg py-8 px-9 flex flex-wrap justify-center gap-7  ">
            <input
              type="text"
              placeholder="Search Inventory"
              className="px-4 py-2 rounded-full border border-[#DADADA] w-[288px] text-lg"
            />
            <input
              type="text"
              placeholder="Year"
              className="px-4 py-2 rounded-full border border-[#DADADA] w-[136px] text-lg"
            />
            <input
              type="text"
              placeholder="Make"
              className="px-4 py-2 rounded-full border  border-[#DADADA] w-[195px] text-lg"
            />
            <input
              type="text"
              placeholder="Model"
              className="px-4 py-2 rounded-full border border-[#DADADA] w-[195px] text-lg"
            />
            <input
              type="text"
              placeholder="ZipCode"
              className="px-4 py-2 rounded-full border border-[#DADADA] w-[195px] text-lg"
            />
            <button className="bg-[#930505] text-white px-4 py-1 rounded-full hover:bg-red-700">
              Find a car
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
