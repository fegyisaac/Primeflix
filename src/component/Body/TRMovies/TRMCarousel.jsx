import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TRMCard } from "../..";
import Loading from "../../Loading";
import apiConfig from "../../api/apiConfig";

const TRMCarousel = () => {
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
  const [isLoading, setIsLoading] = useState(false);

  const baseUrl = apiConfig.baseUrl;
  const API_KEY = apiConfig.API_KEY;
  const url = baseUrl + "/movie/top_rated?language=en-US&api_key=" + API_KEY;

  useEffect(() => {
    setIsLoading(true);

    try {
      const getTopRated = async () => {
        const res = await axios.get(url);
        const data = res.data;
        setTopRated(data.results);
        console.log("Data from TRM carr");
        setIsLoading(false);
      };
      getTopRated();
    } catch (err) {
      console.log(err);
    }
  }, []);


  return (
    <Carousel responsive={responsive} customTransition="all .5s">
      {isLoading
        ? Array(8)
            .fill(0)
            .map(() => <Loading />)
        : topRated.map((rated) => <TRMCard rated={rated} />)}
    </Carousel>
  );
};

export default TRMCarousel;
