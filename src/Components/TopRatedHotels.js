import React from "react";

const TopRatedHotels = () => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Browse by property type</h1>
      <ul className="flex gap-5">
        {Array.from({ length: 5 }).map((v, i) => (
          <li
            key={i}
            className="flex flex-col justify-between bg-white cursor-pointer"
          >
            <img
              src={require(`../Assets/img/offer2.jpg`)}
              alt={"offerImg"}
              className="object-cover w-[20rem] h-[15rem]"
            />
            <p>Hotel Name</p>
            <p>Old Town, Kraków</p>
            <span>
              <p>8.1</p>
              <p>2.000 reviews</p>
            </span>
            <p>Starting from $200</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopRatedHotels;
