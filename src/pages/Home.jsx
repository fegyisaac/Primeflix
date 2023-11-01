import React from "react";
import Slider from "../component/Body/Slider";
import TMovies from "../component/Body/TMovies/TMovies";
import TSeries from "../component/Body/TSeries/TSeries";
import TRMovies from "../component/Body/TRMovies/TRMovies";
import TRSeries from "../component/Body/TRSeries/TRSeries";

const Home = () => {
  return (
    <div className="pt-3 md:pt-7">
      <div className="container px-3">
        <div className="pb-12">
          <Slider />
        </div>
        <TMovies />
        <TSeries />
        <TRMovies />
        <TRSeries />
      </div>
    </div>
  );
};

export default Home;
