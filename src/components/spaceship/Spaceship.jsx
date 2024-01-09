import React, { useEffect, useState } from "react";
import "./spaceship.css";
// how to import image ?
import spaceship from "/image/icons8-spaceship-100.svg";

function Spaceship() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolling(scrollY > 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const spaceshipClassName = `spaceship ${isScrolling ? "scrolling" : ""}`;

  return <img className={spaceshipClassName} src={spaceship} alt="Spaceship" />;
}

export default Spaceship;
