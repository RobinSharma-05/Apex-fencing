import React from "react";
import logo from "../assets/images/webp/logo.webp";
import nadra from "../assets/images/webp/nadra.webp";
import superior from "../assets/images/webp/superior.webp";
import {
  Facebookicon,
  Instagramicon,
  Patrolicon,
  Tiktokicon,
  Youtubeicon,
} from "./Icons";

const MyFooter = () => {
  return (
    <div className="bg-light-brown">
      <div className="container mx-auto mt-24">
        <div className="md:flex items-center justify-between">
          <div className="flex justify-center">
            <img className="pt-24" src={logo} alt="logo" />
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-6 md:mt-24 mt-16">
              <div className="hover:translate-y-[-8px] duration-300">
                <Facebookicon />
              </div>
              <div className="hover:translate-y-[-8px] duration-300">
                <Instagramicon />
              </div>
              <div className="hover:translate-y-[-8px] duration-300">
                <Patrolicon />
              </div>
              <div className="hover:translate-y-[-8px] duration-300">
                <Tiktokicon />
              </div>
              <div className="hover:translate-y-[-8px] duration-300">
                <Youtubeicon />
              </div>
            </div>
          </div>
        </div>
        <div className=" xl:flex gap-32">
          <div className="md:flex gap-32">
            <div className="flex md:justify-start justify-center">
              <div className="flex sm:gap-28 gap-14">
                <div className="mt-12">
                  <h4 className="font-bold text-md font-Jakarta">Products</h4>
                  <div className="mt-5">
                    <p className="text-black cursor-pointer hover:text-[#5a623d~] font-Jakarta font-normal text-xm">
                      Aluminum Railing
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm">
                      Cable Railing
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm">
                      Aluminum Fencing
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm">
                      Lighting
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm">
                      Accessories
                    </p>
                  </div>
                </div>
                <div className="mt-12">
                  <h4 className="font-bold text-md font-Jakarta">
                    Where to Buy
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex md:justify-start justify-center">
              <div className="flex sm:gap-28 gap-14">
                <div className="mt-12">
                  <h4 className="font-bold text-md font-Jakarta">Resources</h4>
                  <div className="mt-5">
                    <p className="text-black font-Jakarta font-normal text-xm">
                      Dealer Portal
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm">
                      Designer Guide
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm">
                      Warranty
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm">
                      FAQ
                    </p>
                  </div>
                </div>
                <div className="mt-12">
                  <p className="text-black font-Jakarta font-normal text-xm">
                    Careers
                  </p>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm">
                      Press Releases
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:justify-start justify-center">
            <div className="flex sm:gap-28 gap-14">
              <div className="mt-12">
                <h4 className="font-bold text-md font-Jakarta">Training</h4>
              </div>
              <div className="mt-12">
                <h4 className="font-bold text-md font-Jakarta">Contact</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between pb-12 md:mt-6">
          <div className="flex justify-center items-end md:mt-0 mt-14">
            <p className="text-blck font-Jakarta font-semibold text-xm">
              © 2023 Apex Fencing & Railing. All rights reserved.
            </p>
          </div>
          <div className="flex items-end justify-center gap-[70px] md:mt-0 mt-12">
            <img className="h-[48px]" src={nadra} alt="nadra" />
            <img className="h-[75px]" src={superior} alt="superiso" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
