import React from "react";

export const DateFilterAndSorter = ({ icon, name, arrayOption }) => {
  function optionMap(array) {
    return array.map((option, index) => <option key={index}>{option}</option>);
  }
  return (
    <div className="flex justify-center gap-2">
      {icon && icon}

      <select
        className="bg-white w-40 shadow-sm rounded-lg px-3 py-2 text-sm border border-gray-200"
        name={name}
        id={name}
      >
        {optionMap(arrayOption)}
      </select>
    </div>
  );
};
