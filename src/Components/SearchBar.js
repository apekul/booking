import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import moment from "moment/moment";
// Icons
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

const SearchBar = () => {
  // Date Ref
  const dateRef = useRef();

  // Destination
  const [place, setPlace] = useState("");

  // Show Date Range
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Date Range
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // Close Date picker menu if clicked outside
  useEffect(() => {
    const handleClick = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [dateRef]);

  return (
    <div className="bg-orange-400 p-2 rounded-md flex gap-2">
      {/* Destination */}
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

        {/* date range Picker */}
        <li className="relative" ref={dateRef}>
          <div
            className="w-full px-10 py-2 rounded-md bg-white cursor-pointer"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            {moment(date[0].startDate).format("ddd D MMM ")} -{" "}
            {moment(date[0].endDate).format("ddd D MMM")}
            <RiCalendar2Line className="absolute top-2 left-2 text-2xl" />
          </div>
          <DateRange
            className={`absolute top-12 shadow-md transition-all ${
              showDatePicker ? "visible" : "invisible"
            }`}
            onChange={(item) => setDate([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={date}
            direction="horizontal"
          />
        </li>

        {/* How many persons */}
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
