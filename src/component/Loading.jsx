import React from "react";

const Loading = () => {
  return (
    <div className="bg-blue-500  w-[120px] h-[230px] card-ratio  rounded-xl">
      <div className="w-full h-[160px] xsm:h-[170px] animate-pulse rounded-xl flex_center ">
        <img
          src={""}
          className="rounded-md h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="py-1 px-[6px] mt-5">
        <p className="bg-gray-400 h-[10px] rounded-md animate-pulse w-full mb-3"></p>
        <p className="bg-gray-400 h-[10px] rounded-md animate-pulse w-full mb-3"></p>
      </div>
    </div>
  );
};

export default Loading;