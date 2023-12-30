import React, { useEffect, useState } from "react";
import "./scrollInfo.css";

const ScrollInfo = () => {
  const [scrollLength, setScrollLength] = useState(0);
  const pixelsToKmScale = 12742 / 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrollLength(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLengthKm = (scrollLength * pixelsToKmScale).toFixed(0);

  return (
    <p className="fixed-text">
      You have scrolled <span id="scrollLength">{scrollLength}</span> pixels.
      <br />
      Which is approximately <span id="scrollLengthKm">
        {scrollLengthKm}
      </span>{" "}
      km.
    </p>
  );
};

export default ScrollInfo;
