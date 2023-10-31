import { useRef, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const options = ["All", "Movies", "Series"];

const Input = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Series");

  return (
    <div className="relative shadow-sm outline-none">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[5px]">
        <span className="text-gray-500">
          <AiOutlineSearch />
        </span>
      </div>
      <input
        type="text"
        value={""}
        onChange={() => ""}
        className="outline-none block w-[300px] xmd:w-[350px] border-none rounded-3xl py-1.5 pl-7 pr-1 text-gray-900 placeholder:text-gray-800 sm:text-sm sm:leading-5"
        placeholder="Search..."
      />
      <div className="dropdown absolute right-1 top-0 max-w-[90px] flex items-center h-full py-[3px]">
        <div className="relative bg-black flex flex-col items-center w-[67px] h-full rounded-3xl">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-white text-[11px] flex_btw items-center h-full w-full px-[6px]"
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
  );
};

export default Input;
