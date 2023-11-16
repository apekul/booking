import React from "react";
import { Navbar } from "../Components/Navbar";
import SearchBar from "../Components/SearchBar/SearchBar";
import DisplayPopular from "../Components/DisplayPopular";
import { destinationsAttraction } from "../Assets/fakeObject";

const Attractions = () => {
  return (
    <section id="attractions" className="bg-white flex-1">
      <Navbar
        title="Attractions, activities and experiences"
        subtitle="Discover new attractions and experiences to match your interests and travel style"
      />
      <div className="Container flex flex-col gap-10">
        <SearchBar />
        <DisplayPopular
          data={{
            title: "Popular car hire destinations",
            text: "Explore more options to hire a car for cheap",
            content: destinationsAttraction,
          }}
          imgCover="imgCover"
        />
      </div>
    </section>
  );
};

export default Attractions;
