import React, { useState } from "react";
import PlaceDropdown from "../PlaceDropdown";
import { MdOutlineTravelExplore } from "react-icons/md";
import CityList from "../../../city.list.json";

export const DestinationCityInput = ({
  searchPlace,
  setSearchPlace,
  showPlace,
}) => {
  // Destination
  const [placeList, setPlaceList] = useState([]);
  const [place, setPlace] = useState("");

  const updateInput = (e) => {
    const { value } = e.target;
    setPlace(value);
    if (value.length > 0) {
      fetchCities(value);
    } else setPlaceList([]);
  };

  const fetchCities = (value) => {
    let arr = [];
    for (let city of CityList) {
      if (arr.length >= 5) break;
      if (city.name.toLowerCase().startsWith(value.toLowerCase())) {
        arr.push(city.id);
      }
    }
    return setPlaceList(arr);
  };

  return (
    <>
      <div>
        <input
          placeholder="Where are you going?"
          className="w-full px-10 py-2 rounded-md font-bold"
          value={place}
          onChange={(e) => updateInput(e)}
        />
        <MdOutlineTravelExplore className="absolute top-2 left-2 text-2xl cursor-pointer" />
      </div>
      {showPlace &&
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
        ))}
    </>
  );
};

export default DestinationCityInput;
