"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Hero = () => {
  return (
    <div>
      <div className="mb-10">
        <section className="relative bg-cover bg-center h-[600px] max-md:h-[450px]">
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
                <div className="bg-[url(/banner.webp)] w-full bg-cover bg-center h-[600px] max-md:h-[450px] relative">
                  <div className="absolute  top-30 flex flex-col  items-start px-20 max-sm:px-5">
                    <div>
                      <h1 className="text-[66px] text-white max-md:text-5xl max-sm:text-4xl">Get Your</h1>
                    </div>
                    <div>
                      <h2
                        className="text-[76px] text-[#8D0606] font-semibold max-md:text-6xl max-sm:text-5xl
"
                      >
                        Dream Car
                      </h2>
                    </div>
                    <button className="text-[#8D0606] max-md:text-2xl max-md:mt-5 text-[33px] bg-white border border-[#BD6C6C]  font-semibold rounded-full py-0 px-20">
                      Start
                    </button>
                  </div>
                </div>
           
              </SwiperSlide>
              {/* 2 */}
             <SwiperSlide>
                <div className="bg-[url(/banner.webp)] w-full bg-cover bg-center h-[600px] max-md:h-[450px] relative">
                  <div className="absolute  top-30 flex flex-col  items-start px-20 max-sm:px-5">
                    <div>
                      <h1 className="text-[66px] text-white max-md:text-5xl max-sm:text-4xl">Get Your</h1>
                    </div>
                    <div>
                      <h2
                        className="text-[76px] text-[#8D0606] font-semibold max-md:text-6xl max-sm:text-5xl
"
                      >
                        Dream Car
                      </h2>
                    </div>
                    <button className="text-[#8D0606] max-md:text-2xl max-md:mt-5 text-[33px] bg-white border border-[#BD6C6C]  font-semibold rounded-full py-0 px-20">
                      Start
                    </button>
                  </div>
                </div>
           
              </SwiperSlide>
              {/* 3 */}
             <SwiperSlide>
                <div className="bg-[url(/banner.webp)] w-full bg-cover bg-center h-[600px] max-md:h-[450px] relative">
                  <div className="absolute  top-30 flex flex-col  items-start px-20 max-sm:px-5">
                    <div>
                      <h1 className="text-[66px] text-white max-md:text-5xl max-sm:text-4xl">Get Your</h1>
                    </div>
                    <div>
                      <h2
                        className="text-[76px] text-[#8D0606] font-semibold max-md:text-6xl max-sm:text-5xl
"
                      >
                        Dream Car
                      </h2>
                    </div>
                    <button className="text-[#8D0606] max-md:text-2xl max-md:mt-5 text-[33px] bg-white border border-[#BD6C6C]  font-semibold rounded-full py-0 px-20">
                      Start
                    </button>
                  </div>
                </div>
           
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="absolute bottom-[-50px] w-full  z-10 flex justify-center items-center  max-xl:px-5">
            <div className="bg-white rounded-full max-xl:rounded-3xl shadow-lg py-8 px-9 flex flex-wrap justify-center gap-7 max-xl:gap-2 max-xl:px-4 max-xl:py-4 max-[556px]:p-0">
              <input
                type="text"
                placeholder="Search Inventory"
                className="px-4 py-2 rounded-full border border-[#DADADA] w-[288px] text-lg max-[707px]:w-[136px] max-[633px]:w-[150px] max-[556px]:w-[100px]"
              />
              <input
                type="text"
                placeholder="Year"
                className="px-4 py-2 rounded-full border border-[#DADADA] w-[136px] text-lg max-[633px]:w-[150px] max-[556px]:w-[100px]"
              />
              <input
                type="text"
                placeholder="Make"
                className="px-4 py-2 rounded-full border  border-[#DADADA] w-[195px] text-lg max-[633px]:w-[150px] max-[556px]:w-[100px]"
              />
              <input
                type="text"
                placeholder="Model"
                className="px-4 py-2 rounded-full border border-[#DADADA] w-[195px] text-lg max-[633px]:w-[150px] max-[556px]:w-[100px]"
              />
              <input
                type="text"
                placeholder="ZipCode"
                className="px-4 py-2 rounded-full border border-[#DADADA] w-[195px] text-lg max-[633px]:w-[150px] max-[556px]:w-[100px]"
              />
              <button className="bg-[#930505] text-white px-4 py-1 rounded-full hover:bg-red-700 max-[1328px]:px-10 max-[1328px]:py-2  max-[556px]:px-5">
                Find a car
              </button>
            </div>
          </div>
        </section>
      </div>
      {/*  */}
      <div className="flex justify-center mt-20 gap-10 flex-wrap max-[700px]:gap-2 max-[700px]:justify-between max-[700px]:px-5  ">
        <div className="w-[20%] text-center flex flex-col items-center max-[1230px]:w-[30%]  max-[700px]:w-[100%]">
          <div>
            <Image src="/logo1.png" width={70} height={60} alt="logo1" />
          </div>
          <div>
            <h3 className="text-[#171717] text-3xl font-medium">
              Digital Signing
            </h3>
          </div>
          <div>
            <p className="text-sm text-[#919191]">
              Ensuring simplicity, swiftly sealing deals, and offering eSign,
              eConfract, Online Payment, & Delivery.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="w-[20%] text-center flex flex-col items-center max-[1230px]:w-[30%]  max-[700px]:w-[100%]">
          <div>
            <Image src="/logo2.png" width={70} height={60} alt="logo1" />
          </div>
          <div>
            <h3 className="text-[#171717] text-3xl font-medium">
              Safe and Secure
            </h3>
          </div>
          <div>
            <p className="text-sm text-[#919191]">
              Dive info Cutting-Edge Technology, Where Excellence is Redefined
              and Delivered with Every Inferaction
            </p>
          </div>
        </div>
        {/*  */}
        <div className="w-[20%] text-center flex flex-col items-center max-[1230px]:w-[30%] max-[700px]:w-[100%]">
          <div>
            <Image src="/logo3.png" width={70} height={60} alt="logo1" />
          </div>
          <div>
            <h3 className="text-[#171717] text-3xl font-medium">
              Service Contract
            </h3>
          </div>
          <div>
            <p className="text-sm text-[#919191]">
              Connecting you to the USA's most trusted car professionals and
              genuine private sellers.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="w-[20%] text-center flex flex-col items-center max-[1230px]:w-[30%]  max-[700px]:w-[100%]">
          <div>
            <Image src="/logo4.png" width={70} height={60} alt="logo1" />
          </div>
          <div>
            <h3 className="text-[#171717] text-3xl font-medium">Get Offer</h3>
          </div>
          <div>
            <p className="text-sm text-[#919191]">From Verified Degler.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
