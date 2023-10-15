import React from "react";
import logo from "../assets/images/webp/logo.webp";
import {
  Facebookicon,
  Instagramicon,
  Patrolicon,
  Tiktokicon,
  Youtubeicon,
} from "./Icons";

const MyFooter = () => {
  return (
    <div className="bg-light-brown">
      <div className="container mx-auto pt-24 mt-24">
        <div className="flex align-middle justify-between">
          <img src={logo} alt="logo" />

          <div className="flex align-middle gap-6">
            <Facebookicon />
            <Instagramicon />
            <Patrolicon />
            <Tiktokicon />
            <Youtubeicon />
          </div>
        </div>
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
};

export default MyFooter;
