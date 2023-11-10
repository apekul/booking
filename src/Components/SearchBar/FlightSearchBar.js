import React, { useState } from "react";
import { addDays } from "date-fns";
import { DateRangeInput } from "./Inputs/DateRangeInput";

import FlightFromToInput from "./Inputs/FlightFromToInput";
import PplInput from "./Inputs/PplInput";

// Personinput
// Many destination plan input
// Class picker
// round trip flight/one way

const FlightSearchBar = () => {
  // flight from/to
  const [flight, setFlight] = useState({ from: "", to: "" });

  // Set how many persons
  const [person, setPerson] = useState({ adults: 1, children: 0, room: 1 });

  // Date Range
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="flex gap-2 flex-col mt-5">
      <span>
        <h1 className="text-3xl font-bold">
          Compare and book flights with ease
        </h1>
        <p>Discover your next dream destination</p>
      </span>

      <div className="flex gap-4">
        <span className="flex items-center gap-1">
          <input
            type="checkbox"
            id="RoundTrip"
            name="RoundTrip"
            value="RoundTrip"
          />
          <label className="cursor-pointer" for="RoundTrip">
            Round trip
          </label>
        </span>
        <span className="flex items-center gap-1">
          <input type="checkbox" id="OneWay" name="OneWay" value="OneWay" />
          <label className="cursor-pointer" for="OneWay">
            One way
          </label>
        </span>
        <span className="flex items-center gap-1">
          <input
            type="checkbox"
            id="MultiCity"
            name="MultiCity"
            value="MultiCity"
          />
          <label className="cursor-pointer" for="MultiCity">
            Multi-city
          </label>
        </span>

        <select id="flightClass" name="flightClass" className="cursor-pointer">
          <option value="Economy">Economy</option>
          <option value="Premium economy">Premium economy</option>
          <option value="Business">Business</option>
          <option value="First class">First class</option>
        </select>
      </div>

      <div className="bg-orange-400 p-1 rounded-md flex gap-2 z-10">
        <ul className="w-full text-zinc-600 grid grid-flow-col gap-2">
          {/* Where from */}
          <FlightFromToInput flight={flight} setFlight={setFlight} />
          <DateRangeInput date={date} setDate={setDate} />
          <PplInput person={person} setPerson={setPerson} />
        </ul>

        <button className="bg-indigo-500 px-2 py-1 rounded-md font-bold text-xl text-white transition-all hover:bg-indigo-800">
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightSearchBar;
