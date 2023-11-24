import React, { useState } from "react";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { DateRangeInput } from "./Inputs/DateRangeInput";
import PickUpLocationInput from "./Inputs/PickUpLocationInput";
import TimeInput from "./Inputs/TimeInput";

const CarRentSearchBar = () => {
  const navigate = useNavigate();

  // Pickup Location
  const [pickUpLocation, setPickUpLocation] = useState("");

  // Set Date Range
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  // const [time, setTime] = useState({});

  return (
    <div className="bg-orange-400 p-1 rounded-md flex flex-col lg:flex-row gap-1 mt-5 z-10">
      <ul className="w-full text-zinc-600 lg:grid-cols-2 grid-flow-col gap-1 lg:grid flex flex-col">
        <PickUpLocationInput
          pickUpLocation={pickUpLocation}
          setPickUpLocation={setPickUpLocation}
        />
        <DateRangeInput
          date={date}
          setDate={setDate}
          label="Pick-up date - Drop-off date"
        />
        <li className="flex gap-1">
          <TimeInput label="Pick-up time" />
          <TimeInput label="Drop-off time" />
        </li>
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

export default CarRentSearchBar;
