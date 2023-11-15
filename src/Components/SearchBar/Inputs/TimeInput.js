import React from "react";

export const TimeInput = ({ label }) => {
  return (
    <div className=" flex items-center relative ">
      <input
        type="time"
        min="09:00"
        max="18:00"
        className="h-full py-4 px-2 rounded-md"
        required
        // onChange={(e) => setTime(e.target.value)}
      />
      <label className="before:content[' '] after:content[' '] text-gray-400 pointer-events-none absolute -left-1 top-1 flex h-full w-full select-none text-[11px] leading-tight text-blue-gray-200 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500  peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
    </div>
  );
};

export default TimeInput;
