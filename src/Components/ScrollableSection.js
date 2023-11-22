import React, { useState, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ScrollableSection = ({ ...children }) => {
  const [offset, setOffset] = useState(0);
  const scrollRef = useRef(null);
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
    setOffset((scrollRef.current.scrollLeft += scrollOffset));
  };
  return (
    <section className="flex flex-col gap-5 w-full h-full relative">
      <span className="flex items-center justify-between">
        <span>
          <h1 className="font-bold text-2xl">{children.title}</h1>
          <p>{children.subtitle}</p>
        </span>
        <a
          href={children.link.direction}
          className="text-sm transition-all font-bold text-blue-500 hover:bg-blue-100 p-2 rounded-sm"
        >
          {children.link.name}
        </a>
      </span>

      <BiChevronLeft
        onClick={() => scroll(-284)}
        className={`bg-white shadow-md rounded-md cursor-pointer transition-all hover:bg-gray-100 text-3xl absolute top-[10rem] hidden md:block -left-4 select-none
    ${offset <= 0 ? "invisible" : "visible"}`}
      />
      <BiChevronRight
        onClick={() => scroll(284)}
        className={`bg-white shadow-md rounded-md cursor-pointer transition-all hover:bg-gray-100 text-3xl absolute top-[10rem] hidden md:block -right-4 select-none
    ${offset >= 1400 ? "invisible" : "visible"}`}
      />

      <ul
        className="flex gap-5 flex-none overflow-x-scroll w-full pb-5 scroll-smooth"
        ref={scrollRef}
      >
        {children.content.map((v, i) => (
          <li
            key={i}
            className="flex flex-col justify-between bg-white cursor-pointerm min-w-[16.5rem] max-w-[16.5rem] h-fit rounded-md shadow-md cursor-pointer border transition-all hover:border-black"
          >
            <img
              src={v.images[0]}
              alt={"offerImg"}
              className="object-cover w-full h-[11rem] rounded-t-md"
            />
            <span className="p-2 h-full">
              {!children.type && (
                <>
                  <p className="font-bold">{v.name}</p>
                  <p className="text-sm">{v.location}</p>
                  <span className="flex items-center gap-2 text-sm">
                    <p className="bg-[#292993] px-1 rounded-md text-white">
                      {v.rate}
                    </p>
                    {v.reviews && <p>{v.reviews} reviews</p>}
                  </span>
                  {v.price && (
                    <p className="text-sm w-full text-end">
                      Starting from{" "}
                      <span className="font-bold">${v.price}</span>
                    </p>
                  )}
                </>
              )}
              {children.type && <p className="font-bold">{v.type}s</p>}
              {children.flight && (
                <p>
                  {v.date} - {v.flightType}
                </p>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ScrollableSection;
