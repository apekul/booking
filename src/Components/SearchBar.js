import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import moment from "moment/moment";
// Icons
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SearchBar = () => {
  const dateRef = useRef();
  const personRef = useRef();

  // Destination
  const [place, setPlace] = useState("");

  // Persons
  const [showPerson, setShowPerson] = useState(false);
  const [person, setPerson] = useState({ adults: 1, children: 0, room: 1 });

  // Date Range
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // Increment/Decrement Person
  const IncrementPerson = (key) => {
    setPerson((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };
  const DecrementPerson = (key) => {
    if (key === "adults" || key === "room") {
      if (person[key] === 1) return;
      return setPerson((prev) => ({ ...prev, [key]: prev[key] - 1 }));
    }
    if (person[key] <= 0) return;
    setPerson((prev) => ({ ...prev, [key]: prev[key] - 1 }));
  };

  // Close DropDown Menu if cilcked outside of its container
  useEffect(() => {
    const handleClick = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
      if (personRef.current && !personRef.current.contains(event.target)) {
        setShowPerson(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [dateRef, personRef]);

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

        {/* How many persons */}
        <li className="relative select-none" ref={personRef}>
          <div
            className="w-full px-10 py-2 rounded-md bg-white cursor-pointer flex gap-2"
            onClick={() => setShowPerson(!showPerson)}
          >
            <p>
              {person.adults} adults · {person.children} children ·{" "}
              {person.room} room
            </p>
            <BsFillPersonFill className="absolute top-2 left-2 text-2xl" />
            {showPerson ? (
              <IoMdArrowDropup className="absolute top-2 right-2 text-2xl" />
            ) : (
              <IoMdArrowDropdown className="absolute top-2 right-2 text-2xl" />
            )}
          </div>
          {showPerson && (
            <ul className="absolute bg-white top-12 shadow-md transition-all w-full flex flex-col items-center">
              {Object.keys(person).map((v, i) => (
                <li
                  key={i}
                  className="flex w-full items-center justify-between px-10 h-16"
                >
                  <span>{v}</span>
                  <div className="flex gap-2 items-center font-bold border border-black">
                    <button
                      onClick={() => DecrementPerson(v)}
                      className={`flex items-center justify-center text-2xl p-2 transition-all hover:bg-blue-100
                      ${
                        person[v] <= 1 &&
                        v !== "children" &&
                        "cursor-not-allowed text-gray-300 hover:bg-white"
                      }
                      ${
                        person[v] <= 0 &&
                        v === "children" &&
                        "cursor-not-allowed text-gray-300 hover:bg-white"
                      }`}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="w-5 flex justify-center">{person[v]}</span>
                    <button
                      onClick={() => IncrementPerson(v)}
                      className="flex items-center justify-center text-2xl p-2 transition-all hover:bg-blue-100"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </li>
              ))}
              <li className="w-full">
                <button
                  onClick={() => setShowPerson(false)}
                  className="bg-indigo-500 px-2 py-1 w-full rounded-sm font-bold text-white transition-all hover:bg-indigo-800"
                >
                  Done
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <button className="bg-indigo-500 px-2 py-1 rounded-sm font-bold text-xl text-white transition-all hover:bg-indigo-800">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
