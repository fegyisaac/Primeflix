import apiConfig from "../../api/apiConfig";
import star from "../../../img/star.svg";
import { NavLink } from "react-router-dom";

const TMCard = ({ movies }) => {
  const w500Img = apiConfig.w500Img;

  const truncate = (str) => {
    return str.length > 19 ? str.substring(0, 17) + "..." : str;
  };
  return (
    <div className="bg-blue-500 w-[120px] h-[230px] card-ratio  rounded-xl">
      <div className="w-full h-[180px] xsm:h-[190px] rounded-xl flex_center ">
        <img
          src={`${w500Img}${movies.poster_path}`}
          className="rounded-md h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="py-1 px-[6px] text-black">
        <div className="">
          <img src={star} width={"15px"} className="pr-1 inline" />
          <p className="text-[12px] inline">
            {Math.round(`${movies.vote_average}` * 10) / 10}
          </p>
        </div>
        <NavLink to={`/video/${movies.id}`}>
          <p className="w-[97%] pl-[2px] text-[12px] cursor-pointer">
            {truncate(`${movies.title}`)}
          </p>
        </NavLink>
      </div>
    </div>
  );
};
export default TMCard;
