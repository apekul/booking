import React from "react";
import Image from "../Assets/img/offer1.jpg";
import { FaStar } from "react-icons/fa";

const ItemList = () => {
  return (
    <ul className="items-center w-full">
      <li className="border rounded-md p-3 flex items-start gap-3 cursor-pointer">
        <img
          src={Image}
          alt="propIcon"
          className="object-cover h-52 w-52 rounded-md"
        />
        <div className="flex items-start justify-between w-full h-52">
          <div>
            <span className="flex flex-wrap items-center">
              <p className="font-bold text-lg text-indigo-500">
                HARBOR APARTMENTS
              </p>
              <div className="flex text-yellow-500 text-sm">
                {Array.from({ length: 3 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </span>
            <p className="underline text-indigo-500 text-sm font-bold">
              Katowice
            </p>
            <div className="border-l-2 px-2 my-2 text-sm">
              <p className="font-bold">Twin Room</p>
              <p>2 single beds</p>
              <p className="text-green-600 font-bold">Breakfast included</p>
            </div>
          </div>
          <div className="flex flex-col h-full w-1/2 items-end justify-between">
            <span className="flex gap-1">
              <span className="text-sm text-end">
                <p className="font-bold">Very Good</p>
                <p className="">1,200 reviews</p>
              </span>
              <p className="p-1 text-lg font-bold bg-[#292993] rounded-md flex items-center text-white">
                8.1
              </p>
            </span>
            <span className="text-end flex flex-col gap-1">
              <p className="font-bold text-xl">$200</p>
              <button className="px-2 py-1 rounded-md bg-indigo-500 text-white">
                See availability
              </button>
            </span>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ItemList;
