import React from "react";
import star from "../../../img/star.svg";

const MobSearchResults = () => {
  const truncate = (str) => {
    return str.length > 300 ? str.substring(0, 212) + "..." : str;
  };

  return (
    <div className="min-h-[252px]">
      <div className="min-h-[85px] flex justify-start gap-3 pt-2 bg-green-400 border-b-[1px] border-black pb-2">
        <div className="min-h-full w-20 mx-auto rounded-md">
          <img src="" alt="" className="w-full rounded-md h-full bg-blue-600" />
        </div>
        <div className="flex-1 max-w-[90%] ">
          <h2 className="text-[15px] font-semibold">
            Spider-Man
            <span className="text-[14px] font-normal"> (4747)</span>
          </h2>
          <p className="text-[11px] line-clamp-3">
            {/* {truncate(`
                Lorem ipsum dolor sit amet consectetu sgb seb b s rtb rstbdb  dbdtfbsrdtbh nrsgtbsdrtbhr adipisicing elit. Dicta quos iste, voluptatem temporibus architecto provident? Quo modi dicta voluptas hic a, cupiditate inventore soluta, illo repellat sit suscipit reiciendis sapient
            `)} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga, omnis ipsum eius, ea iste quos quod ullam nobis consectetur voluptas hic veniam eum ipsa autem libero similique sint sequi?lor sit amet consectetur adipisicing elit. Molestiae fuga, omnis ipsum eius, ea iste quos quod ullam nobis consectetur voluptas hic veniam eum ipsa autem libero similique sint sequi?lor sit amet consectetur adipisicing elit. Molestiae fuga, omnis ipsum eius, ea iste quos quod ullam nobis consectetur voluptas hic veniam eum ipsa autem libero similique sint sequi?
          </p>

          <div className="flex_btw gap-1 pt-1">
            <div className="flex h-full items-center">
              <img src={star} alt="rating star" width={15} />
            </div>
            <p className="text-[12px]  text-center">
              <span className="text-[13px] font-semibold">6.7</span>/10
            </p>
            <p className="text-[13px] flex-1">9hr:1min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobSearchResults;
