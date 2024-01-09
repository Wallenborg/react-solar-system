import "./App.css";
import Header from "./components/header/Header";
import Spaceship from "./components/spaceship/Spaceship";
import ScrollInfo from "./components/scrollInfo/ScrollInfo";
import AllPlanets from "./components/planets/AllPlanets";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/backToTopLink/BackToTop";
import AllAlerts from "./components/alerts/AllAlerts";
import DropdownMemy from "./components/dropdownMeny/DropdownMeny";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <DropdownMemy />
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
