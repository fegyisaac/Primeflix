import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "./Input";
import useMediaQuery from "../Hooks/useMediaQuery";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import InpDesktop from "./inpDesktop";
import InpMob from "./InpMob";
// import Desktop from "./DesktopInput";
import DesktopInput from "./DesktopInput";

const navMenu = [
  {
    id: 1,
    to: "/",
    name: "Home",
  },
  {
    id: 2,
    to: "movies",
    name: "Movies",
  },
  {
    id: 3,
    to: "series",
    name: "Series",
  },
  {
    id: 4,
    to: "advanced_search",
    name: "Advanced Search",
  },
];

const Header = () => {
  const [nav, setNav] = useState(false);
  const isTablet = useMediaQuery("(min-width: 480px)");
  const [isDesktop, setDesktop] = useState(window.innerWidth > 480);
  const [isMobile, setMobile] = useState(window.innerWidth < 480);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 480);
    setMobile(window.innerWidth <= 481);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  });

  return (
    <div className="bg-red-600 relative">
      <div className="container px-3 py-[10px] text-[22px] flex_btw items-center gap-7 xl:gap-1">
        <div
          onClick={() => setNav((prev) => !prev)}
          className="xmd:hidden text-white cursor-pointer"
        >
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <div className="xmd:hidden text-white bg-black absolute top-[100%] left-1 rounded-md z-40">
          {nav && (
            <div className="text-[16px] p-2">
              {navMenu.map((menu) => (
                <NavLink key={menu.id} to={menu.to}>
                  <li
                    onClick={(e) => setNav(false)}
                    className="cursor-pointer block py-[2px] hover:bg-gray-900 p-[3px] rounded-md"
                  >
                    {menu.name}
                  </li>
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div className="text-orenge font-semibold uppercase">
          <NavLink to="/">
            <div>
              Prime<span className="text-tertiary">flix</span>
            </div>
          </NavLink>
        </div>
        <ul className="hidden text-[15px] text-white w-[600px] xmd:block">
          {navMenu.map((menu) => (
            <NavLink key={menu.id} to={menu.to}>
              <li className="cursor-pointer inline mr-4">{menu.name}</li>
            </NavLink>
          ))}
        </ul>
        {/* {isTablet ? <Input setNav={setNav} /> : <p>hello</p>} */}
        {isDesktop && <DesktopInput />}
        {/* {isMobile && <InpMob /> } */}
        {/* <InpDesktop /> */}
        {/* <InpMob /> */}
        {/* <Desktop /> */}
      </div>
    </div>
  );
};
export default Header;
