import { useEffect, useRef, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import MobSearchResults from "./MobSearchResults";
import { useNavigate } from "react-router-dom";

const MobileInput = ({ setNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Series");
  const [searchIcon, setSearchIcon] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const optionRef = useRef(null);

  const options = ["All", "Movies", "Series"];

  const submitSearch = (e) => {
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
    if (!optionRef.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setSearchIcon((prev) => !prev);
          setNav(false);
        }}
        className="text-white xsm:hidden cursor-pointer flex_center"
      >
        <AiOutlineSearch className="text-2xl" />
      </button>

      {searchIcon && (
        <div
          ref={optionRef}
          className="absolute z-20 top-[115%] left-1/2 max-h-[400px] -translate-x-1/2 w-[83%] min-w-[300px] shadow-sm outline-none"
        >
          <div
            className={`bg-purple-600 px-2 py-1 rounded-t-3xl ${
              searchTerm === ""
                ? "rounded-b-3xl"
                : "rounded-none border-b-[1px] border-gray-700"
            }`}
          >
            <form
              onSubmit={submitSearch}
              className="relative top-0 w-full my-[3px]"
            >
              <div className="pointer-events-none absolute inset-y-0 left-[8px] items-center h-full flex_center">
                <span className="text-gray-500 text-[22px]">
                  <AiOutlineSearch />
                </span>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=" outline-none block w-full border-none rounded-3xl py-1 pl-8 pr-[77px] text-gray-900 placeholder:text-gray-800 text-[16px] leading-[25px]"
                placeholder="Search..."
              />
              {/* option name */}
              <div className="absolute right-[3px] top-0 w-[67px] h-full py-[3px]">
                <div className="relative text-white bg-black flex flex-col items-center w-full h-full rounded-3xl">
                  <div
                    onClick={() => {
                      setIsOpen((prev) => !prev);
                    }}
                    className="text-[11px] flex_btw items-center h-full w-full px-[6px]"
                  >
                    <p className="cursor-pointer select-none">{selected}</p>
                    {isOpen ? (
                      <BsFillCaretUpFill className="text-[9px]" />
                    ) : (
                      <BsFillCaretDownFill className="text-[9px]" />
                    )}
                  </div>
                  {/* option li */}
                  {isOpen && (
                    <div
                      // ref={optionRef}
                      className="bg-green-500 top-[110%] absolute z-[900] left-1/2 -translate-x-1/2 p-1 text-[16px] rounded-sm"
                    >
                      {options.map((option) => (
                        <li
                          key={option}
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                          }}
                          className="hover:bg-green-700 py-[1px] px-[3px] rounded-sm duration-[300ms] cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="min-h-[0px] bg-purple-600">
            {searchTerm === "" ? null : (
              <div>
                <div className="h-[323px]">
                  <MobSearchResults
                    submitSearch={submitSearch}
                    selected={selected}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                  />
                </div>

                <div className=" w-full grid place-items-center">
                  <button
                    onClick={submitSearch}
                    className="my-1 bg-green-600 hover:bg-green-700 duration-200 text-[14px] text-center p-1 rounded-md"
                  >
                    See more Results...
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileInput;
