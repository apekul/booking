import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const UpdatePersonMenu = ({ person, setPerson, setShowPerson }) => {
  // Increment/Decrement person
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

  return (
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
  );
};

export default UpdatePersonMenu;
