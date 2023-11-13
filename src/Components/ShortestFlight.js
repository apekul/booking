import React, { useState } from "react";
import { continent } from "../Assets/fakeObject";

export const ShortestFlight = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center justify-between">
        <span>
          <h1 className="font-bold text-2xl">Fly worldwide with Booking.com</h1>
          <p>Flights from wherever you are to wherever you want to go</p>
        </span>
      </span>
      <ul className="flex items-center select-none border-b ">
        {Object.keys(continent).map((v, i) => (
          <li
            key={i}
            className={`cursor-pointer transition-all border-b-2 border-white p-4 hover:bg-zinc-100
            ${value === v && "border-indigo-500 border-b-2 bg-zinc-100"}`}
            onClick={() => setValue(v)}
          >
            {v.replace("_", " ")}
          </li>
        ))}
      </ul>

      <ul className="py-5 flex items-center flex-wrap gap-10">
        {continent[value]?.flights?.map((v, i) => (
          <li className="flex items-center gap-2 cursor-pointer">
            <img
              src={v.img}
              alt="flightImage"
              className="w-16 h-16 object-cover rounded-md"
            />
            <span className="text-sm">
              <p className="font-bold">
                {v.from} to {v.to}
              </p>
              <p className="">Shortest flight time: {v.time}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortestFlight;
