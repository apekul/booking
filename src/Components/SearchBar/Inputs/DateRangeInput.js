import React from "react";
import { DateRange } from "react-date-range";
import { RiCalendar2Line } from "react-icons/ri";

import moment from "moment/moment";

export const DateRangeInput = ({
  date,
  setDate,
  showDatePicker,
  setShowDatePicker,
}) => {
  return (
    <>
      <div
        className="w-full px-10 py-2 rounded-md bg-white cursor-pointer font-bold"
        onClick={() => setShowDatePicker(!showDatePicker)}
      >
        {moment(date[0].startDate).format("ddd D MMM ")} -{" "}
        {moment(date[0].endDate).format("ddd D MMM")}
        <RiCalendar2Line className="absolute top-2 left-2 text-2xl" />
      </div>
      {showDatePicker && (
        <DateRange
          className="absolute top-12 shadow-md transition-all"
          onChange={(item) => setDate([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={date}
          direction="horizontal"
        />
      )}
    </>
  );
};

export default DateRangeInput;
