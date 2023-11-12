import React from "react";

const Notification = () => {
  return (
    <div className="bg-[#2C2C54] py-10 text-white">
      <div className="Container flex flex-col text-center items-center justify-between gap-2">
        <span>
          <p className="font-bold text-2xl">Save time, save money!</p>
          <p>Sign up to receive notifications about the best offers</p>
        </span>
        <div className="flex flex-col md:flex-row gap-2 ">
          <input
            placeholder="You email adress"
            className="px-3 w-[12rem] py-2 md:w-[20rem] text-black"
          />
          <button className="bg-indigo-500 px-2 py-1 rounded-sm font-bold text-xl text-white transition-all hover:bg-indigo-800">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
