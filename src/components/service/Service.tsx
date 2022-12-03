import { useGetPokemonByNameQuery } from "../../features/api/apiSlice";
import Menubar from "../common/Menubar";
import Counters from "../FlightsData/Counters";
import FlightData from "../FlightsData/FlightData";



const Service = () => {

  const {data}=useGetPokemonByNameQuery("")
  console.log(data);
  return (
    <div className="bg-gray-200">
    <div className="md:container md:mx-auto">
      <Menubar/>
      <FlightData/>

      <Counters/>
    </div>
    </div>
  );
};

export default Service;