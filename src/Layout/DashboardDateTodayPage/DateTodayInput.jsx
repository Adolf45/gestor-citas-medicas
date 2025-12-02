import React from "react";
import { CiSearch } from "react-icons/ci";
export const DateTodayInput = ({search,setSearch}) => {
  return (
    <div className="flex justify-start items-center gap-5 border-b-2 border-gray-200">
      <div className="flex justify-center items-center border-b-2 border-violet-500 w-fit max-sm:w-full gap-4 p-2 mb-2">
        <CiSearch size={20} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar Paciente"
          className="w-[220px] overflow-ellipsis focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
};
