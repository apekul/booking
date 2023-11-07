import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import moment from "moment/moment";
import CityList from "../../city.list.json";

// Components
import { UpdatePersonMenu } from "./UpdatePersonMenu";

// Icons
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import PlaceDropdown from "./PlaceDropdown";

const SearchBar = () => {
  const dateRef = useRef();
  const personRef = useRef();
  const placeRef = useRef();

  // Destination
  const [showPlace, setShowPlace] = useState(false);
  const [placeList, setPlaceList] = useState([]);
  const [place, setPlace] = useState("");
  const [searchPlace, setSearchPlace] = useState({});

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

  const updateInput = (e) => {
    const { value } = e.target;
    setPlace(value);
    if (value.length > 0) {
      fetchCities(value);
    } else setPlaceList([]);
  };

  const fetchCities = (value) => {
    let arr = [];
    for (let city of CityList) {
      if (arr.length >= 5) break;
      if (city.name.toLowerCase().startsWith(value.toLowerCase())) {
        arr.push(city.id);
      }
    }
    return setPlaceList(arr);
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
    <div className="bg-orange-400 p-2 rounded-md flex gap-2">
      {/* Destination */}
      <ul className="w-full text-zinc-600 grid grid-cols-3 gap-2">
        <li
          className="relative"
          ref={placeRef}
          onClick={() => setShowPlace(!showPlace)}
        >
          <div>
            <input
              placeholder="Where are you going?"
              className="w-full px-10 py-2 rounded-md"
              value={place}
              onChange={(e) => updateInput(e)}
            />
            <MdOutlineTravelExplore className="absolute top-2 left-2 text-2xl cursor-pointer" />
          </div>
          {showPlace &&
            (placeList.length <= 0 ? (
              <PlaceDropdown
                list={[3080866, 3085151, 756135, 3094802]}
                header="Popular destination"
                place={place}
                setPlace={setPlace}
                setSearchPlace={setSearchPlace}
              />
            ) : (
              <PlaceDropdown
                list={placeList}
                place={place}
                setPlace={setPlace}
                setSearchPlace={setSearchPlace}
              />
            ))}
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
            <UpdatePersonMenu
              person={person}
              setPerson={setPerson}
              setShowPerson={setShowPerson}
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

export default SearchBar;
