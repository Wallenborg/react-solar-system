import { planetsData } from "../../data";
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

function AllPlanets() {
  return (
    /* Maps over the planetsData array and for each object in the array it will render
    a Planet component with the respective name, link, and className props.
    The key prop is set to the index of the array to help React efficiently update the list. */
    <>
      {planetsData.map((planet, index) => (
        <Planet
          key={index}
          name={planet.name}
          link={planet.link}
          className={planet.className}
        />
      ))}
    </>
  );
}

export default AllPlanets;
