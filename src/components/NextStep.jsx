import React from "react";
import garden from "../assets/images/png/section_fourth.png";
const YourFence = () => {
  return (
    <div className="">
      <div className="bg-dark-purple">
        <div className="lg:flex xl:gap-7">
          <div>
            <img className="w-full h-full" src={garden} alt="garden" />
          </div>
          <div className=" bg-dark-purple">
            <div className="lg:max-w-[570px] pb-[95px] pt-[89px] lg:ps-20 lg:pe-[11px] px-5">
              <div className="flex justify-center lg:justify-start">
                <h3 className="text-white font-Riviera font-medium text-[34px]">
                  Ready for the Next Step?
                </h3>
              </div>
              <div className="flex justify-center text-center lg:text-start lg:justify-start mt-5">
                <p className="font-Jakarta text-white max-w-[470px] font-normal text-lg">
                  Find a nearby dealer to kickstart your outdoor transformation.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <div className="hover:bg-light-brown mt-[58px] hover:text-black hover:border-2 text-white border-2 hover:border-black border-white py-4 px-[33px] inline-block">
                  <button className="font-Jakarta font-medium text-base  mb-1">
                    Locate a Dealer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFence;
