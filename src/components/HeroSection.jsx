import React, { useState } from "react";
import { Logo, Search_icon } from "./Icons";
import logo from "../assets/images/png/logoo.png";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-light-black py-2">
        <div className="container mx-auto">
          <div className="flex justify-end">
            <p>
              <a
                href=""
                className="md:me-[30px] me-4 hover-line font-Jakarta font-medium text-xxs"
              >
                Dealer Portal
              </a>
            </p>
            <p>
              <a
                href=""
                className="md:me-[30px] me-4 hover-line font-Jakarta font-medium text-xxs"
              >
                Training
              </a>
            </p>
            <p>
              <a
                href=""
                className="md:me-[30px] me-4 hover-line font-Jakarta font-medium text-xxs"
              >
                Blog
              </a>
            </p>
            <p>
              <a
                href="tel:+1-888-704-7130"
                className="md:me-[30px] me-4 hover-line font-Jakarta font-medium text-xxs"
              >
                1-888-704-7130
              </a>
            </p>
            <a href="">
              <Search_icon />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-hero-section-img bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <div className="py-5">
            <div className="flex items-center justify-between">
              <div>
                <img className="w-1/4 cursor-pointer" src={logo} alt="" />
              </div>
              <label for="menuIcon" className="z-50">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type="checkbox" id="menuIcon" hidden className="d-none" />
              <ul className="flex items-center sm-screen ps-0">
                <li className="xl:me-[30px] mb-4 xl:mb-0">
                  <a
                    href="#section_2"
                    className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs"
                  >
                    Railing
                  </a>
                </li>
                <li className="xl:me-[30px] mb-4 xl:mb-0">
                  <a
                    href="#section_3"
                    className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs"
                  >
                    Fencing
                  </a>
                </li>
                <li className="xl:me-[30px] mb-4 xl:mb-0">
                  <a
                    href="#section_4"
                    className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs"
                  >
                    Lighting
                  </a>
                </li>
                <li className="xl:me-[30px] mb-4 xl:mb-0">
                  <a
                    href="#section_5"
                    className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs"
                  >
                    Inspiration
                  </a>
                </li>
                <li className="xl:me-[30px] mb-4 xl:mb-0">
                  <a
                    href="#section_6"
                    className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs"
                  >
                    Why Acme
                  </a>
                </li>
                <li className="xl:me-[30px] mb-4 xl:mb-0">
                  <a
                    href="#section_7"
                    className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs"
                  >
                    Resources
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="inline-block font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs bg-[#EEE4DB] py-5 px-[30px] border-[1px] text-[#32281F] hover:bg-[transparent] hover:text-[#EEE4DB] duration-500"
                  >
                    Where to Buy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h1 className="text-[35px] sm:text-[50px] md:text-6xl pt-[20px] sm:pt-[40px]  md:mt-[171px] text-white max-w-2xl md:leading-[110%] font-Jakarta font-bold">
            <span className="mb-0 font-light">Open Up to</span> Experience More
          </h1>
          <p className="font-Jakarta font-medium py-[20px] md:mt-8 md:mb-[51px] text-xl text-white max-w-[400px]">
            American-crafted railing, fencing and lighting for retreat-style
            living.
          </p>
          <div className="md:flex gap-5 pb-[40px] md:pb-44">
            <p className="mb-5 md:mb-0">
              <a
                href="#"
                className="font-Jakarta font-medium text-xm md:text-xs bg-[#EEE4DB] py-5 px-[30px] border-[1px] text-[#32281F] hover:bg-[transparent] hover:text-[#EEE4DB] duration-500 inline-block"
              >
                See Our Products
              </a>
            </p>
            <p>
              <a
                href="#"
                className="font-Jakarta font-medium text-xm md:text-xs bg-[transparent] py-5 px-[30px] border-[1px] text-[#FFFFFF] hover:bg-[#EEE4DB] hover:text-[#32281F] duration-500 inline-block"
              >
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
