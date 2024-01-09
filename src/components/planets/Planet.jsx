import "./Planet.css";
//directly giving the props  within the function parameter.
// "directly destructures the properties"
function Planet({ name, link, className }) {
  return (
    // Dynamic class names based on the className prop.
    <div className={`continer-planet ${className}-place`}>
      <a href={link} target="_blank">
        <p className="planet-name">{name}</p>
      </a>
      <div className={`planet ${className}`}></div>
    </div>
  );
}

export default Planet;
