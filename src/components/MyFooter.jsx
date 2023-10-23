import React from "react";
import logo from "../assets/images/png/logo.png";
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
    <div className="bg-light-brown" id="section_7">
      <div className="container xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 pt-[50px] sm:pt-24">
        <div className="md:flex items-center justify-between">
          <div className="flex sm:justify-start justify-center">
            <img className=" w-1/3 sm:w-1/4" src={logo} alt="logo" />
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-6 md:mt-0 mt-[30px]">
              <div className="hover:translate-y-[-8px] duration-300">
                <a href="https://www.facebook.com/" target="blank">
                  <Facebookicon />
                </a>
              </div>
              <div className="hover:translate-y-[-8px] duration-300">
                <a href="https://www.instagram.com/" target="blank">
                  <Instagramicon />
                </a>
              </div>
              <div className="hover:translate-y-[-8px] duration-300">
                <a href="https://www.twitter.com/" target="blank">
                  <Patrolicon />
                </a>
              </div>
              <div className="hover:translate-y-[-8px] duration-300">
                <a href="https://www.telegram.com/" target="blank">
                  <Tiktokicon />
                </a>
              </div>
              <div className="hover:translate-y-[-8px] duration-300">
                <a href="https://www.youtube.com/" target="blank">
                  <Youtubeicon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" xl:flex gap-32">
          <div className="md:flex gap-32">
            <div className="flex md:justify-start">
              <div className="flex sm:gap-28 gap-14">
                <div className="mt-7 sm:mt-12">
                  <h4 className="font-bold text-md font-Jakarta">Products</h4>
                  <div className="mt-3 sm:mt-5">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        {" "}
                        Aluminum Railing
                      </a>
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        {" "}
                        Cable Railing
                      </a>
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        {" "}
                        Aluminum Fencing
                      </a>
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        Lighting
                      </a>
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        {" "}
                        Accessories
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-7 sm:mt-12">
                  <h4 className="font-bold text-md font-Jakarta">
                    <a href="" className="hover_line2">
                      {" "}
                      Where to Buy
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex md:justify-start">
              <div className="flex sm:gap-28 gap-14">
                <div className="mt-7 sm:mt-12">
                  <h4 className="font-bold text-md font-Jakarta">Resources</h4>
                  <div className="mt-3 sm:mt-5">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        {" "}
                        Dealer Portal
                      </a>
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        {" "}
                        Designer Guide
                      </a>
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        {" "}
                        Warranty
                      </a>
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        FAQs
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-8 sm:mt-12">
                  <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                    <a href="" className="hover_line2">
                      Careers
                    </a>
                  </p>
                  <div className="mt-2">
                    <p className="text-black font-Jakarta font-normal text-xm cursor-pointer leading-6">
                      <a href="" className="hover_line2">
                        Press Releases
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:justify-start">
            <div className="flex sm:gap-28 gap-14">
              <div className="mt-7 sm:mt-12">
                <h4 className="font-bold text-md font-Jakarta">Training</h4>
              </div>
              <div className="mt-7 sm:mt-12">
                <h4 className="font-bold text-md font-Jakarta">Contact</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between pb-6 sm:pb-12 md:mt-6">
          <div className="flex justify-center items-end md:mt-0 mt-7 sm:mt-14">
            <p className="text-block font-Jakarta font-semibold text-xm cursor-pointer leading-6">
             © 2023 Apex Fencing & Railing. All rights reserved.
            </p>
          </div>
          <div className="flex items-end justify-center gap-[70px] md:mt-0 mt-4 sm:mt-12">
            <img className="h-[48px]" src={nadra} alt="nadra" />
            <img className="h-[75px]" src={superior} alt="superiso" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
