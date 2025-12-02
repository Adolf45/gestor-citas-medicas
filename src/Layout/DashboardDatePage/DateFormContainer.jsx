import React from "react";
import { DateSearchInput } from "./DateSearchInput";
import { FiCalendar, FiClock } from "react-icons/fi";
import { DateFilterAndSorter } from "../../components/ui/DateFilterAndSorter";

export const DateFormContainer = ({search,setSearch}) => {
    const SubmitToFilter = (e) => {
    e.preventDefault();
    console.log("Filtros aplicados" );
    }
  return (
    <form className="w-full max-w-5xl bg-purple-100 rounded-2xl p-4 flex flex-wrap gap-3 items-center justify-between shadow-sm mt-4" onSubmit={SubmitToFilter}>
    
      <DateSearchInput search={search} setSearch={setSearch}/>

      <div className="flex gap-3">
        <DateFilterAndSorter
          icon={<FiCalendar className="w-4 h-4 text-gray-600 mr-2 mt-2" />}
          name="filterByDate"
          arrayOption={["Hoy","1 Semana","1 Mes","1 Año"]}
          />
        <DateFilterAndSorter
        icon={<FiClock className="w-4 h-5 text-gray-600 mr-2 mt-2" />}
        name="sortByTime"
        arrayOption={["Recientes","Antiguos"]}
        />
      </div>

      <div className="flex gap-3">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white text-sm px-4 py-2 rounded-lg shadow-sm cursor-pointer">
          APLICAR FILTROS
        </button>

        <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-sm cursor-pointer">
          GENERAR CITA
        </button>
      </div>
    </form>
  );
};
