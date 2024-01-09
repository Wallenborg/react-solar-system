import React, { useEffect, useState } from "react";

function ShowAlert({ places }) {
  const [showAlerts, setShowAlerts] = useState(
    Array(places.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const newShowAlerts = places.map((place) => scrollY > place);
      setShowAlerts(newShowAlerts);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [places]);

  return (
    <>
      {showAlerts.map(
        (showAlert, index) =>
          showAlert && (
            <p
              key={index}
              style={{
                position: "absolute",
                top: `${places[index] + 500}px`,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 3,
                fontSize: "4rem",
                fontFamily: "monospace",
                color: "firebrick",
                textAlign: "center",
              }}
            >
              SLOW DOWN
            </p>
          )
      )}
    </>
  );
}

export default ShowAlert;
