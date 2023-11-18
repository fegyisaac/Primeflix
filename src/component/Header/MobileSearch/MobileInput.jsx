import { useRef, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import MobSearchResults from "./MobSearchResults";

const options = ["All", "Movies", "Series"];

const MobileInput = ({ setNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Series");
  const [search, setSearch] = useState(false);

  return (
    <div>
      <button
        onClick={(e) => {
          setSearch((prev) => !prev);
          setNav(false);
        }}
        className="text-white xsm:hidden cursor-pointer flex_center"
      >
        <AiOutlineSearch className="text-2xl" />
      </button>
      {search && (
        <div className="absolute z-20 top-[115%] left-1/2 max-h-[400px] bg-blue-400 -translate-x-1/2 w-[92%] overflow-hiddenshadow-sm outline-none">
          <div className="fixed top-0 w-full mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-[8px] items-center h-full flex_center">
              <span className="text-gray-500 text-[22px]">
                <AiOutlineSearch />
              </span>
            </div>
            <input
              type="text"
              // value={"mobile"}
              onChange={() => ""}
              className=" outline-none block w-full border-none rounded-3xl py-1 pl-8 pr-[77px] text-gray-900 placeholder:text-gray-800 text-[16px] leading-[25px]"
              placeholder="Search..."
            />
            <div className="absolute right-[3px] top-0 w-[67px] h-full py-[3px]">
              <div className="relative text-white bg-black flex flex-col items-center w-full h-full rounded-3xl">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="text-[11px] flex_btw items-center h-full w-full px-[6px]"
                >
                  <p>{selected}</p>
                  {!isOpen ? (
                    <BsFillCaretDownFill className="text-[9px]" />
                  ) : (
                    <BsFillCaretUpFill className="text-[9px]" />
                  )}
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
                          className="hover:bg-green-700 py-[1px] px-[3px] rounded-sm duration-[300ms] cursor-pointer"
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

          <div className=" overflow-y-scroll h-[360px] ml-1 bg-gray-800 scrollbar px-1  mt-[40px]">
            <MobSearchResults />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileInput;
