import React from "react";
import aluminum_railing from "../assets/images/webp/aluminum_railing.webp";
import horizontal_cable_railing from "../assets/images/webp/horizontal_cable_railing.webp";
import vertical_cable_railing from "../assets/images/webp/vertical_cable_railing.webp";
import aluminum_fencing from "../assets/images/webp/aluminum_fencing.webp";
import lighting from "../assets/images/webp/lighting.webp";

const Products = () => {
  return (
    <div id="section_2">
      <div className="container xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 pb-[40px] md:pb-36">
        <h2 className="text-[40px] sm:text-5xl mb-[30px] md:mb-[74px] mt-[30px] md:mt-[120px] font-Jakarta font-medium text-center lg:text-start">
          Our Products
        </h2>
        <div className="flex justify-center items-center flex-wrap lg:grid  lg:grid-cols-5 gap-5 w-full">
          <div className="relative w-full sm:will-change-auto sm:max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="w-full img_hover"
                src={aluminum_railing}
                alt="aluminiumrailing"
                height={356}
                width={223}
              />

              <div className="content-details">
                <h3 className="absolute bottom-[22px] text-2xl font-Jakarta font-medium text-white max-w-[186px] text-center flex mx-auto transform_20">
                  Aluminum Railing
                </h3>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:will-change-auto sm:max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="w-full img_hover"
                src={horizontal_cable_railing}
                alt="horizontal"
                height={356}
                width={223}
              />

              <div className="content-details_3">
                <h3 className="max-w-[150px] text-center flex mx-auto absolute bottom-[22px] text-2xl  font-Jakarta font-medium text-white transform_40">
                  Horizontal Cable Railing
                </h3>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:will-change-auto sm:max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="w-full img_hover"
                src={vertical_cable_railing}
                alt="verticalcable"
                height={356}
                width={223}
              />

              <div className="content-details_3">
                <h3 className="max-w-[160px] text-center flex mx-auto absolute bottom-[22px] text-2xl  font-Jakarta font-medium text-white transform_40">
                  Vertical Cable Railing
                </h3>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:will-change-auto sm:max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="w-full img_hover"
                src={aluminum_fencing}
                alt="aluminiumfencing"
                height={356}
                width={223}
              />

              <div className="content-details_3">
                <h3 className="max-w-[150px] text-center flex mx-auto absolute bottom-[22px] text-2xl  font-Jakarta font-medium text-white transform_40">
                  Aluminum Fencing
                </h3>
              </div>
            </div>
          </div>
          <div className="relative w-full sm:will-change-auto sm:max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="w-full img_hover"
                src={lighting}
                alt="lighting"
                height={356}
                width={223}
              />
              <div className="content-details_2">
                <h3 className="max-w-[150px] text-center flex mx-auto absolute bottom-[58px] text-2xl  font-Jakarta font-medium text-white">
                  Lighting
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
