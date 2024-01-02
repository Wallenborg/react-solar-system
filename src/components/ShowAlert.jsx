import React, { useEffect, useState } from "react";

function ShowAlert({ place }) {
  const [showAlert, setShowAlert] = useState(false);
  const placeOnSite = place + 500;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = place;

      setShowAlert(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [place]);

  return (
    showAlert && (
      <p
        style={{
          position: "absolute",
          top: `${placeOnSite}px`,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
          fontSize: "4rem",
          fontFamily: "monospace",
          color: "firebrick",
          textAlign: "center",
        }}
      >
        SLOW DOWN
      </p>
    )
  );
}

export default ShowAlert;
