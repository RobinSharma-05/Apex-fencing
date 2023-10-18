import React from "react";
import garden from "../assets/images/webp/section_fourth.webp";
const YourFence = () => {
  return (
    <div id="section_4">
      {/* <div className="">
        <div className="lg:flex xl:gap-7 justify-between 2xl:justify-center">
          <div>
            <img className="w-full h-full" src={garden} alt="garden" />
          </div>
          <div className=" bg-dark-purple">
            <div className="lg:max-w-[570px] pb-12 md:pb-[95px] pt-12 md:pt-[89px] lg:ps-20 lg:pe-[11px] px-5">
              <div className="flex justify-center lg:justify-start">
                <h3 className="text-white font-Riviera font-medium text-[34px] text-center lg:text-start"></h3>
              </div>
              <div className="flex justify-center text-center lg:text-start lg:justify-start mt-5">
                <p className="font-Jakarta text-white max-w-[470px] font-normal text-lg"></p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <div className="hover:bg-light-brown mt-[58px] hover:text-black hover:border-2 text-white border-2 hover:border-black border-white py-4 px-[33px] inline-block duration-500">
                  <button className="font-Jakarta font-medium text-base  mb-1"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-dark-purple relative">
        <img
          className="left-0 h-full absolute hidden xl:block"
          src={garden}
          alt="garden"
        />
        <img className="xl:hidden w-full" src={garden} alt="garden" />
        <div className="container xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 flex justify-end">
          <div className="w-full xl:w-[50%] pb-12 md:pb-[95px] pt-10 md:pt-[89px] lg:pe-[11px] xl:ps-[190px]">
            <div className="flex justify-center xl:justify-start text-center xl:text-start">
              <h3 className="text-white font-Jakarta font-medium text-[34px]">
                Ready for the Next Step?
              </h3>
            </div>
            <div className="flex justify-center text-center xl:text-start xl:justify-start mt-5">
              <p className="font-Jakarta text-white max-w-[470px] font-normal text-md mb-5">
                Find a nearby dealer to kickstart your outdoor transformation.
              </p>
            </div>
            <div className="flex justify-center xl:justify-start">
              <div className="mt-5 hover:bg-light-brown duration-500 hover:text-black  text-white border border-solid hover:border-black border-[#eee4db] py-4 px-[33px] inline-block">
                <button className="font-Jakarta font-medium text-xs leading-[140%] mb-1">
                  Locate a Dealer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFence;
