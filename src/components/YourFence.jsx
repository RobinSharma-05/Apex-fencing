import React from "react";
import garden from "../assets/images/webp/garden.webp";
const YourFence = () => {
  return (
    <div>
      <div className="xl:bg-[#5a623d]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className=" bg-[#5a623d] order-2 lg:order-1">
            <div className="lg:max-w-[570px] pt-[40px] sm:pb-[95px] pb-[40px] sm:pt-[89px] xl:ps-[130px] lg:ps-20 lg:pe-[11px] px-5">
              <div className="flex justify-start">
                <h3 className="text-white  font-Jakarta font-medium text-4xl">
                  Visualize Your Fence
                </h3>
              </div>
              <div className="flex text-start justify-start my-5 ">
                <p className="font-Jakarta text-white max-w-[470px] font-normal text-md ">
                  Use our Fence Builder visualizer to preview how our products
                  will transform your outdoor living area.
                </p>
              </div>
              <div className="flex justify-start">
                <div className="mt-5 hover:bg-light-brown duration-500 hover:text-black hover:border-2 text-white border-2 hover:border-black border-[#eee4db] py-4 px-[33px] inline-block">
                  <button className="font-Jakarta font-medium text-xs mb-1">
                    Start Designing
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img className="w-full h-full" src={garden} alt="garden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFence;
