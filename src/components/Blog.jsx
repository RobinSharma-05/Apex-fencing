import React from "react";
import home_1 from "../assets/images/webp/home-1.webp";
import home_2 from "../assets/images/webp/home-2.webp";
import home_3 from "../assets/images/webp/home-3.webp";
const Blog = () => {
  return (
    <div
      className="xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 mb-24"
      id="section_5"
    >
      <h3 className=" font-Jakarta font-medium text-5xl dark-black mt-32">
        Blog
      </h3>
      <p className="font-normal text-lg text-black font-Jakarta max-w-[726px] mt-5">
        Stay updated with industry trends, product highlights, and project
        inspiration by exploring our blog articles.
      </p>

      <div className="flex-col-2 flex-wrap xl:flex-nowrap flex justify-center xl:justify-between gap-5 pt-[76px]">
        <div className="flex justify-center">
          <div className="max-w-[500px] mt-5 md:mt-0 cursor-pointer bg-light-brown border-b-8 border-[#5A623D] img_hover">
            <div className="overflow-hidden">
              <img className="w-full" src={home_1} alt="home" />
            </div>
            <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16 leading-7">
              4 Ways to Handle Your Deck’s Support Posts
            </h4>
            <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
              continue reading{" "}
              <span className="three_boxarrow inline-block">&gt;</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-[500px] mt-5 md:mt-0 cursor-pointer bg-light-brown border-b-8 border-[#695978] img_hover">
            <div className="overflow-hidden">
              <img className="w-full" src={home_2} alt="home" />
            </div>
            <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16 leading-7">
              3 Ways to Minimize the Posts in Your Railing System
            </h4>
            <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
              continue reading{" "}
              <span className="three_boxarrow inline-block">&gt;</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-[500px] col-span-2 mt-5 md:mt-0 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
            <div className="overflow-hidden">
              <img className="w-full" src={home_3} alt="home" />
            </div>
            <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16 leading-7">
              7 Safety Issues to Check on Your Deck
            </h4>
            <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
              continue reading{" "}
              <span className="three_boxarrow inline-block">&gt;</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[76px]">
        <div className=" hover:bg-light-brown duration-500 hover:text-black hover:border-2 bg-light-black text-white border-2 hover:border-black border-black py-4 px-[33px] inline-block">
          <button className="font-Jakarta font-medium text-xs mb-0">
            View All Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
