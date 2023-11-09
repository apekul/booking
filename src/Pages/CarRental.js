import React from "react";
import { Navbar } from "../Components/Navbar";

const CarRental = () => {
  return (
    <section id="carRental" className="bg-white flex-1">
      <Navbar
        title="Car hire for any kind of trip"
        subtitle="Great deals at great prices, from the biggest car hire companies"
      />
      <div className="Container flex flex-col gap-10">Car Rent</div>
    </section>
  );
};

export default CarRental;
