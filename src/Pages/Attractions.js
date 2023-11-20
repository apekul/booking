import React from "react";
import { Navbar } from "../Components/Navbar";
import DisplayPopular from "../Components/DisplayPopular";
import { destinationsAttraction } from "../Assets/fakeObject";
import AttractionSearchBar from "../Components/SearchBar/AttractionSearchBar";
import Banner from "../Components/Banner";
import { FcOnlineSupport } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcCompactCamera } from "react-icons/fc";
import Image from "../Assets/img/attractionbg.jpg";

const Attractions = () => {
  return (
    <section id="attractions" className="bg-white flex-1">
      <Navbar
        img={Image}
        title="Attractions, activities and experiences"
        subtitle="Discover new attractions and experiences to match your interests and travel style"
      />

      <div className="Container flex flex-col gap-10">
        <AttractionSearchBar />
      </div>
      <Banner
        data={[
          {
            text: "Explore top attractions",
            subtext:
              "Experience the best of your destination, with attractions, tours, activities and more",
            icon: <FcCompactCamera />,
          },
          {
            text: "Fast and flexible",
            subtext:
              "Book tickets online in minutes, with free cancellation on many attractions",
            icon: <FcCalendar />,
          },
          {
            text: "Support when you need it",
            subtext:
              "Booking.com's global Customer Service team is here to help 24/7",
            icon: <FcOnlineSupport />,
          },
        ]}
      />
      <div className="Container flex flex-col gap-10">
        <DisplayPopular
          data={{
            title: "Explore more destinations",
            text: "Find things to do in cities around the world",
            content: destinationsAttraction,
          }}
          imgCover="imgCover"
        />
      </div>
    </section>
  );
};

export default Attractions;
