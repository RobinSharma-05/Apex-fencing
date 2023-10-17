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
    <div>
      <div className="bg-light-black py-2">
        <div className="container mx-auto">
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

      <div className="bg-hero-section-img min-h-screen bg-no-repeat bg-center bg-cover">
        <div>
          <Header />
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col justify-center ">
            <h1 className="text-[35px] sm:text-[50px] md:text-6xl  text-white max-w-2xl md:leading-[110%] font-Jakarta font-bold">
              <span className="mb-0 font-light">Open Up to</span> Experience
              More
            </h1>
            <p className="font-Jakarta font-medium py-[20px] md:mt-8 md:mb-[51px] text-xl text-white max-w-[400px]">
              American-crafted railing, fencing and lighting for retreat-style
              living.
            </p>
            <div className="md:flex gap-8 pb-[40px] md:pb-44">
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
    </div>
  );
};

export default HeroSection;