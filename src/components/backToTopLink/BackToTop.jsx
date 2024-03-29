import React, { useEffect, useState } from "react";
import "./backToTop.css";

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // Set the threshold value based on when the BackToTop component to appear
      const threshold = 6000;

      setShowBackToTop(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showBackToTop && (
      <p className="text" onClick={scrollToTop}>
        Back to the SUN
      </p>
    )
  );
};

export default BackToTop;
