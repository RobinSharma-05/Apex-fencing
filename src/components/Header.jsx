import React, { useState } from "react";
import logo from "../assets/images/png/logoo.png";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";

const Header = () => {
  const [nav, setNav] = useState(true);

  function shownav() {
    setNav(false);
    document.body.classList.add("overflow-hidden");
  }
  function hidenav() {
    setNav(true);
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="container xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0">
        <div className="py-4 sm:py-10">
          <div className="flex items-center justify-between">
            <div className="w-10/12 sm:w-1/3">
              <img
                className="w-[100px] sm:w-[157px] cursor-pointer"
                src={logo}
                alt="logo"
              />
            </div>
            <label htmlFor="menuIcon" className="z-50">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul
              className={
                nav
                  ? "flex nav_bar mb-0 ps-0 items-center"
                  : "ps-0 flex nav_bar items-center show mb-0 gap-4"
              }
            >
              <li
                onClick={() => {
                  setNav(true);
                }}
                className="xl:me-[30px] mb-4 xl:mb-0"
              >
                <a
                  href="#section_2"
                  className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  Railing
                </a>
              </li>
              <li
                onClick={() => {
                  setNav(true);
                }}
                className="xl:me-[30px] mb-4 xl:mb-0"
              >
                <a
                  href="#section_3"
                  className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  Fencing
                </a>
              </li>
              <li
                onClick={() => {
                  setNav(true);
                }}
                className="xl:me-[30px] mb-4 xl:mb-0"
              >
                <a
                  href="#section_4"
                  className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  Lighting
                </a>
              </li>
              <li
                onClick={() => {
                  setNav(true);
                }}
                className="xl:me-[30px] mb-4 xl:mb-0"
              >
                <a
                  href="#section_5"
                  className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  Inspiration
                </a>
              </li>
              <li
                onClick={() => {
                  setNav(true);
                }}
                className="xl:me-[30px] mb-4 xl:mb-0"
              >
                <a
                  href="#section_6"
                  className="hover-line whitespace-nowrap font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  Why Acme
                </a>
              </li>
              <li
                onClick={() => {
                  setNav(true);
                }}
                className="xl:me-[30px] mb-4 xl:mb-0"
              >
                <a
                  href="#section_7"
                  className="hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  Resources
                </a>
              </li>
              <li
                onClick={() => {
                  setNav(true);
                }}
              >
                <a
                  href="#"
                  className="inline-block font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs bg-[#EEE4DB] py-4 sm:py-[19px] px-4 sm:px-[29px] border-[1px] text-[#32281F] hover:bg-[transparent] hover:text-[#EEE4DB] duration-500"
                >
                  Where to Buy
                </a>
              </li>
            </ul>
            <div
              className="position-relative z-3 xl:hidden cross_btn z_100"
              onClick={nav ? shownav : hidenav}
            >
              {" "}
              {nav ? (
                <Icon icon={menu} size={45} className="icons_color" />
              ) : (
                <Icon icon={x} size={45} className="icons_color2" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
