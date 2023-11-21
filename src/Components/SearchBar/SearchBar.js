import React, { useState, useEffect } from "react";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";

// Components
import { DateRangeInput } from "./Inputs/DateRangeInput";
import { DestinationCityInput } from "./Inputs/DestinationCityInput";
import PplInput from "./Inputs/PplInput";

import { MdOutlineTravelExplore } from "react-icons/md";

const SearchBar = () => {
  const navigate = useNavigate();

  // Set Destination
  const [searchPlace, setSearchPlace] = useState({});
  const [error, setError] = useState("");

  // Set how many persons
  const [person, setPerson] = useState({ adults: 1, children: 0, room: 1 });

  // Set Date Range
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      return searchPlace.name
        ? navigate(`/stays/${searchPlace?.name}`)
        : setError("City not found");
    }
  };
  return (
    <div className="bg-orange-400 p-1 rounded-md flex flex-col lg:flex-row gap-2 mt-5 z-10">
      <ul className="w-full text-zinc-600 grid-cols-3 grid-flow-col gap-2 lg:grid flex flex-col">
        {/* Destination */}
        <DestinationCityInput
          icon={<MdOutlineTravelExplore />}
          searchPlace={searchPlace}
          setSearchPlace={setSearchPlace}
          handleKeyDown={handleKeyDown}
        />

        {/* date range Picker */}
        <DateRangeInput date={date} setDate={setDate} />

        {/* How many persons */}
        <PplInput person={person} setPerson={setPerson} />
      </ul>

      <button
        className={` px-2 py-1 rounded-md font-bold text-xl text-white transition-all bg-indigo-500 ${
          searchPlace.name
            ? " hover:bg-indigo-800 cursor-pointer"
            : "cursor-not-allowed grayscale"
        }`}
        disabled={!searchPlace.name}
        onClick={() =>
          searchPlace.name && navigate(`/stays/${searchPlace?.name}`)
        }
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
