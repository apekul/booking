import React, { useRef, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { RiCalendar2Line } from "react-icons/ri";

import moment from "moment/moment";

export const DateRangeInput = ({ date, setDate, label }) => {
  const dateRef = useRef();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showDatePicker, setShowDatePicker] = useState(false);

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }
  // Close DropDown Menu if cilcked outside of its container
  useEffect(() => {
    const handleClick = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [dateRef]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <li className="relative flex items-center" ref={dateRef}>
      <div
        className="w-full truncate px-10 py-4 rounded-md bg-white cursor-pointer"
        onClick={() => setShowDatePicker(!showDatePicker)}
      >
        {moment(date[0].startDate).format("ddd D MMM ")} -{" "}
        {moment(date[0].endDate).format("ddd D MMM")}
        <RiCalendar2Line className="absolute top-4 left-2 text-2xl" />
        {label && (
          <label className="before:content[' '] after:content[' '] text-gray-400 pointer-events-none absolute left-[1.60rem] top-1 flex h-full w-full select-none text-[11px] leading-tight text-blue-gray-200 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            {label}
          </label>
        )}
      </div>
      {showDatePicker && (
        <DateRange
          className="absolute top-16 w-full lg:w-auto shadow-md transition-all z-10 border"
          onChange={(item) => setDate([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          // months={2}
          months={windowSize <= 400 ? 1 : 2}
          ranges={date}
          direction="horizontal"
          minDate={moment().toDate()}
          // direction={windowSize <= 350 ? "vertical" : "horizontal"}
        />
      )}
    </li>
  );
};

export default DateRangeInput;
