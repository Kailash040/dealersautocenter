"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const FeaturedCars = () => {
  return (
    <div className="my-10">
      {/*  */}
      <div className="bg-[#d8dce0] py-5  ">
        <div>

        <div className="pl-20 flex justify-between items-center pt-10">
          <div>
            <h4 className="text-4xl text-[#9A1B1B] font-semibold">
              Featured Cars
            </h4>
          </div>
          <div>

          <button className="pr-10 text-2xl text-[#864649] font-medium flex curser-pointer swiper-button-next-custom">
            <p>See more </p>{" "}
            <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7l-7 7"
                />
              </svg>
            </div>
            </div>
          </button>
          </div>
        </div>
        {/*  */}
        <div className="pl-20 mt-5 flex gap-5 flex-wrap">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            modules={[Navigation]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="flex ">
                <div className="flex flex-col">
                  <div>
                    <Image src="/car.png" alt="" width={336} height={251} />
                  </div>
                  <div className="bg-white p-2 rounded-br-lg  rounded-bl-lg">
                    <div className="flex justify-between  border-b-2 border-green-50">
                      <div>
                        <p className="text-[#696969] text-base">
                          2015 Mercedes Sprinter <br />
                          Passenger Extended 170
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#A02525]">$ 7,000</p>
                        <p className="text-xs text-[#B3B2B2]">Est $250 mo</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          125,452 miles
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#DCB0B0] bg-[#930505] px-4 py-2 rounded-full">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <div className="flex flex-col">
                  <div>
                    <Image src="/car.png" alt="" width={336} height={251} />
                  </div>
                  <div className="bg-white p-2 rounded-br-lg  rounded-bl-lg">
                    <div className="flex justify-between  border-b-2 border-green-50">
                      <div>
                        <p className="text-[#696969] text-base">
                          2015 Mercedes Sprinter <br />
                          Passenger Extended 170
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#A02525]">$ 7,000</p>
                        <p className="text-xs text-[#B3B2B2]">Est $250 mo</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          125,452 miles
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#DCB0B0] bg-[#930505] px-4 py-2 rounded-full">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <div className="flex flex-col">
                  <div>
                    <Image src="/car.png" alt="" width={336} height={251} />
                  </div>
                  <div className="bg-white p-2 rounded-br-lg  rounded-bl-lg">
                    <div className="flex justify-between  border-b-2 border-green-50">
                      <div>
                        <p className="text-[#696969] text-base">
                          2015 Mercedes Sprinter <br />
                          Passenger Extended 170
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#A02525]">$ 7,000</p>
                        <p className="text-xs text-[#B3B2B2]">Est $250 mo</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          125,452 miles
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#DCB0B0] bg-[#930505] px-4 py-2 rounded-full">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <div className="flex flex-col">
                  <div>
                    <Image src="/car.png" alt="" width={336} height={251} />
                  </div>
                  <div className="bg-white p-2 rounded-br-lg  rounded-bl-lg">
                    <div className="flex justify-between  border-b-2 border-green-50">
                      <div>
                        <p className="text-[#696969] text-base">
                          2015 Mercedes Sprinter <br />
                          Passenger Extended 170
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#A02525]">$ 7,000</p>
                        <p className="text-xs text-[#B3B2B2]">Est $250 mo</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          125,452 miles
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#DCB0B0] bg-[#930505] px-4 py-2 rounded-full">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <div className="flex flex-col">
                  <div>
                    <Image src="/car.png" alt="" width={336} height={251} />
                  </div>
                  <div className="bg-white p-2 rounded-br-lg  rounded-bl-lg">
                    <div className="flex justify-between  border-b-2 border-green-50">
                      <div>
                        <p className="text-[#696969] text-base">
                          2015 Mercedes Sprinter <br />
                          Passenger Extended 170
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#A02525]">$ 7,000</p>
                        <p className="text-xs text-[#B3B2B2]">Est $250 mo</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          125,452 miles
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#DCB0B0] bg-[#930505] px-4 py-2 rounded-full">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <div className="flex flex-col">
                  <div>
                    <Image src="/car.png" alt="" width={336} height={251} />
                  </div>
                  <div className="bg-white p-2 rounded-br-lg  rounded-bl-lg">
                    <div className="flex justify-between  border-b-2 border-green-50">
                      <div>
                        <p className="text-[#696969] text-base">
                          2015 Mercedes Sprinter <br />
                          Passenger Extended 170
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#A02525]">$ 7,000</p>
                        <p className="text-xs text-[#B3B2B2]">Est $250 mo</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          125,452 miles
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#DCB0B0] bg-[#930505] px-4 py-2 rounded-full">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <div className="flex flex-col">
                  <div>
                    <Image src="/car.png" alt="" width={336} height={251} />
                  </div>
                  <div className="bg-white p-2 rounded-br-lg  rounded-bl-lg">
                    <div className="flex justify-between  border-b-2 border-green-50">
                      <div>
                        <p className="text-[#696969] text-base">
                          2015 Mercedes Sprinter <br />
                          Passenger Extended 170
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#A02525]">$ 7,000</p>
                        <p className="text-xs text-[#B3B2B2]">Est $250 mo</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          125,452 miles
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#DCB0B0] bg-[#930505] px-4 py-2 rounded-full">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <div className="flex flex-col">
                  <div>
                    <Image src="/car.png" alt="" width={336} height={251} />
                  </div>
                  <div className="bg-white p-2 rounded-br-lg  rounded-bl-lg">
                    <div className="flex justify-between  border-b-2 border-green-50">
                      <div>
                        <p className="text-[#696969] text-base">
                          2015 Mercedes Sprinter <br />
                          Passenger Extended 170
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#A02525]">$ 7,000</p>
                        <p className="text-xs text-[#B3B2B2]">Est $250 mo</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          125,452 miles
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#DCB0B0] bg-[#930505] px-4 py-2 rounded-full">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex ">
                <div className="flex flex-col">
                  <div>
                    <Image src="/car.png" alt="" width={336} height={251} />
                  </div>
                  <div className="bg-white p-2 rounded-br-lg  rounded-bl-lg">
                    <div className="flex justify-between  border-b-2 border-green-50">
                      <div>
                        <p className="text-[#696969] text-base">
                          2015 Mercedes Sprinter <br />
                          Passenger Extended 170
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl text-[#A02525]">$ 7,000</p>
                        <p className="text-xs text-[#B3B2B2]">Est $250 mo</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex justify-between items-center mt-2">
                      <div>
                        <p className="text-[#ABABAB] font-medium">
                          125,452 miles
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-normal text-[#DCB0B0] bg-[#930505] px-4 py-2 rounded-full">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
      </div>
      {/*  */}
      <div className="mt-10 flex  gap-5 items-center">
        <div className="pl-20">
          <p className="text-[#222222] font-semibold text-2xl">
            Browse Cars <br /> By
          </p>{" "}
          <p className="text-3xl text-[#9F2121]">BodyClass</p>
        </div>
        
        <div className="flex gap-5 ">
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
              <p className="text-[#AF4646] text-xl font-medium mb-5">Convertibl</p>
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
