import React from "react";
import MultiCarousel from "./TSCarousel";
import { NavLink } from "react-router-dom";

const TMovies = () => {
  return (
    <div className="pb-[35px]">
      <div className="flex_btw items-center pb-5 px-1 sm:px-3">
        <p>Trending Series</p>
        <NavLink to="series">
          <button className="bg-blue-500 rounded-3xl px-[7px] py-[6px] text-[12px]">
            See more..
          </button>
        </NavLink>
      </div>
      <MultiCarousel />
    </div>
  );
};

export default TMovies;
