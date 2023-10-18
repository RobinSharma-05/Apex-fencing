import React, { useState, useEffect } from "react";
const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkbackTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkbackTop);
    };
  });

  const checkbackTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const backTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div className="back_to_top z-[10]">
          <div
            className="backTop "
            onClick={backTop}
            style={{ height: 90, display: showScroll ? "flex" : "none" }}
                  >
                      ^
        </div>
        </div>
      </section>
    </>
  );
};

export default BackToTop;
