import React from "react";
import home_1 from "../assets/images/webp/home-1.webp";
import home_2 from "../assets/images/webp/home-2.webp";
import home_3 from "../assets/images/webp/home-3.webp";
const Blog = () => {
  return (
    <div className="container mx-auto pt-[30px] sm:pt-[60px] md:pt-[114px]">
      <h3 className=" font-Jakarta font-medium text-5xl dark-black ">Blog</h3>
      <p className="font-normal text-lg text-black font-Jakarta max-w-[726px] mt-5">
        Stay updated with industry trends, product highlights, and project
        inspiration by exploring our blog articles.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="blog_card col-span-2  mt-5 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
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

        <div className="blog_card col-span-2  mt-5 cursor-pointer bg-light-brown border-b-8 border-[#aa6627] img_hover">
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
