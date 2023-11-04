import React from "react";
import star from '../../../img/star.svg';

const SliderCard = () => {
  // `/video/${movies.id}`
  return (
    <div className="flex_center h-full w-full">
      <div className="w-full mt-20 mb-10">
        <h1 className="uppercase text-[57px]">pirate sea</h1>
        <div className="flex_btw items-center w-[200px] mb-3">
          <img src={star} alt="rating star" width={"20"} />
          <p className="text-[14px] w-[45px] text-center mx-1">
            <span className="text-[15px] font-semibold">6.7</span>/10
          </p>
          <p className="flex-1 ml-1">2hr:22mins</p>
        </div>
        <p className="w-[630px] mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          laudantium fugit libero nam ex odit. Voluptates animi voluptatibus
          consequatur doloremque quidem dolorum cupiditate sequi sed minus in
          ut, voluptate iure.
        </p>
        <div className="mb-2 flex justify-start items-center flex-wrap w-[600px]">
          <h3 className="mr-5 text-yellow-600 font-semibold shadow-none">
            Staring:
          </h3>
          <div className="bg-red-500 w-20 h-20 mr-3 rounded-full grid place-items-center">
            <img src={star} alt="rating star" width={"20"} />
          </div>
          <div className="bg-red-500 w-20 h-20 mr-3 rounded-full grid place-items-center">
            <img src={star} alt="rating star" width={"20"} />
          </div>
          <div className="bg-red-500 w-20 h-20 mr-3 rounded-full grid place-items-center">
            <img src={star} alt="rating star" width={"20"} />
          </div>
          <div className="bg-red-500 w-20 h-20 mr-3 rounded-full grid place-items-center">
            <img src={star} alt="rating star" width={"20"} />
          </div>
        </div>
        <div className="mb-1 flex justify-start items-center flex-wrap w-[600px]">
          <h3 className="mr-5 text-yellow-600 font-semibold shadow-none">
            Genres:
          </h3>
          <p className="mr-2">Adventure</p>
          <p className="mr-2">Actions</p>
          <p className="mr-2">Comedy</p>
        </div>
        <div className="mb-1 flex justify-start items-center flex-wrap w-[600px]">
          <h3 className="mr-5 text-yellow-600 font-semibold shadow-none">
            Tags:
          </h3>
          <p className="mr-2">Adventure</p>
          <p className="mr-2">Horror</p>
          <p className="mr-2">Comedy</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
