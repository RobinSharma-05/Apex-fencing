import React from "react";
import home_1 from "../assets/images/webp/home-1.webp";
import home_2 from "../assets/images/webp/home-2.webp";
import home_3 from "../assets/images/webp/home-3.webp";
const Blog = () => {
  return (
    <div className="container mx-auto">
      <h3 className=" font-Riviera font-medium text-5xl dark-black mt-14">
        Blog
      </h3>
      <p className="font-normal text-xl text-black font-Jakarta max-w-[726px] mt-5">
        Stay updated with industry trends, product highlights, and project
        inspiration by exploring our blog articles.
      </p>
      <div className="lg:flex gap-8 flex justify-center">
        <div className="sm:flex gap-8">
          <div className="flex justify-center">
            <div className="max-w-[381px] mt-[76px]  bg-light-brown border-b-8 border-[#5a623d]">
              <img className="w-full" src={home_1} alt="home" />
              <h4 className="text-black font-Riviera font-medium text-2xl px-9 mt-[38px] mb-16">
                4 Ways to Handle Your Deck’s Support Posts
              </h4>
              <p className="text-black font-Riviera font-medium text-base mb-7 px-9">
                continue reading &gt;
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-[381px] mt-[76px] bg-light-brown border-b-8 border-[#695978]">
              <img className="w-full" src={home_2} alt="home" />
              <h4 className="text-black font-Riviera font-medium text-2xl px-9 mt-[38px] mb-16">
                4 Ways to Handle Your Deck’s Support Posts
              </h4>
              <p className="text-black font-Riviera font-medium text-base mb-7 px-9">
                continue reading &gt;
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[381px] mt-[76px] bg-light-brown border-b-8 border-[#aa6627]">
            <img className="w-full" src={home_3} alt="home" />
            <h4 className="text-black font-Riviera font-medium text-2xl px-9 mt-[38px] mb-16">
              4 Ways to Handle Your Deck’s Support Posts
            </h4>
            <p className="text-black font-Riviera font-medium text-base mb-7 px-9">
              continue reading &gt;
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" cursor-pointer hover:bg-light-brown hover:text-black hover:border-2 border-2 hover:border-black border-black text-white bg-light-black py-[19px] px-[42px] inline-block mt-[76px]">
          <button className="font-Jakarta font-medium text-base  mb-1">
            View All Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
