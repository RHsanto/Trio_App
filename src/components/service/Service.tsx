/* eslint-disable react/jsx-no-target-blank */
import { Link, useParams } from "react-router-dom";
import { useGetSingleFlightQuery } from "../../features/api/apiSlice";

const Service = () => {
  const { id } = useParams();
  const { data: singleData } = useGetSingleFlightQuery(id);
  // console.log(singleData?.links);

  return (
    <div className=" container mx-auto mt-7">
      <div className=" flex bg-base-100 shadow-xl border">
        <div className="card-img w-full border">
          <img className="w-full h-96" src={singleData?.links?.mission_patch} alt="Album" />
        </div>
        <div className="p-6">
          <h2 className="card-title text-3xl mb-3">{singleData?.mission_name}</h2>
          <p className="mb-6">{singleData?.details}</p>

          <p>
            <b>launch date-:</b> {singleData?.launch_date_local}
          </p>
          <p>
            <b>launch date unix-:</b> {singleData?.launch_date_unix}
          </p>
          <p>
            <b>launch year-:</b> {singleData?.launch_year}
          </p>
          <p>
            <b>launch mission-:</b>{" "}
            {singleData?.launch_success === true ? (
              <span className="text-green-500"> success</span>
            ) : (
              <span className="text-red-500">failed</span>
            )}
          </p>
          <p>
            <b>Mission launch Info </b>:{" "}
            <a className="text-blue-700" target="_blank" href={singleData?.links?.video_link}>
              {" "}
              Youtube
            </a>{" "}
            ||
            <a className="text-blue-700" target="_blank" href={singleData?.links?.wikipedia}>
              {" "}
              wikipedia
            </a> || 
            <a className="text-blue-700" target="_blank" href={singleData?.links?.article_link}>
              {" "}
              Article
            </a>

            <img className="w-20 mt-4" src={singleData?.links?.mission_patch_small} alt="img" />
            <div className="card-actions justify-end">
             <Link to='/'><button className="btn btn-primary">Go to Home</button></Link>
             </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
