import React from "react";
import { Navbar } from "../Components/Navbar";

const Attractions = () => {
  return (
    <section id="attractions" className="bg-white flex-1">
      <Navbar
        title="Attractions, activities and experiences"
        subtitle="Discover new attractions and experiences to match your interests and travel style"
      />
      <div className="Container flex flex-col gap-10">Attractions</div>
    </section>
  );
};

export default Attractions;
