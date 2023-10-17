import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import showcase1 from "../assets/images/webp/showcase1.webp";
import showcase2 from "../assets/images/webp/showcase2.webp";
import showcase3 from "../assets/images/webp/showcase3.webp";
import showcase4 from "../assets/images/webp/showcase4.webp";
import showcase5 from "../assets/images/webp/showcase5.webp";
import showcase6 from "../assets/images/webp/showcase6.webp";
import showcase7 from "../assets/images/webp/showcase7.webp";
import showcase8 from "../assets/images/webp/showcase8.webp";
import showcase9 from "../assets/images/webp/showcase9.webp";
import showcase10 from "../assets/images/webp/showcase10.webp";
import { Real_Instagram, Real_play_btn } from "./Icons";
import { Link } from "react-router-dom";
const ShowCase6 = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="container mx-auto pt-[50px] md:pt-[100px] lg:pt-[145px]">
        <h2 className="font-Jakarta text-[40px] md:text-5xl text-light-blue font-medium pb-5">
          Showcase Your Space
        </h2>
        <p className="font-Jakarta text-lg font-normal text-black max-w-[861px]">
          Discover how homeowners and builders alike are transforming spaces
          with our products. Get inspired for your next project.
        </p>
        <div className="d_grid w-100 h-full pt-[20px] sm:pt-[40px] md:pt-[88px]  md:pb-[65px]">
          <div className="grid_item1 relative overflow-hidden grid_hover ">
            <img className=" w-full h-full" src={showcase1} alt="showcase1" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-3  items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="grid_item2 relative overflow-hidden grid_hover">
            <img className=" w-full h-full" src={showcase2} alt="showcase2" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-3 items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="grid_item3 relative overflow-hidden grid_hover">
            <img className=" w-full h-full" src={showcase3} alt="showcase3" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-3 items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="grid_item4 relative overflow-hidden grid_hover">
            <img className=" w-full h-full" src={showcase4} alt="showcase4" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-3 items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="grid_item5 relative overflow-hidden grid_hover">
            <img className=" w-full h-full" src={showcase5} alt="showcase5" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div
              onClick={openModal}
              className="absolute top-[50%] ps-1 left-[50%] translate-y-[-50%] translate-x-[-50%] bg-light-green rounded-[50%] flex items-center justify-center w-[80px] h-[80px] cursor-pointer"
            >
              <Real_play_btn />
            </div>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10 " onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-orange bg-opacity-25 " />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-6 text-center ">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full h-full min-h-[415px]  max-w-[800px] transform rounded-2xl bg-black p-6 mx-auto text-center align-middle shadow-xl transition-all relative">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {/* Watch Amzon */}
                        </Dialog.Title>
                        <div
                          onClick={closeModal}
                          className="w-[50px] h-[50px] rounded-[50%] bg-light-grey hover:bg-white absolute top-[-4%] right-[-2%] cursor-pointer flex items-center justify-center"
                        >
                          <span className="w-full h-[4px]  bg-black rotate-45 translate-y-[0px] translate-x-[14px] inline-block"></span>
                          <span className="w-full h-[4px]  bg-black rotate-[-45deg] translate-y-[0px] translate-x-[-11px] inline-block"></span>
                        </div>
                        <div className="mt-2 ">
                          <iframe
                            width="100%"
                            // max-width="500"
                            height="415"
                            src="https://www.youtube.com/embed/yN9t3Myv97c"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>

                          {/* <p className="text-sm text-gray-500">
                            Your payment has been successfully submitted. We’ve
                            sent you an email with all of the details of your
                            order.
                          </p> */}
                        </div>

                        {/* <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div> */}
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
            <div className="flex flex-wrap gap-1 lg:gap-3 items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="grid_item6 relative overflow-hidden grid_hover">
            <img className=" w-full h-full" src={showcase6} alt="showcase6" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-3 items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="grid_item7 relative overflow-hidden grid_hover">
            <img className=" w-full h-full" src={showcase7} alt="showcase7" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-3 items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="grid_item8 relative overflow-hidden grid_hover">
            <img className=" w-full h-full" src={showcase8} alt="showcase8" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-3 items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="grid_item9 relative overflow-hidden grid_hover">
            <img className=" w-full h-full" src={showcase9} alt="showcase9" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-3 items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="grid_item10 relative overflow-hidden grid_hover">
            <img className=" w-full h-full" src={showcase10} alt="showcase10" />
            <div className="absolute right-2 top-2">
              <a href="https://www.instagram.com/" target="blank">
                <Real_Instagram />
              </a>
            </div>
            <div
              onClick={openModal}
              className="absolute bottom-[50%] left-[50%] ps-2 translate-y-[-50%] translate-x-[-50%] bg-light-green rounded-[50%] flex items-center justify-center w-[80px] h-[80px] cursor-pointer"
            >
              <Real_play_btn />
            </div>
            <div appear show={isOpen} as={Fragment} className="modal ">
              <iframe
                width="100"
                height="415"
                src="https://www.youtube.com/embed/yN9t3Myv97c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div className="flex flex-wrap gap-1 lg:gap-3 items-center absolute bottom-2 lg:bottom-7 left-1 lg:left-5 w-full">
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-xsm font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
        </div>
        <div className="pb-[20px] sm:pb-[50px] md:pb-[100px] lg:pb-[114px] pt-[20px] sm:pt-[40px] md:pt-[0px]">
          <p className="font-Jakarta text-xs font-normal text-black max-w-[499px] text-center mx-auto pb-[20px] sm:pb-[40px] ">
            Ready for more? Click below to explore a curated collection of
            awe-inspiring transformations featuring our products.
          </p>
          <div className="mx-auto text-center">
            <div className="font-Jakarta font-medium hover:text-light-black transition-all hover:bg-light-brown duration-500 ease-in-out border-[2px] cursor-pointer border-solid border-[transparent] hover:border-light-black text-white text-xs bg-light-black py-[19px] px-[42px] inline-block ">
              Get Inspired
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase6;
