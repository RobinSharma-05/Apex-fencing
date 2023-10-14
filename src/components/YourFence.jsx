import React from "react";
import garden from "../assets/images/webp/garden.webp";
const YourFence = () => {
  return (
    <div className="container mx-auto mt-14">
      <div className="xl:bg-[#5a623d]">
        <div className="lg:flex justify-between">
          <div className=" bg-[#5a623d]">
            <div className="lg:max-w-[570px] pb-[95px] pt-[89px] xl:ps-[130px] lg:ps-20 lg:pe-[11px]">
              <div className="flex justify-center lg:justify-start">
                <h3 className="text-white  font-Jakarta font-medium text-4xl">
                  Visualize Your Fence
                </h3>
              </div>
              <div className="flex justify-center text-center lg:text-start lg:justify-start mt-5">
                <p className="font-Jakarta text-white max-w-[470px] font-normal text-md">
                  Use our Fence Builder visualizer to preview how our products
                  will transform your outdoor living area.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <div className="mt-5 hover:bg-light-brown duration-500 hover:text-black hover:border-2 text-white border-2 hover:border-black border-[#eee4db] py-4 px-[33px] inline-block">
                  <button className="font-Jakarta font-medium text-xs mb-1">
                    Start Designing
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="w-full h-full" src={garden} alt="garden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFence;
