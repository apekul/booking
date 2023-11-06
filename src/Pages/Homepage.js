import React from "react";
import SearchBar from "../Components/SearchBar";

const Homepage = () => {
  return (
    <section id="homepage" className="bg-white flex-1">
      <div className="Container flex flex-col">
        <div className="py-5">
          <SearchBar />
        </div>
        Homepage
      </div>
    </section>
  );
};

export default Homepage;
