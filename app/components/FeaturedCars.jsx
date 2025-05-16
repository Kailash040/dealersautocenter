import React from "react";
import Image from "next/image";
const FeaturedCars = () => {
  return (
    <div className="my-10">
      {/*  */}
      <div className="bg-[#d8dce0] py-5  ">
        <div className="pl-20 flex justify-between items-center pt-10">
          <div>
            <h4 className="text-4xl text-[#9A1B1B] font-semibold">
              Featured Cars
            </h4>
          </div>
          <div className="pr-10 text-2xl text-[#864649] font-medium flex curser-pointer">
            <p>See more </p>{" "}
            <button>
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
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7-7l7 7l-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/*  */}
        <div className="pl-20 mt-5 flex gap-5 flex-wrap">
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
                    <p className="text-[#ABABAB] font-medium">125,452 miles</p>
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
                    <p className="text-[#ABABAB] font-medium">125,452 miles</p>
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
                    <p className="text-[#ABABAB] font-medium">125,452 miles</p>
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
                    <p className="text-[#ABABAB] font-medium">125,452 miles</p>
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
        </div>
      </div>
      {/*  */}
      <div className="mt-10">
        <div className="pl-20">
          <p className="text-[#222222] font-semibold text-2xl">Browse Cars <br /> By</p> <p className="text-3xl text-[#9F2121]">BodyClass</p>
        </div>
        <div>
            {/*  */}
            
            {/*  */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
