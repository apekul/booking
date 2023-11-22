import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import SearchBar from "../Components/SearchBar/SearchBar";
import { MdKeyboardArrowRight } from "react-icons/md";
import ItemList from "../Components/ItemList";
import ComplexFilter from "../Components/ComplexFilter";

const SearchResult = () => {
  let { item } = useParams();
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

        <div className="flex gap-3 items-start">
          <div className="w-1/4 h-full">
            <ComplexFilter />
          </div>
          <div className="flex w-3/4 gap-3 flex-col">
            <h1 className="text-2xl font-bold">{item}: 150 poperties found</h1>
            <div className="border border-black py-1 px-2 w-fit rounded-full">
              Sort by button
            </div>
            <ItemList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
