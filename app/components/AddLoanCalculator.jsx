import React from "react";
import Image from "next/image";
const AddLoanCalculator = () => {
  return (
    <div className="bg-[#6e7e8c] py-2 flex  w-full justify-between">
      <div className="w-[50%]">
        <div className="flex flex-col pl-20">
          <div>
            <h5 className="text-[#EFF0F2] text-[44px] font-semibold">
              Auto Loan Calculator
            </h5>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <input
                type="text"
                placeholder="Vehicle Amount"
                className="px-7 py-5 rounded-full border text-[#D2D5D8] border-[#D2D5D8] w-full text-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Down Payment"
                className="px-7 py-5 rounded-full border text-[#D2D5D8] border-[#D2D5D8] w-full text-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Trade-in-Value"
                className="px-7 py-5 rounded-full border text-[#D2D5D8] border-[#D2D5D8] w-full text-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="TTL(Title,Taxes and Licences Plates) Est."
                className="px-7 py-5 rounded-full border text-[#D2D5D8] border-[#D2D5D8] w-full text-lg"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Interest Rate"
                className="px-7 py-5 rounded-full border text-[#D2D5D8] border-[#D2D5D8] w-full text-lg"
              />
            </div>
          </div>
          {/*  */}
          <div>
            <div className="mt-5">
              <p className="text-[20px] text-[#CFD3D5]">Loan Terms (Monthly)</p>
            </div>
            <div className="flex justify-between">
              <button className=" text-white px-8 py-2 border border-amber-50 rounded-full hover:bg-red-700 text-3xl">
                48
              </button>
              <button className=" text-white px-8 py-2 border border-amber-50 rounded-full hover:bg-red-700 text-3xl">
                36
              </button>
              <button className="bg-[#930505] text-white px-8 py-2 rounded-full hover:bg-red-700 text-3xl">
                60
              </button>
              <button className=" text-white px-8 py-2 border border-amber-50 rounded-full hover:bg-red-700 text-3xl">
                72
              </button>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="mt-5">
              <p className="text-[20px] text-[#CFD3D5]">Approx. Credit Score</p>
            </div>
            <div className="flex justify-between">
              <button className=" text-white px-8 py-2 border border-amber-50 rounded-full hover:bg-red-700 text-base">
                Poor <br /> 360 or less
              </button>
              <button className=" text-white px-8 py-2 border border-amber-50 rounded-full hover:bg-red-700 text-base">
                Fair <br /> 640 or 699
              </button>
              <button className="bg-[#930505] text-white px-8 py-2 rounded-full hover:bg-red-700 text-base">
                Good <br /> 700 or 749
              </button>
              <button className=" text-white px-8 py-2 border border-amber-50 rounded-full hover:bg-red-700 text-base">
                Excellent
                <br />
                750 or 850
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        {/*  */}
        <div className="relative">
          <div className="flex flex-col items-center  absolute top-[22%] left-[20%]">
            <p className="text-[#F5EFEF] text-[64px] font-semibold p-0">$0</p>
            <p className="text-[#F5EFEF] text-[64px] font-semibold p-0">
              Month
            </p>
          </div>
          <div>
            <Image src="/circle.png" alt="car" width={577} height={633} />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col items-center">
          <div>
            <p className="text-[27px] text-[#D5D7DA] font-semibold">
              Get Pre-Approved
            </p>
          </div>
          <div>
            <button className="text-2xl font-medium text-[#DCB0B0] bg-[#930505] px-10 py-2 mt-2 rounded-full curser">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLoanCalculator;
