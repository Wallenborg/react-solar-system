import "./App.css";
import Header from "./components/Header";
import Spaceship from "./components/Spaceship";
import ScrollInfo from "./components/ScrollInfo";
import AllPlanets from "./components/AllPlanets";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AllAlerts from "./components/AllAlerts";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Spaceship />
      <ScrollInfo />
      <BackToTop />
      <AllPlanets />
      <AllAlerts />
      <Footer />
    </div>
  );
}

export default App;
