import React, { useState, useRef } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import { RiCalendar2Line } from "react-icons/ri";

import moment from "moment/moment";

const FlightSearchBar = () => {
  const dateRef = useRef();
  const placeRef = useRef();

  // Destination
  const [showPlace, setShowPlace] = useState(false);
  const [placeList, setPlaceList] = useState([]);
  const [place, setPlace] = useState("");
  const [searchPlace, setSearchPlace] = useState({});

  // Date Range
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="bg-orange-400 p-2 rounded-md flex gap-2 mt-5 z-10">
      <ul className="w-full text-zinc-600 grid grid-cols-3 gap-2">
        {/* Search Airport */}

        {/* date range Picker */}
        <li className="relative" ref={dateRef}>
          <div
            className="w-full px-10 py-2 rounded-md bg-white cursor-pointer font-bold"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            {moment(date[0].startDate).format("ddd D MMM ")} -{" "}
            {moment(date[0].endDate).format("ddd D MMM")}
            <RiCalendar2Line className="absolute top-2 left-2 text-2xl" />
          </div>
          {showDatePicker && (
            <DateRange
              className="absolute top-12 shadow-md transition-all"
              onChange={(item) => setDate([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={date}
              direction="horizontal"
            />
          )}
        </li>
      </ul>

      <button className="bg-indigo-500 px-2 py-1 rounded-sm font-bold text-xl text-white transition-all hover:bg-indigo-800">
        Search
      </button>
    </div>
  );
};

export default FlightSearchBar;
