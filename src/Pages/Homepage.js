import React from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import Offers from "../Components/Offers";
import TrendingDestination from "../Components/TrendingDestination";
import ScrollableSection from "../Components/ScrollableSection";
// import { fakeProperty } from "../Assets/fakeObject";
import { fakeHotels } from "../Assets/fakeObject";
import { Navbar } from "../Components/Navbar";

const Homepage = () => {
  return (
    <section id="homepage" className="bg-white flex-1">
      <Navbar
        title="Find you next destination"
        subtitle="Search for the best stay options at a satisfactory price"
      />
      <div className="Container flex flex-col gap-10 ">
        <SearchBar />
        <Offers />
        <ScrollableSection
          type
          topSmall
          title="Browse by property type"
          subtitle=""
          content={fakeHotels.filter(
            (v, i) => i === fakeHotels.findIndex((o) => v.type === o.type)
          )}
          link={{ direction: "", name: "" }}
        />
        <TrendingDestination />
        <ScrollableSection
          title="Homes guests love"
          subtitle=""
          content={fakeHotels}
          link={{ direction: "/", name: "Discover homes" }}
        />
      </div>
    </section>
  );
};

export default Homepage;
