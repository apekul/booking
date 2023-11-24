import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { fakeHotels } from "../Assets/fakeObject";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { reviews, iconInfo } from "../Assets/fakeObject";

const Hotel = () => {
  let { id } = useParams();
  const [hotel] = useState(fakeHotels.find((v) => +v.id === +id));

  return (
    <section id="homepage" className="bg-white flex-1">
      <Navbar />
      <div className="Container flex flex-col gap-10 ">
        <div className="flex flex-col lg:flex-row justify-between gap-2 mt-10">
          <div className="w-full grid grid-cols-2 gap-2">
            {hotel.images.map((v, i) => (
              <img
                src={v}
                key={i}
                alt={hotel.name + "img"}
                className="h-60 w-full object-cover"
              />
            ))}
          </div>
          <span className="w-full flex flex-col justify-between">
            <span className="">
              <h1 className="font-bold text-3xl">{hotel.name}</h1>
              <span className="flex items-center gap-1 font-bold text-blue-500">
                <FaLocationDot />
                <p>{hotel.location}</p>
              </span>
              <p className="mt-5">{hotel.roomInfo}</p>
            </span>
            <span className="w-full text-center lg:text-end">
              <button className="bg-indigo-500 hover:bg-indigo-600 transition-all p-3 my-5 font-bold rounded-md text-white">
                Reserve
              </button>
            </span>
          </span>
        </div>
        <ul className="flex items-center flex-wrap gap-2 ">
          {iconInfo.map((v, i) => (
            <li
              key={i}
              className="flex items-center gap-1 border-2 p-3 rounded-md w-fit"
            >
              <span className="text-xl">{v.icon}</span>
              <p>{v.name}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold">Guest Reviews</p>
          <span className="flex items-center">
            <p className="h-[2rem] mr-2 w-[2rem] text-lg font-bold bg-[#292993] rounded-md flex items-center justify-center text-white">
              {hotel.rate}
            </p>
            {Array.from({ length: hotel.stars }).map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
            <p className="ml-2">{hotel.reviews} reviews</p>
          </span>

          {/* Reviews */}
          <div>
            <p className="font-bold mb-2">See what guests loved the most:</p>
            <ul className="flex flex-wrap lg:flex-nowrap gap-5">
              {reviews.map((v, i) => (
                <li
                  key={i}
                  className="border rounded-md p-3 pb-10 flex flex-col items-start gap-2"
                >
                  <span className="flex items-center gap-1">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-400 rounded-full relative">
                      <p className="text-white font-bold">{v.name[0]}</p>
                    </span>
                    <span className="">
                      <p className="font-bold">{v.name}</p>
                      <p className="text-sm">{v.location}</p>
                    </span>
                  </span>
                  <p className="fon font-serif text-sm px-5">"{v.review}"</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;
