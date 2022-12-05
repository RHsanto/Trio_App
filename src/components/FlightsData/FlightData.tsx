/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetPokemonByNameQuery, useGetSingleFlightQuery } from "../../features/api/apiSlice";

const FlightData = () => {
  const [searchResult,setSearchResult]=useState<any>("")
  const { data: flightData, error, isLoading, isError } = useGetPokemonByNameQuery("");

  if (isError) return <>{error}</>;
  if (isLoading)
    return (
      <div className=" text-center py-10">
        <button className="btn btn-primary">Processing...</button>
      </div>
    );

//     const handleSearch=(e:any)=>{
// console.log(e.target.value);
//     }
  return (
    <>
      <div className="bg-indigo-600 ">
        <div className="navbar md:container md:mx-auto  text-light">
          <div className="flex-1">
            <Link to="/">
              {" "}
              <a className="btn btn-ghost text-gray-50 normal-case text-xl">daisyUI</a>
            </Link>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input onChange={event => {
                setSearchResult(event?.target?.value)
              }} type="text" placeholder="Search" className="input input-bordered" />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container md:mx-auto py-11">
        <h1 className="text-4xl text-center pb-10">Here All Launch Mission Info Card</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-6">
          {flightData && 
          flightData.filter((items:any)=>{
            if(searchResult === ""){
              return items;
            }else if(
              items?.mission_name?.toLowerCase().includes(searchResult.toLowerCase()) 
              ||
              items?.launch_year?.toLowerCase().includes(searchResult.toLowerCase())
            ){
              return items;
            }
          }).map((data: any) => (
            <div key={data?.mission_name} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Mission : {data?.mission_name}</h2>
                <p>{data?.details?.slice(0, 100)}</p>
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
          ))
          }
        </div>
      </div>
    </>
  );
};

export default FlightData;
