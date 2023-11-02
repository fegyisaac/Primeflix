import { useRef, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const DesktopInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Series");

  const options = ["All", "Movies", "Series"];
  return (
      <div className="relative shadow-sm sm:top-0 outline-none">
        <div className="pointer-events-none absolute inset-y-0 left-0 items-center h-full flex_center pl-[6px]">
          <span className="text-gray-600 text-[21px]">
            <AiOutlineSearch />
            
          </span>
        </div>
        <input
          type="text"
          // value={"desktop"}
          onChange={() => ""}
          className="outline-none text-[16px] block w-full sm:w-[230px] xsm:w-[280px] xmd:w-[320px] lg:w-[360px] border-none rounded-3xl py-[7px] pl-[27px] pr-[73px] text-gray-900 placeholder:text-gray-600 leading-[9px]" 
          placeholder="Search..."
        />
         <div className="absolute right-[3px] top-0 flex_center h-full py-[2px]">
          <div className="relative text-white bg-black flex_center flex-col w-[70px] h-full rounded-3xl">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-[12px]  transition-all duration-700  flex_btw items-center h-full w-full px-[8px]"
            >
              <p>{selected}</p>
              {!isOpen ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
            </button>
            <div>
              {isOpen && (
                <div className="bg-green-500 top-[110%] absolute z-20 left-1/2 -translate-x-1/2 p-1  text-[15px] rounded-sm">
                  {options.map((option) => (
                    <p
                      key={option}
                      onClick={(e) => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                      className="hover:bg-green-700 py-[1px] px-[5px] rounded-sm duration-200 cursor-pointer"
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
  );
};

export default DesktopInput;
