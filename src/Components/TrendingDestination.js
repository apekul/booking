import React from "react";
import { citys } from "../Assets/fakeObject";

const TrendingDestination = () => {
  return (
    <section className="flex flex-col gap-5">
      <span>
        <h1 className="font-bold text-2xl">Trending destinations</h1>
        <p>Most popular choices for travellers</p>
      </span>
      <ul className="w-full flex flex-col sm:grid grid-cols-6 gap-5">
        {citys.map((v, i) => (
          <li
            key={i}
            className={`flex flex-col justify-between w-full bg-white cursor-pointer relative ${
              i < 2 ? "col-span-3" : "col-span-2"
            }`}
          >
            <img
              src={v.img}
              alt={"offerImg"}
              className="object-cover object-center w-full h-[20rem]"
            />
            <p className="absolute top-1 left-3 font-bold text-xl text-white">
              {v.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingDestination;
