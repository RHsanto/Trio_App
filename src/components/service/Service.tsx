import { useGetPokemonByNameQuery } from "../../features/api/apiSlice";
import Menubar from "../common/Menubar";



const Service = () => {

  const {data}=useGetPokemonByNameQuery("")
  console.log(data);
  return (
    <div>
    <div className="md:container md:mx-auto">
      <Menubar/>
    </div>
    </div>
  );
};

export default Service;