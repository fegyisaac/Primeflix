import React, { useEffect, useRef, useState } from "react";
import star from "../../../img/star.svg";
import apiConfig from "../../../component/api/apiConfig";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const TvId = () => {
  const { id } = useParams();

  const truncate = (str) => {
    return str.length > 19 ? str.substring(0, 17) + "..." : str;
  };

  const [tvId, setTvId] = useState([]);
  const [similar, setSimilar] = useState([]);

  const baseUrl = apiConfig.baseUrl;
  const API_KEY = apiConfig.API_KEY;
  const url = baseUrl + `/tv/${id}?language=en-US&api_key=` + API_KEY;
  const link = baseUrl + `/tv/${id}/similar?language=en-US&api_key=` + API_KEY;

  useEffect(() => {
    const getTvId = async () => {
      const res = await axios.get(url);
      const data = res.data;
      setTvId(data);
    };
    getTvId();
  }, [id]);

  const w500Img = apiConfig.w500Img;

  return (
    <div className="container md:mt-6">
      <div>{id}</div>
      <div className="bg-black w-full h-[280px] m-auto md:rounded-lg mb-8 backdrop-ratio">
        <img
          src={`${w500Img}${tvId.backdrop_path}`}
          alt=""
          className="w-full h-full object-cover outline-0 border-none"
        />
      </div>

      <div className="flex_btw item-center mb-4 ">
        <div className="w-[160px] h-[230px] rounded-lg bg-black mr-6">
          <img
            src={`${w500Img}${tvId.poster_path}`}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-start items-center flex-wrap gap-y-[10px] w-[600px] mb-3">
            <h6 className="rounded-3xl mr-2 max-w-fit px-[7px] border ">
              Action
            </h6>
            <h6 className="rounded-3xl mr-2 max-w-fit px-[6px] border ">
              {/* {tvId.genres.name} */}
            </h6>
          </div>
          <h2 className="text-[30px]">{tvId.title}</h2>

          <p className="w-[92%] mb-5 text-[15px]">{tvId.overview}</p>

          <div className=" w-[150px] h-[51px]">
            <div className="flex justify-start items-start mb-1">
              <div className="h-full m-auto">
                <img src={star} alt="rating star" width={16} />
              </div>
              <p className="text-[14px] ml-[6px] flex-1">
                <span className="text-[15px] font-semibold">
                  {Math.round(`${tvId.vote_average}` * 10) / 10}
                </span>
                /10 <span className="ml-2">({tvId.vote_count})</span>
              </p>
            </div>
            <p className=" max-w-fit">
              2025 <span className=" ml-3">5 Seasons</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-yellow-600 font-semibold uppercase mb-3 shadow-none">
          Top Cast
        </h3>
        <div className="mb-2 flex justify-start items-center flex-wrap w-[600px]">
          <div className="bg-red-500 w-20 h-20 mr-3 rounded-full grid place-items-center">
            <img
              src={star}
              alt="rating star"
              width={"20"}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-yellow-600 font-semibold uppercase mb-3 shadow-none">
          Info
        </h3>
        <div className="flex_btw my-1">
          <p className="font-semibold">Duration :</p>
          <p>
            {tvId.runtime}
            <span>mins</span>
          </p>
        </div>
        <div className="flex_btw my-1">
          {/* 1974-12-20 */}
          <p className="font-semibold">Release Date :</p>
          <p>{tvId.release_date}</p>
        </div>
        <div className="flex_btw my-1">
          <p className="font-semibold">Air Status :</p>
          <p>{tvId.status}</p>
        </div>
        <div className="flex_btw my-1">
          <p className="font-semibold">Age Rate :</p>
          <p>2hrs:22mins</p>
        </div>
        <div className="flex_btw my-1">
          <p className="font-semibold">Countries :</p>
          <p>2hrs:22mins</p>
        </div>
      </div>

      <div className="mb-[50px]">
        <h3 className="text-yellow-600 font-semibold uppercase mb-3 shadow-none">
          Similar
        </h3>
        <div className="bg-blue-500 w-[120px] h-[230px] sm:w-[127px] xsm:w-[135px] xsm:h-[225px] rounded-md">
          <div className="w-full h-[180px] xsm:h-[190px] rounded-md flex_center ">
            <img
              src={`${w500Img}${similar.poster_path}`}
              className="rounded-md h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="py-1 px-[6px] text-black">
            <NavLink to={`/video/${similar.id}`}>
              <p className="w-[97%] pl-[2px] text-[12px]">
                {/* {truncate(`${similar.title}`)} */}
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvId;
