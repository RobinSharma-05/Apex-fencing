import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import showcase1 from "../assets/images/png/showcase1.png";
import showcase2 from "../assets/images/png/showcase2.png";
import showcase3 from "../assets/images/png/showcase3.png";
import showcase4 from "../assets/images/png/showcase4.png";
import showcase5 from "../assets/images/png/showcase5.png";
import showcase6 from "../assets/images/png/showcase6.png";
import showcase7 from "../assets/images/png/showcase7.png";
import showcase8 from "../assets/images/png/showcase8.png";
import showcase9 from "../assets/images/png/showcase9.png";
import showcase10 from "../assets/images/png/showcase10.png";
import { Real_Instagram, Real_play_btn } from "./Icons";
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
      <div className="container mx-auto py-5 md:py-10">
        <h2 className="font-Riviera text-5xl text-light-blue font-medium pb-5">
          Showcase Your Space
        </h2>
        <p className="font-Jakarta text-lg font-normal text-black max-w-[861px]">
          Discover how homeowners and builders alike are transforming spaces
          with our products. Get inspired for your next project.
        </p>
        {/* <div className="grid grid-cols-3 py-5 md:py-10 gap-5 w-full">
          <div className="relative row-start-1 row-end-4 col-start-1 col-end-2 w-full  h-full">
            <img className="w-full h-full" src={showcase1} alt="showcase1" />
            <div className="flex gap-3 items-center absolute bottom-2 lg:bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="relative row-start-4 row-end-6 col-start-1 col-end-2 w-full  h-full">
            <img className="w-full h-full" src={showcase2} alt="showcase2" />
            <div className="flex gap-3 items-center absolute bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="relative row-start-6 row-end-10 col-start-1 col-end-2 w-full h-full ">
            <img className="w-full h-full" src={showcase3} alt="showcase3" />
            <div className="flex gap-3 items-center absolute bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="relative row-start-1 row-end-3 col-start-2 col-end-3 w-full  h-full">
            <img className="w-full h-full" src={showcase4} alt="showcase4" />
            <div className="flex gap-3 items-center absolute bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="relative row-start-3 row-end-5 col-start-2 col-end-3 w-full  h-full">
            <img className="w-full h-full" src={showcase5} alt="showcase5" />
            <div className="flex gap-3 items-center absolute bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="relative row-start-6 row-end-8 col-start-2 col-end-3 w-full  h-full">
            <img className="w-full h-full" src={showcase6} alt="showcase6" />
            <div className="flex gap-3 items-center absolute bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="relative row-start-8 row-end-10 col-start-2 col-end-3 w-full h-full ">
            <img className="w-full h-full" src={showcase7} alt="showcase7" />
            <div className="flex gap-3 items-center absolute bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="relative row-start-1 row-end-2 col-start-3 col-end-4 w-full  h-full">
            <img className="w-full h-full" src={showcase8} alt="showcase8" />
            <div className="flex gap-3 items-center absolute bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="relative row-start-2 row-end-5 col-start-3 col-end-4 w-full  h-full">
            <img className="w-full h-full" src={showcase9} alt="showcase9" />
            <div className="flex gap-3 items-center absolute bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
          <div className="relative row-start-5 row-end-10 col-start-3 col-end-4 w-full h-full ">
            <img className="w-full h-full" src={showcase10} alt="showcase10" />
            <div className="flex gap-3 items-center absolute bottom-7 left-5 w-full">
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #railing
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #horizontal cable
              </h2>
              <h2 className="font-Jakarta text-white text-[14px] font-medium ">
                #americanseries
              </h2>
            </div>
          </div>
        </div> */}

        <div className="d_grid w-100 h-full py-5 md:py-10">
          <div className="grid_item1 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase1} alt="showcase1" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
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
          <div className="grid_item2 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase2} alt="showcase2" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
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
          <div className="grid_item3 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase3} alt="showcase3" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
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
          <div className="grid_item4 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase4} alt="showcase4" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
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
          <div className="grid_item5 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase5} alt="showcase5" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
            </div>
            <div
              onClick={openModal}
              className="absolute top-[50%] ps-1 left-[50%] translate-y-[-50%] translate-x-[-50%] bg-light-green rounded-[50%] flex items-center justify-center w-[80px] h-[80px] cursor-pointer"
            >
              <Real_play_btn />
            </div>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Payment successful
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Your payment has been successfully submitted. We’ve
                            sent you an email with all of the details of your
                            order.
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div>
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
          <div className="grid_item6 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase6} alt="showcase6" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
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
          <div className="grid_item7 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase7} alt="showcase7" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
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
          <div className="grid_item8 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase8} alt="showcase8" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
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
          <div className="grid_item9 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase9} alt="showcase9" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
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
          <div className="grid_item10 relative overflow-hidden">
            <img className=" w-full h-full" src={showcase10} alt="showcase10" />
            <div className="absolute right-2 top-2">
              <Real_Instagram />
            </div>
            <div className="absolute bottom-[50%] left-[50%] ps-1 translate-y-[-50%] translate-x-[-50%] bg-light-green rounded-[50%] flex items-center justify-center w-[80px] h-[80px] cursor-pointer">
              <Real_play_btn />
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
      </div>
    </div>
  );
};

export default ShowCase6;
