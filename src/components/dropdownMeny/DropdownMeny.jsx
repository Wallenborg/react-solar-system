import React, { useState, useEffect, useRef } from "react";
import "./dropdownmeny.css";

function DropdownMemy() {
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

  return (
    <div className="container">
      <div className="dropdown" ref={dropdownRef} onClick={stopPropagation}>
        <div className="header" onClick={toggleDropdown}>
          <span className="text-planet-i">
            Distance from the Sun to planets in pixels{" "}
          </span>
          <div className="info-button">i</div>
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list">
            <li>
              <span className="red">MERCURY</span>
              <br />
              <span className="text-right">45467px</span>
            </li>
            <li>
              <span className="red">VENUS</span>
              <br />
              <span className="text-right">84522px</span>
            </li>
            <li>
              <span className="red">EARTH</span>
              <br />
              <span className="text-right">117041px</span>
            </li>
            <li>
              <span className="red">MARS</span>
              <br />
              <span className="text-right">177696px</span>
            </li>
            <li>
              <span className="red">JUPITER</span>
              <br />
              <span className="text-right">609181px</span>
            </li>
            <li>
              <span className="red">SATURN</span>
              <br />
              <span className="text-right">1118299px</span>
            </li>
            <li>
              <span className="red">URANUS</span>
              <br />
              <span className="text-right"> 2243824px</span>
            </li>
            <li>
              <span className="red">NEPTUNE</span>
              <br />
              <span className="text-right">3508488px</span>
            </li>
            <li>
              <span className="red">PLUTO</span>
              <br />
              <span className="text-right">4614089px</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropdownMemy;
