import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { UpdatePersonMenu } from "../UpdatePersonMenu";

export const PplInput = ({ showPerson, setShowPerson, person, setPerson }) => {
  return (
    <>
      <div
        className="w-full px-10 py-2 rounded-md bg-white cursor-pointer flex gap-2 font-bold"
        onClick={() => setShowPerson(!showPerson)}
      >
        <p>
          {person.adults} adults · {person.children} children · {person.room}{" "}
          room
        </p>
        <BsFillPersonFill className="absolute top-2 left-2 text-2xl" />
        {showPerson ? (
          <IoMdArrowDropup className="absolute top-2 right-2 text-2xl" />
        ) : (
          <IoMdArrowDropdown className="absolute top-2 right-2 text-2xl" />
        )}
      </div>
      {showPerson && (
        <UpdatePersonMenu
          person={person}
          setPerson={setPerson}
          setShowPerson={setShowPerson}
        />
      )}
    </>
  );
};

export default PplInput;
