import React from "react";
import home_1 from "../assets/images/webp/home-1.webp";
import home_2 from "../assets/images/webp/home-2.webp";
import home_3 from "../assets/images/webp/home-3.webp";
const Blog = () => {
  return (
    <div
      className="xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0  sm:pb-[97px] py-[50px] sm:pt-[128px]"
      id="section_5"
    >
      <h3 className=" font-Jakarta font-medium text-[40px] lg:text-5xl dark-black ">Blog</h3>
      <p className="font-normal text-xs sm:text-lg text-black font-Jakarta max-w-[726px] mt-5">
        Stay updated with industry trends, product highlights, and project
        inspiration by exploring our blog articles.
      </p>

      <div className="flex-col-2 flex-wrap xl:flex-nowrap flex justify-center xl:justify-between gap-5 pt-6 sm:pt-12 md:pt-[76px]">
        <div className="max-w-[300px] xl:max-w-[500px] w-[100%] sm:mt-5 md:mt-0 cursor-pointer bg-light-brown border-b-8 border-[#5A623D] img_hover">
          <div className="overflow-hidden">
            <img className="w-full" src={home_1} alt="home" />
          </div>
          <h4 className="text-black font-Jakarta font-medium text-[17px] md:text-[23px] 2xl:text-6 px-9 mt-5 sm:mt-[38px] mb-5 sm:mb-16 leading-[140%]">
            4 Ways to Handle Your Deck’s Support Posts
          </h4>
          <p className="text-black font-Jakarta font-medium text-xm sm:text-xs mb-5 sm:mb-7 px-9">
            continue reading{" "}
            <span className="three_boxarrow inline-block">&gt;</span>
          </p>
        </div>

        <div className="max-w-[300px] xl:max-w-[500px] w-[100%] sm:mt-5 md:mt-0 cursor-pointer bg-light-brown border-b-8 border-[#695978] img_hover">
          <div className="overflow-hidden">
            <img className="w-full" src={home_2} alt="home" />
          </div>
          <h4 className="text-black font-Jakarta font-medium text-[17px] md:text-[23px] 2xl:text-6  px-9 mt-5 sm:mt-[38px] mb-5 sm:mb-16 leading-[140%]">
            3 Ways to Minimize the Posts in Your Railing System
          </h4>
          <p className="text-black font-Jakarta font-medium text-xm sm:text-xs mb-5 sm:mb-7 px-9">
            continue reading{" "}
            <span className="three_boxarrow inline-block">&gt;</span>
          </p>
        </div>

        <div className="max-w-[300px] xl:max-w-[500px] w-[100%] col-span-2 sm:mt-5 md:mt-0 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
          <div className="overflow-hidden">
            <img className="w-full" src={home_3} alt="home" />
          </div>
          <h4 className="text-black font-Jakarta font-medium text-[17px] md:text-[23px] 2xl:text-6 px-9 mt-5 sm:mt-[38px] mb-5 sm:mb-16 leading-[140%]">
            7 Safety Issues to Check on Your Deck
          </h4>
          <p className="text-black font-Jakarta font-medium text-xm sm:text-xs mb-5 sm:mb-7 px-9">
            continue reading{" "}
            <span className="three_boxarrow inline-block">&gt;</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-7 sm:mt-[76px]">
        <div className=" hover:bg-light-brown duration-500 hover:text-black hover:border-2 bg-light-black text-white border-2 hover:border-black border-black py-[14px] px-[18px] sm:px-[33px] inline-block">
          <button className="font-Jakarta font-medium text-[13px] sm:text-xs mb-0">
            View All Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
