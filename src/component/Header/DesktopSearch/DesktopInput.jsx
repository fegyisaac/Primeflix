import { useEffect, useRef, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DesktopSearchFeed from "./DesktopSearchFeed";

const DesktopInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Series");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const optionRef = useRef(null);

  const options = ["All", "Movies", "Series"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (!optionRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative shadow-sm  outline-none">
      <div className="pointer-events-none absolute inset-y-0 left-0 items-center h-full flex_center pl-[6px]">
        <span className="text-gray-600 text-[21px]">
          <AiOutlineSearch />
        </span>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="outline-none text-[15px] block w-full leading-6 xmd:w-[320px] lg:w-[360px] border-none rounded-3xl py-[4px] pl-[28px] pr-[79px] text-gray-900 placeholder:text-gray-600"
        placeholder="Search..."
      />
      {/* option */}
      <div className="absolute right-[3px] top-0 flex_center h-full py-[2px]">
        <div className="relative text-white bg-black flex_center flex-col w-[70px] h-full rounded-3xl">
          <div
            onClick={(e) => {
              e.preventDefault();
              setIsOpen((prev) => !prev);
            }}
            className="text-[12px] cursor-pointer transition-all duration-700 z-50 flex_btw items-center h-full w-full px-[8px]"
          >
            <p>{selected}</p>
            {!isOpen ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />}
          </div>
          <div ref={optionRef} className="z-30">
            {isOpen ? (
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
            ) : null}
          </div>
        </div>
      </div>

      {searchTerm === "" ? (
        null
      ) : (
        <DesktopSearchFeed
          selected={selected}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}
    </form>
  );
};

export default DesktopInput;
