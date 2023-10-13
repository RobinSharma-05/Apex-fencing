import React from "react";
import Slider from "react-slick";
import { Real_left_arrow, Real_right_arrow } from "./Icons";
import emily from "../assets/images/png/Real_Emily.png";
import Jack from "../assets/images/png/Real_Jack.png";
import Jack2 from "../assets/images/png/Real_Jack2.png";
const Real5 = () => {
  const slider = React.useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    dots: false,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-light-grey2 py-[50px] overflow-x-hidden">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
          <h2 className="font-Riviera text-5xl font-medium text-light-blue">
            Real Experiences. Real People.
          </h2>
          <div className="flex gap-5">
            <div
              onClick={() => slider?.current?.slickPrev()}
              className="w-[50px] h-[50px] bg-[#d3d3d5] rounded-[50%] border-[1px] border-[transparent] hover:border-[black] border-solid flex justify-center items-center cursor-pointer real_arrow ease-in-out duration-200 hover:bg-light-brown"
            >
              <Real_left_arrow />
            </div>
            <div
              onClick={() => slider?.current?.slickNext()}
              className="w-[50px] h-[50px] bg-light-black rounded-[50%] border-[1px] border-[transparent] hover:border-[black] border-solid flex justify-center items-center cursor-pointer real_arrow hover:bg-light-brown"
            >
              <Real_right_arrow />
            </div>
          </div>
        </div>

        <Slider
          ref={slider}
          {...settings}
          className="md:py-10 py-5 md:my-10 slider"
        >
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
          <div className="ps- md:ps-12 border-orange border-e-[1px]">
            <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-5 ">
              <p className="font-Riviera text-3xl font-normal text-black leading-[150%] max-w-[469px]">
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
                  <h2 className="font-Riviera text-orange text-2xl font-bold ">
                    Jack
                  </h2>
                  <p className="font-Jakarta text-black font-normal text-md">
                    Custom Outdoor Living Designer
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="ps- md:ps-12 border-orange border-e-[1px]">
            <div className="real_card max-w-[515px] h-[100%]  w-100 py-5 px-5 ">
              <p className="font-Riviera text-3xl font-normal text-black leading-[150%] max-w-[459px]">
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
                  <h2 className="font-Riviera text-orange text-2xl font-bold ">
                    Robert
                  </h2>
                  <p className="font-Jakarta text-black font-normal text-md">
                    Building Materials Distributor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Real5;