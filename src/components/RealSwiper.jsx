import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Real_left_arrow, Real_right_arrow } from "./Icons";
import emily from "../assets/images/webp/Real_Emily.webp";
import Jack from "../assets/images/webp/Real_Jack.webp";
import Jack2 from "../assets/images/webp/Real_Jack2.webp";
// import "./styles.css";
const RealSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={2.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="ps- md:ps-12 border-orange border-e-[1px]">
            <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-6 ">
              <p className="font-Jakarta text-3xl font-normal text-black leading-[150%] max-w-[469px]">
                "The quality of these railings{" "}
                <span className="text-orange">exceeded </span>all my
                expectations. Now, my outdoor space feels like a luxurious
                retreat. Highly recommend!"
              </p>
              <div className="flex items-center gap-8 pt-[86px]">
                <div>
                  <img className="w-[100%]" src={emily} alt="emily" />
                </div>
                <div>
                  <h2 className="font-Jakarta text-orange text-2xl font-bold ">
                    Emily
                  </h2>
                  <p className="font-Jakarta text-black font-normal text-md">
                    Homeowner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ps- md:ps-12 border-orange border-e-[1px]">
            <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-5 ">
              <p className="font-Jakarta text-3xl font-normal text-black leading-[150%] max-w-[469px]">
                "Working with these products has
                <span className="text-orange"> elevated </span> the quality of
                my projects. My clients are consistently impressed, making my
                job so much easier."
              </p>
              <div className="flex items-center gap-8 pt-[86px]">
                <div>
                  <img className="w-[100%]" src={Jack} alt="Jack" />
                </div>
                <div>
                  <h2 className="font-Jakarta text-orange text-2xl font-bold ">
                    Jack
                  </h2>
                  <p className="font-Jakarta text-black font-normal text-md">
                    Custom Outdoor Living Designer
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="ps- md:ps-12 border-orange border-e-[1px]">
            <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-5 ">
              <p className="font-Jakarta text-3xl font-normal text-black leading-[150%] max-w-[459px]">
                "Outstanding products matched by
                <span className="text-orange"> excellent </span>customer
                service. As a supplier, it's a relief to work with a company
                that sets high standards."
              </p>
              <div className="flex items-center gap-8 pt-[86px]">
                <div>
                  <img className="w-[100%]" src={Jack2} alt="Jack2" />
                </div>
                <div>
                  <h2 className="font-Jakarta text-orange text-2xl font-bold ">
                    Robert
                  </h2>
                  <p className="font-Jakarta text-black font-normal text-md">
                    Building Materials Distributor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ps- md:ps-12 border-orange border-e-[1px]">
            <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-6 ">
              <p className="font-Jakarta text-3xl font-normal text-black leading-[150%] max-w-[469px]">
                "The quality of these railings{" "}
                <span className="text-orange">exceeded </span>all my
                expectations. Now, my outdoor space feels like a luxurious
                retreat. Highly recommend!"
              </p>
              <div className="flex items-center gap-8 pt-[86px]">
                <div>
                  <img className="w-full" src={emily} alt="emily" />
                </div>
                <div>
                  <h2 className="font-Jakarta text-orange text-2xl font-bold ">
                    Emily
                  </h2>
                  <p className="font-Jakarta text-black font-normal text-md">
                    Homeowner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ps- md:ps-12 border-orange border-e-[1px]">
            <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-5 ">
              <p className="font-Jakarta text-3xl font-normal text-black leading-[150%] max-w-[469px]">
                "Working with these products has
                <span className="text-orange"> elevated </span> the quality of
                my projects. My clients are consistently impressed, making my
                job so much easier."
              </p>
              <div className="flex items-center gap-8 pt-[86px]">
                <div>
                  <img className="w-full" src={Jack} alt="Jack" />
                </div>
                <div>
                  <h2 className="font-Jakarta text-orange text-2xl font-bold ">
                    Jack
                  </h2>
                  <p className="font-Jakarta text-black font-normal text-md">
                    Custom Outdoor Living Designer
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="ps- md:ps-12 border-orange border-e-[1px]">
            <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-5 ">
              <p className="font-Jakarta text-3xl font-normal text-black leading-[150%] max-w-[459px]">
                "Outstanding products matched by
                <span className="text-orange"> excellent </span>customer
                service. As a supplier, it's a relief to work with a company
                that sets high standards."
              </p>
              <div className="flex items-center gap-8 pt-[86px]">
                <div>
                  <img className="w-full" src={Jack2} alt="Jack2" />
                </div>
                <div>
                  <h2 className="font-Jakarta text-orange text-2xl font-bold ">
                    Robert
                  </h2>
                  <p className="font-Jakarta text-black font-normal text-md">
                    Building Materials Distributor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default RealSwiper;
