import React, { useEffect, useRef, useState } from "react";
import SeriesCard from "./SeriesCard";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";
import apiConfig from "../../component/api/apiConfig";
import Loading from "../../component/Loading";

const baseUrl = apiConfig.baseUrl;
const API_KEY = apiConfig.API_KEY;
const discover =
  "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&api_key=";
const popular = "/tv/popular?language=en-US&page=1&api_key=";
const topRated = "/tv/top_rated?language=en-US&page=1&api_key=";
const onTheAir = "/tv/on_the_air?language=en-US&page=1&api_key=";

const Series = () => {
  const [menu, setMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const categories = ["All", "Popular", "Top Rated", "On The Air"];
  const [tv, setTv] = useState([]);
  const [val, setVal] = useState("All");
  const [url, setUrl] = useState(baseUrl + discover + API_KEY);

  const options = (e) => {
    {
      val === "All"
        ? setUrl(baseUrl + discover + API_KEY)
        : val === "Popular"
        ? setUrl(baseUrl + popular + API_KEY)
        : val === "Top Rated"
        ? setUrl(baseUrl + topRated + API_KEY)
        : val === "On The Air"
        ? setUrl(baseUrl + onTheAir + API_KEY)
        : setUrl(baseUrl + discover + API_KEY);
    }

    const innerHTML = e.target.innerHTML;
    setVal(innerHTML);
    setMenu(false);
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      const getTv = async () => {
        const res = await axios.get(url);
        const data = res.data;
        setTv(data.results.slice(0, 16));
        setIsLoading(false);
      };
      getTv();
    } catch (err) {
      console.log(err);
    }
  }, [val]);

  const mainRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (!mainRef.current.contains(e.target)) {
      setMenu(false);
    }
  };

  return (
    <div className="container py-12 px-6">
      <div className=" flex_btw items-center mb-7 gap-9 relative">
        <p className="w-[150px]">
          <span>{val}</span> Series
        </p>
        <p className="flex-1 text-center">1 out of 395 Series | Primeflix</p>
        <span onClick={(e) => setMenu(!menu)} className="mr-5 cursor-pointer">
          <BsThreeDotsVertical className="text-[20px]" />
        </span>
        {menu && (
          <div
            ref={mainRef}
            className="absolute top-0 text-[14px] -right-1 -translate-x-[20%] bg-black p-2 rounded-md"
          >
            {categories.map((category) => (
              <p
                key={category}
                className="py-[3px] px-2 hover:bg-slate-600 cursor-pointer rounded-sm"
                onClick={options}
              >
                {category}
              </p>
            ))}
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="grid grid-auto-fit-[9rem] gap-y-6">
          {Array(16)
            .fill(0)
            .map(() => {
              return <Loading />;
            })}
        </div>
      ) : (
        <div className="grid grid-auto-fit-[9rem] place-items-center gap-y-6">
          {tv.map((tv) => (
            <SeriesCard tv={tv} key={tv.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Series;
