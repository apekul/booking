import React, { useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { BiSolidPlaneTakeOff, BiSolidPlaneLand } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const FlightFromToInput = ({ flight, setFlight }) => {
  const [rotate, setRotate] = useState(false);
  const updateFlight = (e, key) => {
    setFlight((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const swapFlight = () => {
    setFlight((prev) => ({ from: prev.to, to: prev.from }));
    setRotate(!rotate);
  };

  return (
    <>
      <li className="relative">
        <div className="flex">
          <input
            placeholder="Where from?"
            className="w-full px-10 py-3 rounded-md"
            value={flight.from}
            onChange={(e) => updateFlight(e, "from")}
          />
          <BiSolidPlaneTakeOff className="absolute top-3 left-2 text-2xl cursor-pointer" />
          {flight.from && (
            <RxCross2
              className="absolute top-4 right-12 text-lg cursor-pointer"
              onClick={() => setFlight((prev) => ({ ...prev, from: "" }))}
            />
          )}
          <button
            onClick={() => swapFlight()}
            className="bg-white ml-2 text-blue-500 py-2 px-1 text-2xl rounded-md"
          >
            <HiOutlineSwitchHorizontal
              className={`transition-all ${rotate && "rotate-180"}`}
            />
          </button>
        </div>
      </li>

      {/* Where to */}
      <li className="relative">
        <div className="flex">
          <input
            placeholder="Where to?"
            className="w-full px-10 py-3 rounded-md"
            value={flight.to}
            onChange={(e) => updateFlight(e, "to")}
          />
          <BiSolidPlaneLand className="absolute top-3 left-2 text-2xl cursor-pointer" />
          {flight.to && (
            <RxCross2
              className="absolute top-4 right-2 text-lg cursor-pointer"
              onClick={() => setFlight((prev) => ({ ...prev, to: "" }))}
            />
          )}
        </div>
      </li>
    </>
  );
};

export default FlightFromToInput;
