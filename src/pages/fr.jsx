import React, { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";
import apiConfig from "../component/api/apiConfig";

const Movies = () => {
  const [menu, setMenu] = useState(false);

  const categories = ["Popular", "Top Rated", "Upcoming"];

  const [movies, setMovies] = useState([]);
  
  const baseUrl = apiConfig.baseUrl;
  const API_KEY = apiConfig.API_KEY;
  const discover =
  "/discover/movie?include_adult=false&include_video=false&language=en-US&api_key=";
  const popular = "/movie/popular?language=en-US&page=1&api_key=";
  const topRated = "/movie/top_rated?language=en-US&page=1&api_key=";
  const upcoming = "/movie/upcoming?language=en-US&page=1&api_key=";
  const url = baseUrl + topRated + API_KEY;

  const getMovies = async () => {
    const res = await axios.get(url);
    const data = res.data;
    setMovies(data.results);
  };
  
  useEffect(() => {
    getMovies();
  }, []);
  
  const [val, setVal] = useState("");
  const options = (e) => {
    const innerHTML = e.target.innerHTML
    console.log(innerHTML);
    setMenu(false)

  };
  

  return (
    <div className="container py-12 px-6">
      <div className=" flex_btw items-center mb-7 gap-9 relative">
        <p className="w-[60px]">Movies</p>
        <p className="flex-1 text-center">1 out of 395 Movies | Primeflix</p>
        <span
          onClick={(e) => setMenu((prev) => !prev)}
          className="mr-5 cursor-pointer"
        >
          <BsThreeDotsVertical className="text-[20px]" />
        </span>
        {menu && (
          <div className="absolute top-[140%] text-[14px] right-0 -translate-x-[20%] bg-black p-2 rounded-md">
            {categories.map((categorie) => (
              <p key={categorie}
                className="py-[3px] px-2 hover:bg-slate-600 cursor-pointer rounded-sm"
                onClick={options}
              >
                {categorie}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-auto-fit-[9rem] gap-y-6">
        {movies.map((movie) => (
          <MovieCard movies={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
