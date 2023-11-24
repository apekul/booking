import React from "react";
import { Navbar } from "../Components/Navbar";
import FlightSearchBar from "../Components/SearchBar/FlightSearchBar";

import ScrollableSection from "../Components/ScrollableSection";
import DisplayPopular from "../Components/DisplayPopular";
import Banner from "../Components/Banner";

// Fake data
import { fakeFlights } from "../Assets/fakeObject";
import { popularFlights } from "../Assets/fakeObject";

// banner icons
import { FcSearch } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";

export const Flights = () => {
  return (
    <section id="flights" className="bg-white flex-1">
      <Navbar />
      <div className="Container flex flex-col gap-10">
        <FlightSearchBar />
        <DisplayPopular
          data={{
            title: "Fly worldwide with us",
            text: "Flights from wherever you are to wherever you want to go",
            content: popularFlights,
          }}
        />
      </div>
      <Banner
        data={[
          {
            text: "Search a huge selection",
            subtext:
              "Easily compare flights, airlines, and prices – all in one place",
            icon: <FcSearch />,
          },
          {
            text: "Pay no hidden fees",
            subtext: "Get a clear price breakdown every step of the way",
            icon: <FcSalesPerformance />,
          },
          {
            text: "Get more flexibility",
            subtext:
              "Change your travel dates with the Flexible ticket option*",
            icon: <FcSportsMode />,
          },
        ]}
      />
      <div className="Container flex flex-col gap-10">
        <ScrollableSection
          flight
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
