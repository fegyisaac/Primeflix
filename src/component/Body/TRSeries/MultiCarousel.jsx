import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import apiConfig from "../../api/apiConfig";

const MultiCarousel = () => {
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

  const [topRated, setTopRated] = useState([]);

  const baseUrl = apiConfig.baseUrl;
  const API_KEY = apiConfig.API_KEY;
  const url = baseUrl + "/tv/top_rated?language=en-US&api_key=" + API_KEY;

  const getRatedTV = async () => {
    const res = await axios.get(url);
    const data = res.data;
    setTopRated(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getRatedTV();
  }, []);

  // https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1
  return (
    <Carousel responsive={responsive} customTransition="all .5s">
      {topRated.map((rated) => (
        <Card rated={rated} />
      ))}
    </Carousel>
  );
};

export default MultiCarousel;
