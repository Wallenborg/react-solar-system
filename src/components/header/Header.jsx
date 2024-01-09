import "./header.css";

function Header() {
  return (
    <div className="wrapper">
      <h1 className="title">THE SUN</h1>
      <h2 className="sub-titel">Welcome to the Solar System Scroll!</h2>
      <p className="header-text-scale">Scale of 1 px:127 km.</p>
      <p className="header-text">
        Embark on an scrolling experience that takes you on a voyage through our
        solar system. You will travel from the Sun all the way to Pluto. This
        website allows you to explore the vast distances between planets,
        offering a sense of the enormity of space.
      </p>
      <p className="header-text-time">
        Approximate Scrolling time to Earth: 90 Seconds.
      </p>
      <p className="header-text-time">
        Approximate Scrolling time to Pluto: 1 Hour.
      </p>
    </div>
  );
}

export default Header;
