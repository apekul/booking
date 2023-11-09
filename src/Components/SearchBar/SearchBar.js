import React, { useState, useRef, useEffect } from "react";
import { addDays } from "date-fns";

// Components
import { DateRangeInput } from "./Inputs/DateRangeInput";
import { DestinationCityInput } from "./Inputs/DestinationCityInput";
import PplInput from "./Inputs/PplInput";

const SearchBar = () => {
  const dateRef = useRef();
  const personRef = useRef();
  const placeRef = useRef();

  // Set Destination
  const [showPlace, setShowPlace] = useState(false);
  const [searchPlace, setSearchPlace] = useState({});

  // Set how many persons
  const [showPerson, setShowPerson] = useState(false);
  const [person, setPerson] = useState({ adults: 1, children: 0, room: 1 });

  // Set Date Range
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // Close DropDown Menu if cilcked outside of its container
  useEffect(() => {
    const handleClick = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
      if (personRef.current && !personRef.current.contains(event.target)) {
        setShowPerson(false);
      }
      if (placeRef.current && !placeRef.current.contains(event.target)) {
        setShowPlace(false);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [dateRef, personRef, placeRef]);

  return (
    <div className="bg-orange-400 p-2 rounded-md flex gap-2 mt-5 z-10">
      {/* Destination */}
      <ul className="w-full text-zinc-600 grid grid-cols-3 gap-2">
        <li
          className="relative"
          ref={placeRef}
          onClick={() => setShowPlace(!showPlace)}
        >
          <DestinationCityInput
            showPlace={showPlace}
            searchPlace={searchPlace}
            setSearchPlace={setSearchPlace}
          />
        </li>

        {/* date range Picker */}
        <li className="relative" ref={dateRef}>
          <DateRangeInput
            date={date}
            setDate={setDate}
            showDatePicker={showDatePicker}
            setShowDatePicker={setShowDatePicker}
          />
        </li>

        {/* How many persons */}
        <li className="relative select-none" ref={personRef}>
          <PplInput
            showPerson={showPerson}
            setShowPerson={setShowPerson}
            person={person}
            setPerson={setPerson}
          />
        </li>
      </ul>

      <button className="bg-indigo-500 px-2 py-1 rounded-sm font-bold text-xl text-white transition-all hover:bg-indigo-800">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
