/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useGetPokemonByNameQuery } from "../../features/api/apiSlice";

const FlightData = () => {
  const { data: flightData } = useGetPokemonByNameQuery("");
  console.log(flightData);
  return (
    <div className="py-11">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-6">
        {flightData?.map((data: any) => (
          <div className="card bg-base-100 shadow-xl">
          <figure className="px-4 pt-4">
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{data?.mission_name}</h2>
            <p>{data?.details?.slice(0,100)}</p>
            <div className="flight-info">
              <p>Launch year : {data?.launch_year}</p>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary">Learn More ... </button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default FlightData;
