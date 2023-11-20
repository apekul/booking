import React, { useState } from "react";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { MdAttractions } from "react-icons/md";

// Components
import { DateRangeInput } from "./Inputs/DateRangeInput";
import { DestinationCityInput } from "./Inputs/DestinationCityInput";

export const AttractionSearchBar = () => {
  const navigate = useNavigate();

  // Set Destination
  const [searchPlace, setSearchPlace] = useState({});

  // Set Date Range
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="bg-orange-400 p-1 rounded-md flex flex-col lg:flex-row gap-2 mt-5 z-10">
      <ul className="w-full text-zinc-600 grid-cols-2 grid-flow-col gap-2 lg:grid flex flex-col">
        {/* Destination */}
        <DestinationCityInput
          icon={<MdAttractions />}
          searchPlace={searchPlace}
          setSearchPlace={setSearchPlace}
        />

        {/* date range Picker */}
        <DateRangeInput date={date} setDate={setDate} />
      </ul>

      <button
        className="bg-indigo-500 px-2 py-1 rounded-md font-bold text-xl text-white transition-all hover:bg-indigo-800"
        onClick={() => navigate("/stays/Warsaw")}
      >
        Search
      </button>
    </div>
  );
};

export default AttractionSearchBar;
