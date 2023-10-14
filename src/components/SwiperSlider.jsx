import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import emily from "../assets/images/png/Real_Emily.png";
// import CustomSliderControls from "./CustomSliderControls";

// import "swiper/swiper-bundle.min.css";

const SwiperSlider = () => {
  // const navigationPrevRef = React.useRef(null);
  // const navigationNextRef = React.useRef(null);

  return (
    <>
      <div className="py-4 bg-pink">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          scrollbar={{ draggable: false }}
          dots={true}
          // navigation={{
          //   prevEl: navigationPrevRef.current,
          //   nextEl: navigationNextRef.current,
          // }}
        >
          <SwiperSlide className="bg-pink-400">
            <div className="ps- md:ps-12 border-orange border-e-[1px]">
              <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-6 ">
                <p className="font-Riviera text-3xl font-normal text-black leading-[150%] max-w-[469px]">
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
                    <h2 className="font-Riviera text-orange text-2xl font-bold ">
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
          <SwiperSlide className="bg-pink-400">
            <div className="ps- md:ps-12 border-orange border-e-[1px]">
              <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-6 ">
                <p className="font-Riviera text-3xl font-normal text-black leading-[150%] max-w-[469px]">
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
                    <h2 className="font-Riviera text-orange text-2xl font-bold ">
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
          <SwiperSlide className="bg-pink-400">
            <div className="ps- md:ps-12 border-orange border-e-[1px]">
              <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-6 ">
                <p className="font-Riviera text-3xl font-normal text-black leading-[150%] max-w-[469px]">
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
                    <h2 className="font-Riviera text-orange text-2xl font-bold ">
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
          <SwiperSlide className="bg-pink-400">
            <div className="ps- md:ps-12 border-orange border-e-[1px]">
              <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-6 ">
                <p className="font-Riviera text-3xl font-normal text-black leading-[150%] max-w-[469px]">
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
                    <h2 className="font-Riviera text-orange text-2xl font-bold ">
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
          <SwiperSlide className="bg-pink-400">
            <div className="ps- md:ps-12 border-orange border-e-[1px]">
              <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-6 ">
                <p className="font-Riviera text-3xl font-normal text-black leading-[150%] max-w-[469px]">
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
                    <h2 className="font-Riviera text-orange text-2xl font-bold ">
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
          <SwiperSlide className="bg-pink-400">
            <div className="ps- md:ps-12 border-orange border-e-[1px]">
              <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-6 ">
                <p className="font-Riviera text-3xl font-normal text-black leading-[150%] max-w-[469px]">
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
                    <h2 className="font-Riviera text-orange text-2xl font-bold ">
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
          <SwiperSlide className="bg-pink-400">
            <div className="ps- md:ps-12 border-orange border-e-[1px]">
              <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-6 ">
                <p className="font-Riviera text-3xl font-normal text-black leading-[150%] max-w-[469px]">
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
                    <h2 className="font-Riviera text-orange text-2xl font-bold ">
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

          {/* <CustomSliderControls
            onClick={() => navigationPrevRef.current.click()}
          />
          <CustomSliderControls
            onClick={() => navigationNextRef.current.click()}
            isNext
          /> */}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSlider;
