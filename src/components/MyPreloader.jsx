import React from "react";
import preloder_img from "../assets/images/webp/logo_2.webp";

const MyPreloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("hidden");
    document.body.style.overflow = "visible";
  }, 2000);
  setTimeout(() => {});
  return (
    <section className="perloaderback z_index_2000 relative" id="none">
      <div className="none">
        <div className="perloaderback text-center flex items-center justify-center start-0 top-0 b w-full z_index_100 min-h-screen fixed">
          <img
            src={preloder_img}
            alt="preloder_img"
            className="flex items-center justify-center animation_preloader w-[25%]"
          />
        </div>
      </div>
    </section>
  );
};
export default MyPreloader;
