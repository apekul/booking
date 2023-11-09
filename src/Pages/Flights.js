import React from "react";
import { Navbar } from "../Components/Navbar";
import FlightSearchBar from "../Components/SearchBar/FlightSearchBar";

import ScrollableSection from "../Components/ScrollableSection";
import { fakeFlights } from "../Assets/fakeObject";
import { fakeProperty } from "../Assets/fakeObject";

export const Flights = () => {
  return (
    <section id="flights" className="bg-white flex-1">
      <Navbar />
      <div className="Container flex flex-col gap-10">
        <FlightSearchBar />
        <ScrollableSection
          title="Popular flights near you"
          subtitle="Find deals on domestic and international flights"
          content={fakeFlights}
          link={{ direction: "", name: "" }}
        />
        <ScrollableSection
          title="Trending cities"
          subtitle="Book flights to a destination popular with travellers from Poland"
          content={fakeFlights}
          link={{ direction: "", name: "" }}
        />
      </div>
    </section>
  );
};

export default Flights;
