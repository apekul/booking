import React, { useState, useRef, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { UpdatePersonMenu } from "../UpdatePersonMenu";

export const PplInput = ({ person, setPerson }) => {
  const personRef = useRef();
  const [showPerson, setShowPerson] = useState(false);

  // Close DropDown Menu if cilcked outside of its container
  useEffect(() => {
    const handleClick = (event) => {
      if (personRef.current && !personRef.current.contains(event.target)) {
        setShowPerson(false);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [personRef]);
  return (
    <li className="relative select-none" ref={personRef}>
      <div
        className="w-full px-10 py-4 rounded-md bg-white cursor-pointer flex gap-2 "
        onClick={() => setShowPerson(!showPerson)}
      >
        <p className="truncate">
          {person.adults} adults · {person.children} children · {person.room}{" "}
          room
        </p>
        <BsFillPersonFill className="absolute top-4 left-2 text-2xl" />
        {showPerson ? (
          <IoMdArrowDropup className="absolute top-4 right-2 text-2xl" />
        ) : (
          <IoMdArrowDropdown className="absolute top-4 right-2 text-2xl" />
        )}
      </div>
      {showPerson && (
        <UpdatePersonMenu
          person={person}
          setPerson={setPerson}
          setShowPerson={setShowPerson}
        />
      )}
    </li>
  );
};

export default PplInput;
