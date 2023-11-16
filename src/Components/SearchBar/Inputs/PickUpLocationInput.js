import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const PickUpLocationInput = ({ pickUpLocation, setPickUpLocation }) => {
  const [show, setShow] = useState(false);

  return (
    <li
      className="relative flex items-center"
      // ref={placeRef}
      // onClick={() => setShowPlace(!showPlace)}
    >
      <div className="w-full truncate rounded-md bg-white cursor-pointer">
        <input
          className="peer w-full py-4 rounded-md px-10 text-blue-gray-700 outline outline-0 transition-all"
          placeholder=" "
          value={pickUpLocation}
          onChange={(e) => setPickUpLocation(e.target.value)}
        />
        <label className="before:content[' '] after:content[' ']  pointer-events-none absolute left-[1.60rem] top-1 flex h-full w-full select-none leading-tight text-blue-gray-200 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:transition-all peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-blue-gray-500  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Pick-up Location
        </label>
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
