import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export const ShortestFlight = ({ data, imgCover }) => {
  const [value, setValue] = useState(Object.keys(data.content)[0]);

  const nameUpperCase = (string) =>
    string
      .split("_")
      .map((v) => v[0].toUpperCase() + v.slice(1))
      .join(" ");

  return (
    <section className="flex flex-col gap-2">
      <span className="flex flex-col">
        <h1 className="font-bold text-2xl">{data.title}</h1>
        <p>{data.text}</p>
      </span>
      <ul className="flex items-center select-none border-b overflow-x-auto">
        {Object.keys(data.content).map((v, i) => (
          <li
            key={i}
            className={`cursor-pointer transition-all border-b-2 p-4 hover:bg-zinc-100
            ${
              value === v
                ? "border-indigo-500 border-b-2 bg-zinc-100"
                : "border-transparent "
            }`}
            onClick={() => setValue(v)}
          >
            <p className="whitespace-nowrap">{nameUpperCase(v)}</p>
          </li>
        ))}
      </ul>

      <ul
        className={`py-5 w-full flex items-center flex-wrap gap-5 ${
          imgCover
            ? "grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
            : "flex items-center flex-wrap"
        }`}
      >
        {data.content[value].map((v, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 cursor-pointer relative ${
              imgCover && "overflow-hidden rounded-md"
            } `}
          >
            <img
              src={v.img}
              alt="flightImage"
              className={`object-cover rounded-md  ${
                imgCover
                  ? "w-full h-40 transition-all hover:scale-110"
                  : "w-16 h-16"
              }`}
            />

            <span
              className={`text-sm  ${
                imgCover && "absolute bottom-2 left-2 text-white"
              }`}
            >
              <p className="font-bold">{v.title}</p>
              <p className="">{v.subtitle}</p>
              <p className="">{v.info}</p>
            </span>
          </li>
        ))}
      </ul>
      <button className="w-fit font-bold text-indigo-500 text-sm flex items-center gap-2 p-2 rounded-sm transition-all hover:bg-blue-50">
        <IoMdAdd />
        <span>More options</span>
      </button>
    </section>
  );
};

export default ShortestFlight;
