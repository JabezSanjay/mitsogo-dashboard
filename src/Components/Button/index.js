import React from "react";

const Button = ({ name, svg }) => {
  return (
    <button type="button" className="mt-0 sm:mt-4 w-36 items-end">
      <div className="flex items-center justify-evenly bg-buttonPurple hover:opacity-90 text-white px-4 py-2 rounded-md text-md">
        <h3>{name}</h3>
        <div className="bg-buttonSecondaryPurple p-1 rounded-full ml-3">
          <img src={svg} alt={name} />
        </div>
      </div>
    </button>
  );
};

export default Button;
