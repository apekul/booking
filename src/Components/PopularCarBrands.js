import React from "react";

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
        {carBrands.map((brand, i) => (
          <li key={i} className="text-center">
            <div className="w-32 h-16 border rounded-md flex items-center justify-center">
              Logo
            </div>

            {brand.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popularcarbrands;
