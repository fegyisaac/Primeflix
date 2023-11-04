import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TSCard from "./TSCard";
import apiConfig from "../../api/apiConfig";

const TSCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1500, min: 1300 },
      items: 8,
      slidesToSlide: 4,
    },
    medium: {
      breakpoint: { max: 1024, min: 920 },
      items: 6,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 920, min: 768 },
      items: 5,
      slidesToSlide: 3,
    },
    lgPhone: {
      breakpoint: { max: 768, min: 590 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 550, min: 435 },
      items: 3,
      slidesToSlide: 2,
    },
    screen: {
      breakpoint: { max: 435, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const [series, setSeries] = useState([]);

  const baseUrl = apiConfig.baseUrl;
  const API_KEY = apiConfig.API_KEY;
  const url = baseUrl + "/trending/tv/day?language=en-US&api_key=" + API_KEY;

  useEffect(() => {
    const getSeries = async () => {
      const res = await axios.get(url);
      const data = res.data;
      setSeries(data.results);
    };
    getSeries();
  }, []);

  return (
    <Carousel responsive={responsive} customTransition="all .5s">
      {series.map((tv) => (
        <TSCard tv={tv} />
      ))}
    </Carousel>
  );
};

export default TSCarousel;