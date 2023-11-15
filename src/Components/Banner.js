import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="w-full my-10 py-10 bg-gray-100">
      <ul className="Container flex items-center justify-between h-full flex-col lg:flex-row gap-10 ">
        {data.map((v, i) => (
          <li
            key={i}
            className="flex items-center justify-center h-full w-full"
          >
            <div className="text-[5rem]">{v.icon}</div>
            <span className="w-full  px-2">
              <p className="font-bold">{v.text}</p>
              <p className="text-sm text-gray-500">{v.subtext}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
