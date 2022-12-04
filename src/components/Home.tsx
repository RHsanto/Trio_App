import Menubar from "./common/Menubar";
import FlightData from "./FlightsData/FlightData";


const Home = () => {
  return (
    <div>
     <Menubar/>
    <div className="md:container md:mx-auto">
      <FlightData/>
    </div>
    </div>
  );
};

export default Home;