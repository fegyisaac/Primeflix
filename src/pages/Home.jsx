import React from "react";
import Slider from "../component/Body/Slider";
import TMovies from "../component/Body/TMovies/TMovies";
import TSeries from "../component/Body/TSeries/TSeries";
import TRMovies from "../component/Body/TRMovies/TRMovies";
import TRSeries from "../component/Body/TRSeries/TRSeries";

const Home = () => {
  return (
    <div className="pt-3 sm:pt-0">
      <div className="pb-12">
        <Slider />
      </div>
      <div className="container px-3">
        <TMovies />
        <TSeries />
        <TRMovies />
        <TRSeries />
      </div>
    </div>
  );
};

export default Home;
