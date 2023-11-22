import React from "react";
import { FaStar } from "react-icons/fa";
import { fakeHotels } from "../Assets/fakeObject";

const ItemList = () => {
  return (
    <ul className="flex flex-col w-full gap-3">
      {fakeHotels.map((hotel, i) => (
        <li
          key={i}
          className="border rounded-md p-3 flex items-start gap-3 cursor-pointer"
        >
          <img
            src={hotel.images[0]}
            alt="propIcon"
            className="object-cover h-52 w-52 rounded-md"
          />
          <div className="flex items-start justify-between w-full h-52">
            <div>
              <p className="font-bold text-lg text-indigo-500 w-[16rem]">
                {hotel.name}
              </p>
              <div className="flex text-yellow-500 text-sm">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="underline text-indigo-500 text-sm font-bold">
                {hotel.location}
              </p>
              <p> {hotel.type}</p>
              <div className="border-l-2 px-2 my-2 text-sm w-[16rem]">
                <p className="font-bold">{hotel.roomType}</p>
                <p>{hotel.roomShortInfo}</p>
                {hotel.breakfastIncluded && (
                  <p className="text-green-600 font-bold">Breakfast included</p>
                )}
                {hotel.freeCancelation && (
                  <p className="text-green-600 font-bold">Free cancelation</p>
                )}
              </div>
            </div>
            <div className="flex flex-col h-full w-1/2 items-end justify-between">
              <span className="flex items-center gap-1">
                <span className="text-sm text-end">
                  <p className="font-bold">Very Good</p>
                  <p className="">{hotel.reviews} reviews</p>
                </span>
                <p className="h-[2rem] w-[2rem] text-lg font-bold bg-[#292993] rounded-md flex items-center justify-center text-white">
                  {hotel.rate}
                </p>
              </span>
              <span className="text-end flex flex-col gap-1">
                <p className="font-bold text-xl">${hotel.price}</p>
                <button className="px-2 py-1 rounded-md bg-indigo-500 text-white">
                  See availability
                </button>
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
