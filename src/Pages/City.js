import React from "react";
import { Navbar } from "../Components/Navbar";
import SearchBar from "../Components/SearchBar/SearchBar";
import { MdKeyboardArrowRight } from "react-icons/md";

const City = () => {
  return (
    <section id="homepage" className="bg-white flex-1">
      <Navbar />
      <div className="Container flex flex-col gap-10">
        <div>
          <SearchBar />
          <span className="flex items-center gap-1 py-1 text-sm">
            <a href="/" className="text-blue-500 hover:underline">
              Home
            </a>
            <MdKeyboardArrowRight className="text-xl" />
            <a href="/" className="text-blue-500 hover:underline">
              Poland
            </a>
            <MdKeyboardArrowRight className="text-xl" />
            <a href="/" className="text-blue-500 hover:underline">
              Mosovia
            </a>
            <MdKeyboardArrowRight className="text-xl" />
            <a href="/" className="text-blue-500 hover:underline">
              Warsaw
            </a>
            <MdKeyboardArrowRight className="text-xl" />
            <p>Search results</p>
          </span>
        </div>
        City
      </div>
    </section>
  );
};

export default City;
