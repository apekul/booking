import React, { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

const SearchBar = () => {
  const [place, setPlace] = useState("");
  return (
    <div className="bg-orange-400 p-2 rounded-md flex gap-2">
      <ul className="w-full text-zinc-600 grid grid-cols-3 gap-2">
        <li className="relative">
          <input
            placeholder="Where are you going?"
            className="w-full px-10 py-2 rounded-md"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <MdOutlineTravelExplore className="absolute top-2 left-2 text-2xl" />
        </li>

        <li className="relative">
          <input
            type="date"
            placeholder="Check-in date ---- Check-out date"
            className="w-full px-10 py-2 rounded-md"
          />
          <RiCalendar2Line className="absolute top-2 left-2 text-2xl" />
        </li>

        <li className="relative">
          <input
            placeholder="2 adults - 0 children - 1 room"
            className="w-full px-10 py-2 rounded-md"
          />
          <BsFillPersonFill className="absolute top-2 left-2 text-2xl" />
        </li>
      </ul>

      <button className="bg-indigo-500 px-2 py-1 rounded-sm font-bold text-xl text-white transition-all hover:bg-indigo-800">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
