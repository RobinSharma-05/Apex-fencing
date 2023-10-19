import React from "react";
import garden from "../assets/images/webp/section_fourth.webp";
const YourFence = () => {
  return (
    <div id="section_4">
      <div className="bg-dark-purple relative">
        <img
          className="left-0 h-full w-[55%] absolute hidden xl:block object-cover"
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
              <div className="mt-5 hover:bg-light-brown duration-500 hover:text-black  text-white border border-solid hover:border-[#eee4db] border-[#eee4db] py-4 px-[33px] inline-block">
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
