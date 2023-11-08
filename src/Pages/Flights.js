import React from "react";
import { Navbar } from "../Components/Navbar";

export const Flights = () => {
  return (
    <section id="flights" className="bg-white flex-1">
      <Navbar />
      <div className="Container flex items-center">Flights</div>
    </section>
  );
};

export default Flights;
