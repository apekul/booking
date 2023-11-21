import React, { useState, useRef, useEffect } from "react";
import PlaceDropdown from "../PlaceDropdown";
import CityList from "../../../city.list.json";
import { RxCross2 } from "react-icons/rx";

export const DestinationCityInput = ({
  searchPlace,
  setSearchPlace,
  icon,
  handleKeyDown,
}) => {
  const placeRef = useRef();
  const [showPlace, setShowPlace] = useState(false);

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

  // Close DropDown Menu if cilcked outside of its container
  useEffect(() => {
    const handleClick = (event) => {
      if (placeRef.current && !placeRef.current.contains(event.target)) {
        setShowPlace(false);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [placeRef]);

  return (
    <li
      className="relative"
      ref={placeRef}
      onClick={() => setShowPlace(!showPlace)}
    >
      <div>
        <input
          placeholder="Where are you going?"
          className="w-full px-10 py-4 rounded-md"
          value={place}
          onChange={(e) => updateInput(e)}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute top-4 left-2 text-2xl cursor-pointer">
          {icon}
        </div>
        {/* <MdOutlineTravelExplore className="absolute top-4 left-2 text-2xl cursor-pointer" /> */}
        {place && (
          <RxCross2
            className="absolute top-[1.25rem] right-2 text-lg cursor-pointer"
            onClick={() => setPlace("")}
          />
        )}
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
    </li>
  );
};

export default DestinationCityInput;
