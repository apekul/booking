import React from "react";
import { IoSearch } from "react-icons/io5";

const PickUpLocationInput = ({ pickUpLocation, setPickUpLocation }) => {
  return (
    <li
      className="relative"
      // ref={placeRef}
      // onClick={() => setShowPlace(!showPlace)}
    >
      <div className="w-full py-2 rounded-md bg-white">
        <div className="relative h-10 w-full ">
          <input
            className="peer h-full w-full rounded-md px-10 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all"
            placeholder=" "
            value={pickUpLocation}
            onChange={(e) => setPickUpLocation(e.target.value)}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-6 -top-1.5 flex h-full w-full select-none text-[11px] leading-tight text-blue-gray-200 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Pick-up location
          </label>
        </div>
      </div>
      <IoSearch className="absolute top-4 left-2 text-2xl" />

      {/* {showPlace &&
        (placeList.length <= 0 ? (
          <PlaceDropdown
            list={[3080866, 3085151, 756135, 3094802]}
            header="Popular destination"
            place={place}
            setPlace={setPlace}
            setSearchPlace={setSearchPlace}
          />
        ) : (
          <PlaceDropdown
            list={placeList}
            place={place}
            setPlace={setPlace}
            setSearchPlace={setSearchPlace}
          />
        ))} */}
    </li>
  );
};

export default PickUpLocationInput;
