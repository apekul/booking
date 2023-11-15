import React from "react";
import CityList from "../../city.list.json";
import { HiLocationMarker } from "react-icons/hi";

const PlaceDropdown = ({ list, header, setPlace, setList, setSearchPlace }) => {
  return (
    <ul className="absolute bg-white top-16 shadow-md transition-all w-full z-10">
      <p className="py-1 px-2 font-bold">{header}</p>
      {list.map((city, i) => {
        let getCity = CityList.find((v) => v.id === city);
        return (
          <li
            key={i}
            className="flex items-center gap-2 py-3 px-2 cursor-pointer transition-all hover:bg-gray-100"
            onClick={() => {
              setPlace(getCity.name + ", " + getCity.country);
              setSearchPlace(getCity);
              return;
            }}
          >
            <HiLocationMarker className="text-xl" />
            <p>
              {getCity.name}, {getCity.country}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default PlaceDropdown;
