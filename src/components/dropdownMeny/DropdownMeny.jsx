import React, { useState, useEffect, useRef } from "react";
import { distanceToSun } from "../../data";
import "./dropdownmeny.css";

function DropdownMeny() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  function DistanceSun({ nameplanet, distance }) {
    return (
      <li>
        <span className="red">{nameplanet}</span>
        <br />
        <span className="text-right">{distance}</span>
      </li>
    );
  }

  return (
    <div className="container">
      <div className="dropdown" ref={dropdownRef} onClick={stopPropagation}>
        <div className="header" onClick={toggleDropdown}>
          <span className="text-planet-i">
            Distance from the Sun to planets in pixels
          </span>
          <div className="info-button">i</div>
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list">
            {distanceToSun.map((planet) => (
              <DistanceSun
                key={planet.nameplanet}
                nameplanet={planet.nameplanet}
                distance={planet.distance}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropdownMeny;
