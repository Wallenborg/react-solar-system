import React from "react";
import "./Planet.css";

function Planet({ name, link, className }) {
  return (
    <div className={`continer-planet ${className}-place`}>
      <a href={link} target="_blank">
        <p className="planet-name">{name}</p>
      </a>
      <div className={`planet ${className}`}></div>
    </div>
  );
}

export default Planet;
