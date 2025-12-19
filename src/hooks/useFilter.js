import { useState, useMemo } from "react";
import { timeAndDateSort,filterData } from "../utils/dateHelper.js";

export const useFilter = ({ data = [] }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Para el nombre
  const [filterDate, setFilterDate] = useState(""); // Para la fecha
  const [filterHour, setFilterHour] = useState(""); // Para la hora

  const filteredData = useMemo(() => {
    // 1. primero se encarga de filtrar por nombre y fecha
    const newData = filterData(data, searchTerm, filterDate);
    // 2. luego segun el la opcion de hora mandada o seleccionada, ordena los datos por hora y fecha
    return timeAndDateSort({ data: newData, filterHour });
  }, [data, searchTerm, filterDate, filterHour]);

  return {
    filteredData,
    searchTerm,
    setSearchTerm,
    filterDate,
    setFilterDate,
    filterHour,
    setFilterHour,
  };
};
