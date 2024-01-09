import ShowAlert from "./ShowAlert";
import alertPlaces from "../../alertsdata";

function AllAlerts() {
  return <ShowAlert places={alertPlaces} />;
}

export default AllAlerts;
