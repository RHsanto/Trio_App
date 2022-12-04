import { useGetPokemonByNameQuery } from "../../features/api/apiSlice";
import Menubar from "../common/Menubar";
import FlightData from "../FlightsData/FlightData";



const Service = () => {

  const {data}=useGetPokemonByNameQuery("")
  console.log(data);
  return (
    <div className="bg-gray-200">
      <Menubar/>
    <div className="md:container md:mx-auto">
      <FlightData/>

    
    </div>
    </div>
  );
};

export default Service;