import React, { useState, useEffect } from "react";
import preloder_img from "../assets/images/webp/logoo.webp";

const MyPreloader = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    if (loader) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [loader]);
  return (
    <>
      <section
        className={`perloaderback z_index_2000 relative ${
          loader ? "" : "hidden"
        }`}
        id="preloader"
      >
        <div className="none">
          <div className="perloaderback text-center flex items-center justify-center start-0 top-0 b w-full z_index_100 min-h-screen fixed">
            <img
              src={preloder_img}
              alt="preloder_img"
              className="flex items-center justify-center animation_preloader w-[15%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default MyPreloader;
