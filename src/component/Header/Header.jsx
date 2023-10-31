import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "./Input";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
    to: "search",
    name: "Advanced Search",
  },
];

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-red-600 relative">
      <div className="container py-4 px-4 text-[22px] flex_btw items-center gap-5">
        <div
          onClick={() => setNav((prev) => !prev)}
          className="xmd:hidden text-white cursor-pointer"
        >
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <div className="xmd:hidden text-white bg-black absolute top-[100%] left-1 rounded-md">
          {nav && (
            <div className="text-[16px] p-2">
              {navMenu.map((menu) => (
                <NavLink key={menu.id} to={menu.to}>
                  <li onClick={(e) => setNav(false)} className="cursor-pointer block py-[2px] hover:bg-gray-900 p-[3px] rounded-md">{menu.name}</li>
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
        <ul className="hidden text-[17px] text-white w-[600px] xmd:block">
          {navMenu.map((menu) => (
            <NavLink key={menu.id} to={menu.to}>
              <li className="cursor-pointer inline mr-4">{menu.name}</li>
            </NavLink>
          ))}
        </ul>

        <Input />
      </div>
    </div>
  );
};
// flex_btw gap-4 items-center
export default Header;
