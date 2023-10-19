import React, { useState } from "react";
import { Logo, Search_icon } from "./Icons";
import logo from "../assets/images/png/logoo.png";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import { Link } from "react-router-dom";

import Header from "./Header";

const HeroSection = () => {
  return (
    <div className="hero_section">
      <div className="bg-light-black py-2">
        <div className="container xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0">
          <div className="flex justify-end">
            <p>
              <a
                href="#section_7"
                className="md:me-[30px] me-4 hover-line font-Jakarta font-medium text-xxs"
              >
                Dealer Portal
              </a>
            </p>
            <p>
              <a
                href="#section_6"
                className="md:me-[30px] me-4 hover-line font-Jakarta font-medium text-xxs"
              >
                Training
              </a>
            </p>
            <p>
              <a
                href="#section_5"
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
            <a href="https://www.google.com" target="_blank">
              <Search_icon />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-hero-section-img   bg-no-repeat bg-center bg-cover">
        <div>
          <Header />
        </div>
        <div className="container xl:w-[1180px] 2xl:w-[1320px]  px-3 sm:px-5 xl:px-0 mx-auto hero-content flex items-start justify-center flex-col">
          <div className="flex flex-col justify-center xl:pt-[70px] xl:pb-[130px] ">
            <h1 className="text-[37px] sm:text-[61px]  lg:text-6xl  text-white max-w-2xl leading-[160%] lg:leading-[120%] 2xl:leading-[130%] font-Jakarta font-bold">
              <span className="mb-0 font-light ">Open Up to</span> Experience
              More
            </h1>
            <p className="font-Jakarta font-medium py-[20px] md:mt-8 mb-[51px] text-[16px] sm:text-md md:text-xl leading-[160%] md:leading-[140%] text-white max-w-[400px]">
              American-crafted railing, fencing and lighting for retreat-style
              living.
            </p>
            <div className="flex flex-row gap-4 sm:gap-8  ">
              <p className="mb-5 md:mb-0">
                <a
                  href="#"
                  className="font-Jakarta font-medium text-[13px] sm:text-xm md:text-xs bg-[#EEE4DB] py-4 sm:py-5 px-4 sm:px-[30px] border-[1px] text-[#32281F] hover:bg-[transparent]  hover:text-[#EEE4DB] duration-500 inline-block"
                >
                  See Our Products
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="font-Jakarta font-medium text-[13px] sm:text-xm md:text-xs bg-[transparent]  py-4 sm:py-5 px-4 sm:px-[30px] border-[1px] text-[#FFFFFF] hover:bg-[#EEE4DB] hover:text-[#32281F] duration-500 inline-block"
                >
                  Visualize Your Railing
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
