import React from "react";
import { Navbar } from "../Components/Navbar";
import Image from "../Assets/img/carrentbg.jpg";
import CarRentSearchBar from "../Components/SearchBar/CarRentSearchBar";
import DisplayPopular from "../Components/DisplayPopular";
import PopularCarBrands from "../Components/PopularCarBrands";
import Banner from "../Components/Banner";

import { popularFlights, popularCarDestination } from "../Assets/fakeObject";

// banner icons
import { FcOnlineSupport } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

const CarRental = () => {
  return (
    <section id="carRental" className="bg-white flex-1 overflow-hidden">
      <Navbar
        img={Image}
        title="Car hire for any kind of trip"
        subtitle="Great deals at great prices, from the biggest car hire companies"
      />
      <div className="Container flex flex-col gap-10">
        <CarRentSearchBar />
        <PopularCarBrands />
      </div>
      <Banner
        data={[
          {
            text: "We’re here for you",
            subtext: "Providing customer support in over 30 languages",
            icon: <FcOnlineSupport />,
          },
          {
            text: "Free Cancelation",
            subtext: "On most bookings, up to 48 hours before pick-up",
            icon: <FcCalendar />,
          },
          {
            text: "5 million+ reviews",
            subtext: "By verified customers",
            icon: <FcApproval />,
          },
        ]}
      />
      <div className="Container flex flex-col gap-10">
        <DisplayPopular
          data={{
            title: "Popular car hire destinations",
            text: "Explore more options to hire a car for cheap",
            // content: popularFlights,
            content: popularCarDestination,
          }}
        />

        {/* <ShortestFlight /> */}
      </div>
    </section>
  );
};

export default CarRental;
