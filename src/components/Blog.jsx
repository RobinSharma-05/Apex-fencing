import React from "react";
import home_1 from "../assets/images/webp/home-1.webp";
import home_2 from "../assets/images/webp/home-2.webp";
import home_3 from "../assets/images/webp/home-3.webp";
const Blog = () => {
  return (
    <div
      className="container mx-auto pt-[30px] sm:pt-[60px] md:pt-[114px]"
      id="section_5"
    >
      <h3 className=" font-Jakarta font-medium text-5xl dark-black ">Blog</h3>
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

      <div className="md:flex flex-col-2 flex-wrap justify-center md:justify-center gap-5 pt-[76px]">
        <div className="flex justify-center">
          <div className="max-w-[400px] mt-5 md:mt-0 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
            <div className="overflow-hidden">
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

        <div className="flex justify-center">
          <div className="max-w-[400px] mt-5 md:mt-0 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
            <div className="overflow-hidden">
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

        <div className="flex justify-center">
          <div className="max-w-[400px] mt-5 md:mt-0 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
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
          <h4 className="text-black font-Jakarta font-medium text-2xl px-9 mt-[38px] mb-16">
            7 Safety Issues to Check on Your Deck
          </h4>
          <p className="text-black font-Jakarta font-medium text-xs mb-7 px-9">
            continue reading{" "}
            <span className="three_boxarrow inline-block">&gt;</span>
          </p>
        </div>

        <div className="blog_card col-span-2   mt-5 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
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
    </div>
  );
};

export default Blog;
