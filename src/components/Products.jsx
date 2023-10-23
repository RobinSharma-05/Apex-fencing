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
        <h2 className="text-5xl mb-[30px] md:mb-[74px] mt-[30px] md:mt-[120px] font-Jakarta font-medium">
          Our Products
        </h2>
        <div className="flex justify-center items-center flex-wrap lg:grid  lg:grid-cols-5 gap-5 w-full">
          <div className="relative max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="w-full img_hover"
                src={aluminum_railing}
                alt="aluminum_railing"
              />
              <div className="content-details">
                <h4 className="absolute bottom-[22px] text-2xl font-Jakarta font-medium text-white max-w-[186px] text-center flex mx-auto transform_20">
                  Aluminum Railing
                </h4>
              </div>
            </div>
          </div>
          <div className="relative max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="w-full img_hover"
                src={horizontal_cable_railing}
                alt="horizontal_railing"
              />

              <div className="content-details_3">
                <h4 className="max-w-[150px] text-center flex mx-auto absolute bottom-[22px] text-2xl  font-Jakarta font-medium text-white transform_40">
                  Horizontal Cable Railing
                </h4>
              </div>
            </div>
          </div>
          <div className="relative max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="w-full img_hover"
                src={vertical_cable_railing}
                alt="vertical_cable_railing"
              />
              <div className="content-details_3">
                <h4 className="max-w-[160px] text-center flex mx-auto absolute bottom-[22px] text-2xl  font-Jakarta font-medium text-white transform_40">
                  Vertical Cable Railing
                </h4>
              </div>
            </div>
          </div>
          <div className="relative max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img
                className="w-full img_hover"
                src={aluminum_fencing}
                alt="aluminum_fencing"
              />

              <div className="content-details_3">
                <h4 className="max-w-[150px] text-center flex mx-auto absolute bottom-[22px] text-2xl  font-Jakarta font-medium text-white transform_40">
                  Aluminum Fencing
                </h4>
              </div>
            </div>
          </div>
          <div className="relative max-w-[290px]">
            <div className="content">
              <div className="content-overlay"></div>
              <img className="w-full img_hover" src={lighting} alt="lighting" />
              <div className="content-details_2">
                <h4 className="max-w-[150px] text-center flex mx-auto absolute bottom-[58px] text-2xl  font-Jakarta font-medium text-white">
                  Lighting
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center flex-wrap lg:grid  lg:grid-cols-5 gap-5 w-full">
          <div className="max-w-[300px]">
            <img
              className="w-full h-full"
              src={aluminum_railing}
              alt="aluminum_railing"
            />
          </div>
          <div className="max-w-[300px]">
            <img
              className="w-full h-full"
              src={aluminum_railing}
              alt="aluminum_railing"
            />
          </div>
          <div className="max-w-[300px]">
            <img
              className="w-full h-full"
              src={aluminum_railing}
              alt="aluminum_railing"
            />
          </div>
          <div className="max-w-[300px]">
            <img
              className="w-full h-full"
              src={aluminum_railing}
              alt="aluminum_railing"
            />
          </div>
          <div className="max-w-[300px]">
            <img
              className="w-full h-full"
              src={aluminum_railing}
              alt="aluminum_railing"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
