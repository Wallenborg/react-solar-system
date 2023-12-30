import Planet from "./Planet";

function AllPlanets() {
  return (
    <>
      <Planet
        name="mercury"
        link="https://en.wikipedia.org/wiki/Mercury_(planet)"
        className="mercury"
      />
      <Planet
        name="venus"
        link="https://en.wikipedia.org/wiki/Venus"
        className="venus"
      />
      <Planet
        name="earth"
        link="https://en.wikipedia.org/wiki/Earth"
        className="earth"
      />
      <Planet
        name="mars"
        link="https://en.wikipedia.org/wiki/Mars"
        className="mars"
      />
      <Planet
        name="jupiter"
        link="https://en.wikipedia.org/wiki/Jupiter"
        className="jupiter"
      />
      <Planet
        name="saturn"
        link="https://en.wikipedia.org/wiki/Saturn"
        className="saturn"
      />
      <Planet
        name="uranus"
        link="https://en.wikipedia.org/wiki/Uranus"
        className="uranus"
      />
      <Planet
        name="neptune"
        link="https://en.wikipedia.org/wiki/Neptune"
        className="neptune"
      />
      <Planet
        name="pluto"
        link="https://en.wikipedia.org/wiki/Pluto"
        className="pluto"
      />
    </>
  );
}

export default AllPlanets;
