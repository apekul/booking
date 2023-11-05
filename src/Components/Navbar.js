import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { TbPlaneInflight } from "react-icons/tb";
import { FaBed, FaCarAlt } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { MdAttractions } from "react-icons/md";
import { BiSolidTaxi } from "react-icons/bi";

export const Navbar = () => {
  const [selection, setSelection] = useState("StaysBtn");
  const navigate = useNavigate();

  return (
    <section id="navbar" className="bg-[#2C2C54] text-white pb-5">
      {/* Navbar buttons */}
      <div className="Container flex flex-col gap-5">
        <ul className="py-5 flex items-center justify-between">
          <li className="flex items-center gap-2 text-xl cursor-pointer transition-all hover:text-indigo-100">
            <TbPlaneInflight />
            <p>Booking</p>
          </li>
          <li className="flex gap-3 items-center font-bold">
            <button>List your property</button>
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
          <h1 className="text-5xl font-bold">Plan your travel</h1>
          <p className="text-3xl text-gray-300">
            Search for a destination at lower prices
          </p>
        </span>

        {/*  */}
        <ul className="text-xl py-5 w-fit flex gap-4">
          <li
            id="StaysBtn"
            className={`cursor-pointer px-3 py-1 rounded-full flex items-center gap-2 border-2 border-[#2C2C54] bg-gray-100 transition-all hover:bg-opacity-10
            ${
              selection === "StaysBtn"
                ? "border-white bg-opacity-10"
                : "bg-opacity-0"
            }`}
            onClick={(e) => {
              setSelection(e.currentTarget.id);
              return navigate("/");
            }}
          >
            <FaBed />
            <p>Stays</p>
          </li>

          <li
            id="FlightsBtn"
            className={`cursor-pointer px-3 py-1 rounded-full flex items-center gap-2 border-2 border-[#2C2C54] bg-gray-100 transition-all hover:bg-opacity-10
            ${
              selection === "FlightsBtn"
                ? "border-white bg-opacity-10"
                : "bg-opacity-0"
            }`}
            onClick={(e) => {
              setSelection(e.currentTarget.id);
              return navigate("/flights");
            }}
          >
            <IoAirplane />
            <p>Flights</p>
          </li>

          <li
            id="CarRentBtn"
            className={`cursor-pointer px-3 py-1 rounded-full flex items-center gap-2 border-2 border-[#2C2C54] bg-gray-100 transition-all hover:bg-opacity-10
            ${
              selection === "CarRentBtn"
                ? "border-white bg-opacity-10"
                : "bg-opacity-0"
            }`}
            onClick={(e) => {
              setSelection(e.currentTarget.id);
              return navigate("/");
            }}
          >
            <FaCarAlt />
            <p>Car rentals</p>
          </li>

          <li
            id="AttractionBtn"
            className={`cursor-pointer px-3 py-1 rounded-full flex items-center gap-2 border-2 border-[#2C2C54] bg-gray-100 transition-all hover:bg-opacity-10
            ${
              selection === "AttractionBtn"
                ? "border-white bg-opacity-10"
                : "bg-opacity-0"
            }`}
            onClick={(e) => {
              setSelection(e.currentTarget.id);
              return navigate("/");
            }}
          >
            <MdAttractions />
            <p>Attractions</p>
          </li>

          <li
            id="TaxiBtn"
            className={`cursor-pointer px-3 py-1 rounded-full flex items-center gap-2 border-2 border-[#2C2C54] bg-gray-100 transition-all hover:bg-opacity-10
            ${
              selection === "TaxiBtn"
                ? "border-white bg-opacity-10"
                : "bg-opacity-0"
            }`}
            onClick={(e) => {
              setSelection(e.currentTarget.id);
              return navigate("/");
            }}
          >
            <BiSolidTaxi />
            <p>Airport taxis</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
