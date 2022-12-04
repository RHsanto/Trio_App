import { useParams } from "react-router-dom";
import { useGetSingleFlightQuery } from "../../features/api/apiSlice";

const Service = () => {

  const {id}=useParams();
  const{data:singleData}=useGetSingleFlightQuery(id)
  console.log(singleData);

  return (
    <div className="bg-gray-200">
     <h1 className="text-3xl">Single Data</h1>
    </div>
  );
};

export default Service;