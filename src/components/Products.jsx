import React from "react";
import aluminum_railing from "../assets/images/png/aluminum_railing.png";
import horizontal_cable_railing from "../assets/images/png/horizontal_cable_railing.png";
import vertical_cable_railing from "../assets/images/png/vertical_cable_railing.png";
import aluminum_fencing from "../assets/images/png/aluminum_fencing.png";
import lighting from "../assets/images/png/lighting.png";

const Products = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-5xl mb-[74px] mt-[120px]">Our Products</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-5">
          <div className="relative w-full">
            <div class="content">
              <a href="">
                <div class="content-overlay"></div>
                <img
                  className="w-full img_hover"
                  src={aluminum_railing}
                  alt=""
                />
                <div class="content-details">
                  <h4 className="absolute bottom-[22px] text-2xl text-white max-w-[186px] text-center flex mx-auto transform_20">
                    Aluminum Railing
                  </h4>
                </div>
              </a>
            </div>
          </div>
          <div className="relative w-full">
            <div class="content">
              <a href="">
                <div class="content-overlay"></div>
                <img
                  className="w-full img_hover"
                  src={horizontal_cable_railing}
                  alt=""
                />
                <div class="content-details_3">
                  <h4 className="max-w-[150px] text-center flex mx-auto absolute bottom-[22px] text-2xl text-white transform_40">
                    Horizontal Cable Railing
                  </h4>
                </div>
              </a>
            </div>
          </div>
          <div className="relative w-full">
            <div class="content">
              <a href="">
                <div class="content-overlay"></div>
                <img
                  className="w-full img_hover"
                  src={vertical_cable_railing}
                  alt=""
                />
                <div class="content-details_3">
                  <h4 className="max-w-[150px] text-center flex mx-auto absolute bottom-[22px] text-2xl text-white transform_40">
                    Vertical Cable Railing
                  </h4>
                </div>
              </a>
            </div>
          </div>
          <div className="relative w-full">
            <div class="content">
              <a href="">
                <div class="content-overlay"></div>
                <img
                  className="w-full img_hover"
                  src={aluminum_fencing}
                  alt=""
                />
                <div class="content-details_3">
                  <h4 className="max-w-[150px] text-center flex mx-auto absolute bottom-[22px] text-2xl text-white transform_40">
                    Aluminum Fencing
                  </h4>
                </div>
              </a>
            </div>
          </div>
          <div className="relative w-full">
            <div class="content">
              <a href="">
                <div class="content-overlay"></div>
                <img className="w-full img_hover" src={lighting} alt="" />
                <div class="content-details_2">
                  <h4 className="max-w-[150px] text-center flex mx-auto absolute bottom-[58px] text-2xl text-white">
                    Lighting
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
