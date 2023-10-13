import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Logo, Search_icon } from "./Icons";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-light-black py-2">
        <div className="container mx-auto">
          <div className="flex justify-end">
            <p>
              <a href="" className="text-white me-[30px]">
                Dealer Portal
              </a>
            </p>
            <p>
              <a href="" className="text-white me-[30px]">
                Training
              </a>
            </p>
            <p>
              <a href="" className="text-white me-[30px]">
                Blog
              </a>
            </p>
            <p>
              <a href="" className="text-white me-[30px]">
                1-888-704-7130
              </a>
            </p>
            <Search_icon />
          </div>
        </div>
      </div>

      <div className="bg-hero-section-img bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <div className="py-5">
            <div className="flex items-center justify-between">
              <a href="">
                <Logo />
              </a>
              <label for="menuIcon" className="z-50">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type="checkbox" id="menuIcon" hidden className="d-none" />
              <ul className="flex items-center sm-screen">
                <li className="me-[30px]">
                  <a href="" className="text-white">
                    Railing
                  </a>
                </li>
                <li className="me-[30px]">
                  <a href="" className="text-white">
                    Fencing
                  </a>
                </li>
                <li className="me-[30px]">
                  <a href="" className="text-white">
                    Lighting
                  </a>
                </li>
                <li className="me-[30px]">
                  <a href="" className="text-white">
                    Inspiration
                  </a>
                </li>
                <li className="me-[30px]">
                  <a href="" className="text-white">
                    Why Acme
                  </a>
                </li>
                <li className="me-[30px]">
                  <a href="" className="text-white">
                    Resources
                  </a>
                </li>
                <li className="">
                  <a href="" className="btn_1">
                    Where to Buy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h1 className="text-6xl mt-[171px] text-white max-w-2xl leading-[80px]">
            <span className="mb-0">Open Up to</span> Experience More
          </h1>
          <p className=" mt-8 mb-[29px] text-xl text-white max-w-[400px]">
            American-crafted railing, fencing and lighting for retreat-style
            living.
          </p>
          <div className="flex gap-5 pb-44">
            <p>
              <a href="" className="btn_1 inline-block">
                See Our Products
              </a>
            </p>
            <p>
              <a href="" className="btn_2 inline-block">
                Visualize Your Railing
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
