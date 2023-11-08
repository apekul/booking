import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Icons
import { TbPlaneInflight } from "react-icons/tb";
import { FaBed, FaCarAlt } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { MdAttractions } from "react-icons/md";
import { BiSolidTaxi } from "react-icons/bi";

const navLinks = [
  { name: "stays", icon: <FaBed /> },
  { name: "flights", icon: <IoAirplane /> },
  { name: "car-rentals", icon: <FaCarAlt /> },
  { name: "attractions", icon: <MdAttractions /> },
  { name: "airport-taxi", icon: <BiSolidTaxi /> },
];

export const Navbar = ({ title, subtitle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section id="navbar" className="bg-[#2C2C54] text-white ">
      {/* Navbar buttons */}
      <div className="Container flex flex-col">
        <ul className="py-5 flex items-center justify-between">
          <li className="flex items-center gap-2 text-xl cursor-pointer transition-all hover:text-indigo-100">
            <TbPlaneInflight />
            <p>Booking</p>
          </li>
          <li className="flex gap-3 items-center font-bold">
            <button className="bg-white px-2 py-1 rounded-sm text-black transition-all hover:bg-gray-300">
              Register
            </button>
            <button className="bg-white px-2 py-1 rounded-sm text-black transition-all hover:bg-gray-300">
              Login
            </button>
          </li>
        </ul>

        {/* text container */}
        <span>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-3xl text-gray-300">{subtitle}</p>
        </span>

        {/*  */}
        <ul className={`text-xl w-fit flex gap-4 ${title ? "py-5" : "pb-5"}`}>
          {navLinks.map((link, i) => (
            <li
              className={`cursor-pointer px-3 py-1 rounded-full flex items-center gap-2 border-2 border-[#2C2C54] bg-gray-100 transition-all hover:bg-opacity-10
            ${
              location.pathname.split("/")[1] === link.name
                ? "border-white bg-opacity-10"
                : "bg-opacity-0"
            }`}
              onClick={(e) => {
                return navigate("/" + link.name);
              }}
            >
              {link.icon}
              <p>{link.name.replace("-", " ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
