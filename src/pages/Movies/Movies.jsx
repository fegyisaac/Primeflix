import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";
import apiConfig from "../../component/api/apiConfig";
import ReactPaginate from "react-paginate";



const baseUrl = apiConfig.baseUrl;
const API_KEY = apiConfig.API_KEY;
const discover = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&api_key=";
const popular = "/movie/popular?language=en-US&page=1&api_key=";
const topRated = "/movie/top_rated?language=en-US&page=1&api_key=";
const upcoming = "/movie/upcoming?language=en-US&page=1&api_key=";

const Movies = () => {
  const [menu, setMenu] = useState(false);

  const categories = ["All", "Popular", "Top Rated", "Upcoming"];
  const [movies, setMovies] = useState([]);
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
        : val === "Upcoming"
        ? setUrl(baseUrl + upcoming + API_KEY)
        : setUrl(baseUrl + discover + API_KEY);
    }

    const innerHTML = e.target.innerHTML;
    setVal(innerHTML);
    setMenu(false);
  };

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(url);
      const data = res.data;
      setMovies(data.results.slice(0, 16));
    };
    getMovies();
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
  
  // const [pageNumber, setPageNumber] = useState(0)
  // const usersPerPage = 16
  // const pagesVisited = pageNumber * usersPerPage

  // const displayUsers = () => {
    
  // }

  return (
    <div className="container py-12 px-6">
      <div className=" flex_btw items-center mb-7 gap-9 relative">
        <p className="w-[150px]">
          <span>{val}</span> Movies
        </p>
        <p className="flex-1 text-center">1 out of 395 Movies | Primeflix</p>
        <span onClick={(e) => setMenu(!menu)} className="mr-5 cursor-pointer">
          <BsThreeDotsVertical className="text-[20px]" />
        </span>
        {menu && (
          <div ref={mainRef} className="absolute top-0 text-[14px] -right-1 -translate-x-[20%] bg-black p-2 rounded-md">
            {categories.map((categorie) => (
              <p
                key={categorie}
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

      <div>

      </div>
      
    </div>
  );
};

export default Movies;
