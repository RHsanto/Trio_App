/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useGetPokemonByNameQuery } from "../../features/api/apiSlice";

const FlightData = () => {
  const { data: flightData } = useGetPokemonByNameQuery("");
  console.log(flightData);
  return (
    <div className="py-11">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {flightData?.map((data: any) => (
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/400/arch" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightData;
