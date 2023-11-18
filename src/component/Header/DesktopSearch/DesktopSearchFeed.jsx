import React, { useEffect, useState } from "react";
import star from "../../../img/star.svg";
import apiConfig from "../../api/apiConfig";
import axios from "axios";

const DesktopSearchFeed = ({ selected, searchTerm }) => {

  const baseUrl = apiConfig.baseUrl;
  const API_KEY = apiConfig.API_KEY;
  const w500Img = apiConfig.w500Img;

  const [search, setSearch] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    {
      selected === "All"
        ? setUrl(
            baseUrl +
              `/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=` +
              API_KEY
          )
        : selected === "Movies"
        ? setUrl(
            baseUrl +
              `/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=` +
              API_KEY
          )
        : selected === "Series"
        ? setUrl(
            baseUrl +
              `/search/tv?query=${searchTerm}&include_adult=false&language=en-US&page=1&api_key=` +
              API_KEY
          )
        : setUrl("");
    }

    const getSearch = async () => {
      const res = await axios.get(url);
      const data = res.data;
      setSearch(data.results);
      console.log(data.results.slice(0, 5));
    };
    getSearch();
  }, [searchTerm]);

  return (
    <div className="w-[340px] min-h-[280px]  absolute left-1/2 overflow-hidden -translate-x-1/2 bg-red-600 top-[120%] z-10">
      <div className="fixed top-0 w-full h-[7px] bg-red-600"></div>
      <div className=" overflow-y-scroll max-h-[280px] scrollbar pt-3 pb-4 px-1">
        <div className="min-h-[252px]">
          {search.map((search) => (
            <div className="min-h-[85px] flex_btw gap-1 p-1 bg-green-400">
              <div className="h-full w-16 mx-auto rounded-md">
                <img
                  src={`${w500Img}${search.poster_path}`}
                  alt=""
                  className="w-full rounded-md h-full bg-blue-600"
                />
              </div>
              <div className="flex-1 ">
                <h2 className="text-[14px] font-semibold">
                  {search.name}
                  <span className="text-[14px] font-normal">(2005)</span>
                </h2>
                <p className="text-[11px] line-clamp-3">{search.overview}</p>

                <div className="flex_btw gap-1 pt-1">
                  <div className="flex h-full items-center">
                    <img src={star} alt="rating star" width={15} />
                  </div>
                  <p className="text-[12px]  text-center">
                    <span className="text-[13px] font-semibold">
                      {Math.round(`${search.vote_average}` * 10) / 10}
                    </span>
                    /10
                  </p>
                  <p className="text-[13px] flex-1">{search.vote_count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-[7px] bg-red-600"></div>
    </div>
  );
};

export default DesktopSearchFeed;
