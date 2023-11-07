import React from "react";

const fakeProperty = [
  {
    name: "Hotels",
    available: "120",
    ppl: "2 adults",
    date: "1 Dec-2 Dec",
    img: "",
  },
  {
    name: "Apartments",
    available: "120",
    ppl: "2 adults",
    date: "1 Dec-2 Dec",
    img: "",
  },
  {
    name: "Resorts",
    available: "120",
    ppl: "2 adults",
    date: "1 Dec-2 Dec",
    img: "",
  },
  {
    name: "Villas",
    available: "120",
    ppl: "2 adults",
    date: "1 Dec-2 Dec",
    img: require(`../Assets/img/offer1.jpg`),
  },
];

const BrowsePropertyByType = () => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Browse by property type</h1>
      <ul className="w-full flex gap-5">
        {fakeProperty.map((v, i) => (
          <li
            key={i}
            className="flex flex-col justify-between w-1/2 bg-white cursor-pointer"
          >
            <img
              src={require(`../Assets/img/offer1.jpg`)}
              alt={"offerImg"}
              className="object-cover object-center w-full h-[15rem]"
            />
            <p className="font-bold text-xl">{v.name}</p>
            <span className="text-gray-500 text-sm">
              <p>
                {v.date}, {v.ppl}
              </p>
              <p>{v.available} available</p>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BrowsePropertyByType;
