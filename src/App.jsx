import "./App.css";
import Header from "./components/Header";
import Spaceship from "./components/Spaceship";
import ScrollInfo from "./components/ScrollInfo";
import AllPlanets from "./components/AllPlanets";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Spaceship />
      <ScrollInfo />
      <AllPlanets />
    </div>
  );
}

export default App;
