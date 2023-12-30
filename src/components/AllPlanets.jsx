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
    </>
  );
}

export default AllPlanets;
