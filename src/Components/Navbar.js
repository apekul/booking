import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Icons
import { TbPlaneInflight } from "react-icons/tb";
import { FaBed, FaCarAlt } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { MdAttractions } from "react-icons/md";

const navLinks = [
  { name: "stays", icon: <FaBed /> },
  { name: "flights", icon: <IoAirplane /> },
  { name: "car-rentals", icon: <FaCarAlt /> },
  { name: "attractions", icon: <MdAttractions /> },
];
export const Navbar = ({ title, subtitle, img }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section
      id="navbar"
      className={`bg-[#2C2C54] text-white bg-cover bg-center `}
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Navbar buttons */}
      <div className="Container flex flex-col">
        <ul className="py-5 flex items-center justify-between">
          <li
            className="flex items-center gap-2 text-xl cursor-pointer transition-all hover:text-indigo-100"
            onClick={() => navigate("/")}
          >
            <TbPlaneInflight />
            <p>Booking</p>
          </li>
          <li className="flex gap-3 items-center font-bold text-sm">
            <button className="bg-white px-2 py-1 rounded-sm text-black transition-all hover:bg-gray-300">
              Register
            </button>
            <button className="bg-white px-2 py-1 rounded-sm text-black transition-all hover:bg-gray-300">
              Login
            </button>
          </li>
        </ul>

        {/* text container */}
        {title && (
          <span className="py-5 lg:py-10">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-3xl text-gray-300">{subtitle}</p>
          </span>
        )}

        {/*  */}
        <ul
          className={`text-xl w-fit flex flex-wrap gap-4 ${
            title ? "py-5" : "pb-5"
          }`}
        >
          {navLinks.map((link, i) => (
            <li
              key={i}
              className={`cursor-pointer px-3 py-1 rounded-full flex items-center gap-2 bg-gray-100 transition-all hover:bg-opacity-10
            ${
              location.pathname.split("/")[1] === link.name
                ? "border-white bg-opacity-10  border-2 "
                : "bg-opacity-0"
            }`}
              onClick={() => {
                return navigate("/" + link.name);
              }}
            >
              {link.icon}
              <p className="hidden lg:block">{link.name.replace("-", " ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
