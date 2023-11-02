import { useRef, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import useMediaQuery from "../Hooks/useMediaQuery";
import { AiOutlineSearch } from "react-icons/ai";

const options = ["All", "Movies", "Series"];

const InpMob = ({ setNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Series");
  const [search, setSearch] = useState(false);
  const isTablet = useMediaQuery("(min-width: 480px)");

  return (
    <div>
      <button
        onClick={(e) => {
          setSearch((prev) => !prev);
        //   setNav(false);
        }}
        className="text-white sm:hidden cursor-pointer flex_center"
      >
        <AiOutlineSearch className="text-2xl" />
      </button>
      {search && (
        <div className="absolute z-20 top-[115%] left-1/2 -translate-x-1/2 w-[92%] sm:w-full sm:relative shadow-sm sm:top-0 outline-none">
          <div className="pointer-events-none absolute inset-y-0 left-0 items-center h-full flex_center pl-[12px] sm:pl-[7px]  sm:flex">
            <span className="text-gray-500 text-[24px] sm:text-[20px]">
              <AiOutlineSearch />
              
            </span>
          </div>
          <input
            type="text"
            value={"mobile"}
            onChange={() => ""}
            className=" outline-none sm:block w-full sm:w-[230px] xmd:w-[300px] lg:w-[360px] border-none rounded-3xl py-1.5 pl-10 sm:pl-7 pr-1 text-gray-900 placeholder:text-gray-800 text-[17px] sm:text-sm leading-[9px] sm:leading-5"
            placeholder="Search..."
          />
          <div className="dropdown absolute right-1 top-0 sm:max-w-[90px] sm:flex sm:items-center h-full py-[3px]">
            <div className="relative bg-black flex flex-col items-center w-[73px] sm:w-[66px] h-full rounded-3xl">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-white text-[11px] flex_btw items-center h-full w-full px-[8px] sm:px-[6px]"
              >
                <p>{selected}</p>
                {!isOpen ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
              </button>
              <div>
                {isOpen && (
                  <div className="bg-green-500 top-[110%] absolute z-20 left-1/2 -translate-x-1/2 p-1 text-[16px] rounded-sm">
                    {options.map((option) => (
                      <p
                        key={option}
                        onClick={(e) => {
                          setSelected(option);
                          setIsOpen(false);
                        }}
                        className="hover:bg-green-700 py-[1px] px-[3px] rounded-sm duration-200 cursor-pointer"
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InpMob;
