import React from "react";
import home_1 from "../assets/images/webp/home-1.webp";
import home_2 from "../assets/images/webp/home-2.webp";
import home_3 from "../assets/images/webp/home-3.webp";
const Blog = () => {
  return (
    <div className="container mx-auto">
      <h3 className=" font-Jakarta font-medium text-5xl dark-black mt-14">
        Blog
      </h3>
      <p className="font-normal text-lg text-black font-Jakarta max-w-[726px] mt-5">
        Stay updated with industry trends, product highlights, and project
        inspiration by exploring our blog articles.
      </p>
      <div className="lg:flex gap-4">
        {/* <div className="sm:flex gap-4">
          <div className="flex justify-center img_hover">
            <div className="max-w-[438px] mt-5 cursor-pointer overflow-hidden bg-light-brown border-b-8 border-[#5a623d]">
              <div className="overflow-hidden max-h-[343px]">
                <img className="w-full" src={home_1} alt="home" />
              </div>
              <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16">
                4 Ways to Handle Your Deck’s Support Posts
              </h4>
              <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
                continue reading{" "}
                <span className="three_boxarrow inline-block">&gt;</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center img_hover">
            <div className="max-w-[438px] mt-5 cursor-pointer overflow-hidden bg-light-brown border-b-8 border-[#695978]">
              <div className="overflow-hidden max-h-[343px]">
                <img className="w-full" src={home_2} alt="home" />
              </div>
              <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16">
                3 Ways to Minimize the Posts in Your Railing System
              </h4>
              <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
                continue reading{" "}
                <span className="three_boxarrow inline-block">&gt;</span>
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="flex justify-center img_hover">
          <div className="max-w-[438px] mt-5 cursor-pointer overflow-hidden bg-light-brown border-b-8 border-[#aa6627]">
            <div className="overflow-hidden max-h-[343px]">
              <img className="w-full" src={home_3} alt="home" />
            </div>
            <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16">
              7 Safety Issues to Check on Your Deck
            </h4>
            <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
              continue reading{" "}
              <span className="three_boxarrow inline-block">&gt;</span>
            </p>
          </div>
        </div> */}
      </div>

      <div className="flex flex-wrap justify-between gap-5">
        <div className="w-[380px] xl:max-w-[100%] max-w-[100%] mt-5 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
          <div className="overflow-hidden">
            <img className="w-full" src={home_3} alt="home" />
          </div>
          <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16">
            7 Safety Issues to Check on Your Deck
          </h4>
          <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
            continue reading{" "}
            <span className="three_boxarrow inline-block">&gt;</span>
          </p>
        </div>

        <div className="w-[380px] xl:max-w-[100%] max-w-[100%] mt-5 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
          <div className="overflow-hidden">
            <img className="w-full" src={home_3} alt="home" />
          </div>
          <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16">
            7 Safety Issues to Check on Your Deck
          </h4>
          <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
            continue reading{" "}
            <span className="three_boxarrow inline-block">&gt;</span>
          </p>
        </div>

        <div className="w-[380px] xl:max-w-[100%] max-w-[100%] mt-5 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
          <div className="overflow-hidden">
            <img className="w-full" src={home_3} alt="home" />
          </div>
          <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16">
            7 Safety Issues to Check on Your Deck
          </h4>
          <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
            continue reading{" "}
            <span className="three_boxarrow inline-block">&gt;</span>
          </p>
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
