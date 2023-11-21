import React from "react";
import Image from "../Assets/img/offer1.jpg";

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
            <span className="flex items-center gap-2">
              <p className="font-bold text-xl">Property Name</p>
              <div>stars</div>
            </span>
            <p className="underline text-indigo-500 text-sm font-bold">
              Katowice
            </p>
          </div>
          <div className="flex flex-col h-full justify-between ">
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
