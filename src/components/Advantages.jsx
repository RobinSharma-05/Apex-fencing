import React from "react";
import { Black_icon_1, Black_icon_2, Black_icon_3 } from "./Icons";

const Advantages = () => {
  return (
    <div className="bg-light-brown" id="section_3">
      <div className="xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0">
        <h2 className="text-[37px] md:text-5xl md:pt-[130px] pt-12 font-medium leading-[130%] font-Jakarta">
          Advantages That Make a Difference
        </h2>
        <div className="flex-col-2 flex-wrap xl:flex-nowrap flex justify-center xl:justify-between gap-10 mt-[60px] pb-28">
          <div className="flex justify-center md:justify-start mb-5 md:mb-5">
            <div className="max-w-[390px] cursor-pointer">
              <Black_icon_1 />
              <h3 className="text-2xl mt-10 font-medium font-Jakarta">
                Human-Centered Approach
              </h3>
              <p className="font-Jakarta text-xm font-normal mt-5 max-w-[350px]">
                We value people—our team, our partners, and especially you. Our
                personalized service ensures that you're not just purchasing a
                product; you're joining a community that cares.
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-5 md:mb-5">
            <div className="max-w-[390px] cursor-pointer">
              <Black_icon_2 />
              <h3 className="text-2xl mt-10 font-medium font-Jakarta">
                Customizable Luxury
              </h3>
              <p className="font-Jakarta text-xm font-normal mt-5 max-w-[350px]">
                Elevate your outdoor living space with a range of stylish
                designs. Whether you're a high-end homeowner or a builder, find
                the perfect match for your aesthetic and functional needs.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start xl:justify-end">
            <div className="max-w-[390px] cursor-pointer">
              <Black_icon_3 />
              <h3 className="text-2xl mt-10 font-medium font-Jakarta">
                Built for Longevity
              </h3>
              <p className="font-Jakarta text-xm font-normal mt-5 max-w-[350px]">
                Built to last and backed by PCI 4000 Certification, enjoy peace
                of mind and long-term value with designs that seamlessly blend
                durability and style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
