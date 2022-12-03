/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useGetPokemonByNameQuery } from "../../features/api/apiSlice";



const FlightData = () => {
  const {data:flightData}=useGetPokemonByNameQuery("")
  // console.log(flightData);
  return (
    <div>
      
    </div>
  );
};

export default FlightData;