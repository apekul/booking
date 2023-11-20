import React from "react";
import { CarRentalBrands } from "../Assets/fakeObject";

const carBrands = [
  { name: "Panek" },
  { name: "Express" },
  { name: "Rentis" },
  { name: "Carwiz" },
  { name: "Greenmotion" },
];

const Popularcarbrands = ({ cityName }) => {
  return (
    <div className="flex flex-col gap-5 relative">
      <h1 className="font-bold text-2xl">
        Car rental brand in and around City
      </h1>
      <ul className="flex gap-10 overflow-x-auto">
        {CarRentalBrands.map((brand, i) => (
          <li key={i} className="text-center">
            <div className="w-32 h-16 border bg-top rounded-md flex items-center justify-center">
              <img
                src={brand.img}
                className="object-cover w-full h-full"
                alt={brand.name + "Logo"}
              />
            </div>
            <p>{brand.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popularcarbrands;
