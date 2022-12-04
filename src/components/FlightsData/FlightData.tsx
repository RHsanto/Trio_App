/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery, useGetSingleFlightQuery } from "../../features/api/apiSlice";

const FlightData = () => {
  const { data: flightData,error, isLoading ,isError } = useGetPokemonByNameQuery("");
  const{data:singleData}=useGetSingleFlightQuery("1")
  // console.log(flightData);
  console.log(singleData);
  if(isError)return <>{error}</>
  if(isLoading)
  return(
    <div className=" text-center pt-10">
     <button  className="btn btn-primary" >Processing...</button>
  </div>
  )
  
  return (
    <div className="py-11">
      <h1 className="text-4xl text-center pb-10">Here All Launch Mission Info Card</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-6">
        {flightData?.map((data: any) => (
          <div key={data?.mission_name} className="card bg-base-100 shadow-xl">
          <figure className="px-4 pt-4">
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mission : {data?.mission_name}</h2>
            <p>{data?.details?.slice(0,100)}</p>
            <div className="flight-info">
              <p>Launch year : {data?.launch_year}</p>
            </div>
            <div className="card-actions">
             <Link to={`/${data?.flight_number}`}>
             <button className="btn btn-primary">Learn More ... </button>
             </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default FlightData;
