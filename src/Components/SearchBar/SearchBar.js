import React, { useState } from "react";
import { addDays } from "date-fns";

// Components
import { DateRangeInput } from "./Inputs/DateRangeInput";
import { DestinationCityInput } from "./Inputs/DestinationCityInput";
import PplInput from "./Inputs/PplInput";

const SearchBar = () => {
  // Set Destination
  const [searchPlace, setSearchPlace] = useState({});

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

  return (
    <div className="bg-orange-400 p-1 rounded-md flex gap-2 mt-5 z-10">
      <ul className="w-full text-zinc-600 grid grid-cols-3 gap-2">
        {/* Destination */}
        <DestinationCityInput
          searchPlace={searchPlace}
          setSearchPlace={setSearchPlace}
        />

        {/* date range Picker */}
        <DateRangeInput date={date} setDate={setDate} />

        {/* How many persons */}
        <PplInput person={person} setPerson={setPerson} />
      </ul>

      <button className="bg-indigo-500 px-2 py-1 rounded-md font-bold text-xl text-white transition-all hover:bg-indigo-800">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
