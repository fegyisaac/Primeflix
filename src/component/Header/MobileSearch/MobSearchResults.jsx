import React, { useEffect, useState } from "react";
import star from "../../../img/star.svg";
import axios from "axios";
import apiConfig from "../../api/apiConfig";

const MobSearchResults = ({ selected, searchTerm }) => {
  const baseUrl = apiConfig.baseUrl;
  const API_KEY = apiConfig.API_KEY;
  const w500Img = apiConfig.w500Img;

  const [searchData, setSearchData] = useState([]);
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
    try {
      const getSearch = async () => {
        const res = await axios.get(url);
        const data = res.data;
        setSearchData(data.results);
      };
      getSearch();
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  return (
    // <div className="h-[360px] bg-orange-500">
      <div className=" overflow-y-scroll h-full scrollbar px-1">
        <div className="min-h-[252px]">
          {searchData.map((search) => (
            <div className="min-h-[85px] flex justify-start gap-3 py-[3px] bg-green-400">
              <div className="min-h-full w-20 mx-auto rounded-md">
                <img
                  src=""
                  alt=""
                  className="w-full rounded-md h-full bg-blue-600"
                />
              </div>

              <div className="flex-1 max-w-[90%] ">
                <h2 className="text-[15px] font-semibold">
                  Spider-Man
                  <span className="text-[14px] font-normal"> (4747)</span>
                </h2>
                <p className="text-[11px] line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae fuga, omnis ipsum eius, ea iste quos quod ullam
                  nobis consectetur voluptas hic veniam eum ipsa autem libero
                  similique sint sequi?lor sit amet consectetur adipisicing
                  elit. Molestiae fuga, omnis ipsum eius, ea iste quos quod
                  ullam nobis consectetur voluptas hic veniam eum ipsa autem
                  libero similique sint sequi?lor sit amet consectetur
                  adipisicing elit. Molestiae fuga, omnis ipsum eius, ea iste
                  quos quod ullam nobis consectetur voluptas hic veniam eum ipsa
                  autem libero similique sint sequi?
                </p>

                <div className="flex_btw gap-1 pt-1">
                  <div className="flex h-full items-center">
                    <img src={star} alt="rating star" width={15} />
                  </div>
                  <p className="text-[12px]  text-center">
                    <span className="text-[13px] font-semibold">6.7</span>/10
                  </p>
                  <p className="text-[13px] flex-1">9hr:1min</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    // </div>
  );
};

export default MobSearchResults;
