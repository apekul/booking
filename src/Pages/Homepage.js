import React from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import Offers from "../Components/Offers";
import TrendingDestination from "../Components/TrendingDestination";
import ScrollableSection from "../Components/ScrollableSection";
import { fakeProperty } from "../Assets/fakeObject";
import { fakeHotels } from "../Assets/fakeObject";
import { Navbar } from "../Components/Navbar";

const Homepage = () => {
  return (
    <section id="homepage" className="bg-white flex-1">
      <Navbar
        title="Plan your travel"
        subtitle="Search for a destination at lower prices"
      />
      <div className="Container flex flex-col gap-10">
        <SearchBar />
        <Offers />
        <ScrollableSection
          title="Browse by property type"
          subtitle=""
          content={fakeProperty}
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
