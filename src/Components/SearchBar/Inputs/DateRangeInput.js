import React, { useRef, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { RiCalendar2Line } from "react-icons/ri";

import moment from "moment/moment";

export const DateRangeInput = ({ date, setDate }) => {
  const dateRef = useRef();
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  return (
    <li className="relative" ref={dateRef}>
      <div
        className="w-full min-w-[20rem] px-10 py-3 rounded-md bg-white cursor-pointer"
        onClick={() => setShowDatePicker(!showDatePicker)}
      >
        {moment(date[0].startDate).format("ddd D MMM ")} -{" "}
        {moment(date[0].endDate).format("ddd D MMM")}
        <RiCalendar2Line className="absolute top-3 left-2 text-2xl" />
      </div>
      {showDatePicker && (
        <DateRange
          className="absolute top-14 w-full sm:w-auto shadow-md transition-all"
          onChange={(item) => setDate([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={date}
          direction="horizontal"
        />
      )}
    </li>
  );
};

export default DateRangeInput;
