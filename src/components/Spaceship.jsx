// import "./spaceship.css";

// function Spaceship() {
//   return (
//     <img
//       className="spaceship"
//       src="src/assets/icons8-spaceship-100.svg"
//       alt="Spaceship"
//     />
//   );
// }
// export default Spaceship;

import React, { useEffect, useState } from "react";
import "./spaceship.css";

function Spaceship() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolling(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const spaceshipClassName = `spaceship ${isScrolling ? "scrolling" : ""}`;

  return (
    <img
      className={spaceshipClassName}
      src="src/assets/icons8-spaceship-100.svg"
      alt="Spaceship"
    />
  );
}

export default Spaceship;
