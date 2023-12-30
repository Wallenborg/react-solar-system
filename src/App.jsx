import "./App.css";
import Header from "./components/Header";
import Spaceship from "./components/Spaceship";
import ScrollInfo from "./components/ScrollInfo";
import AllPlanets from "./components/AllPlanets";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Spaceship />
      <ScrollInfo />
      <AllPlanets />
      <Footer />
    </div>
  );
}

export default App;
