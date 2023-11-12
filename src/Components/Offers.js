import React from "react";

const Offers = () => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Offers</h1>
      <ul className="w-full flex flex-col lg:flex-row gap-5 text-sm lg:text-base">
        <li className="flex justify-between  bg-white shadow-md">
          <span className="flex flex-col gap-4 justify-between items-start p-5 w-2/3">
            <span className="flex flex-col gap-1">
              <p className="font-bold">Fly away to your dream holiday</p>
              <p>
                Get inspired, compare and book flights with more flexibility
              </p>
            </span>
            <button className="bg-indigo-500 px-2 py-1 rounded-md font-bold  text-white transition-all hover:bg-indigo-800">
              Search for flights
            </button>
          </span>
          <img
            src={require(`../Assets/img/offer1.jpg`)}
            alt={"offerImg"}
            className="object-cover object-center w-1/3 h-[12rem]"
          />
        </li>
        <li className="flex justify-between bg-white shadow-md">
          <span className="flex flex-col gap-4 justify-between items-start p-5 w-2/3">
            <span>
              <p className="font-bold">Take your longest holiday yet</p>
              <p>
                Browse properties offering long-term stays, many at reduced
                monthly rates.
              </p>
            </span>
            <button className="bg-indigo-500 px-2 py-1 rounded-md font-bold  text-white transition-all hover:bg-indigo-800">
              Find a stay
            </button>
          </span>
          <img
            src={require(`../Assets/img/offer2.jpg`)}
            alt={"offerImg"}
            className="object-cover w-1/3 h-[12rem]"
          />
        </li>
      </ul>
    </section>
  );
};

export default Offers;
