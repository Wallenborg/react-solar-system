import React, { useEffect, useState } from "react";
import { alertPlacesInSpace } from "../../data";

//  Component ShowAlert, which takes places as a prop
function ShowAlert({ places }) {
  const [showAlerts, setShowAlerts] = useState(
    Array(places.length).fill(false)
  );

  useEffect(() => {
    // Get the vertical scroll position from either window or document
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // Update showAlerts based on whether the scroll position is greater than place
      const newShowAlerts = places.map((place) => scrollY > place);
      setShowAlerts(newShowAlerts);
    };
    // Add the scroll event listener when the component rendered
    window.addEventListener("scroll", handleScroll);
    // Remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [places]); //useEffect runs when places changes
  // Render the component
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
                zIndex: -2,
                fontSize: "4rem",
                fontFamily: "monospace",
                color: "firebrick",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px",
                boxShadow:
                  "0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.8)",
                border: "2px solid transparent",
                background: "linear-gradient(45deg, #ff00ff, #00ffff)",
                background: "rgb(37, 36, 36)",
                WebkitBackgroundClip: "text",
              }}
            >
              SLOW DOWN
            </p>
          )
      )}
    </>
  );
}

function AllAlerts() {
  return <ShowAlert places={alertPlacesInSpace} />;
}

export default AllAlerts;
