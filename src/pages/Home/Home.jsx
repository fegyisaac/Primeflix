import React from "react";
import {Slider, TMovies, TSeries, TRSeries, TRMovies} from "../../component";

const Home = () => {
  return (
    <div className="pt-3 sm:pt-0 xl:pt-8">
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
