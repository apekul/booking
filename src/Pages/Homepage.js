import React from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import Offers from "../Components/Offers";
import BrowsePropertyByType from "../Components/BrowsePropertyByType";
import TrendingDestination from "../Components/TrendingDestination";
import TopRatedHotels from "../Components/TopRatedHotels";

const Homepage = () => {
  return (
    <section id="homepage" className="bg-white flex-1">
      <div className="Container flex flex-col gap-10">
        <SearchBar />
        <Offers />
        <BrowsePropertyByType />
        <TrendingDestination />
        <TopRatedHotels />
      </div>
    </section>
  );
};

export default Homepage;
