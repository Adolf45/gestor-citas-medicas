import React from "react";
import { useState } from "react";
import { DashboardContainer } from "../Layout/DashboardDatePage/DashboardContainer";
import { DateFormContainer } from "../Layout/DashboardDatePage/DateFormContainer";
import { FetchDate } from "../services/FetchDate";
import { usePagination } from "../hooks/usePagination";
import { PaginationBar } from "../Layout/Pagination/PaginationBar";
import { useFilter } from "../hooks/useFilter";

export const DashboardCitasPage = () => {
  const { data, loading, error } = FetchDate({ url: "./Date.json" });
  const {
    filteredData,
    searchTerm,
    setSearchTerm,
    filterDate,
    setFilterDate,
    filterHour,
    setFilterHour,
  } = useFilter({ data });
  const { paginateData, currentPage, totalDates, goToPage, pagination } =
    usePagination(filteredData || [], 5);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mt-1">
        Gestión de Citas
      </h1>

      <DateFormContainer
        search={searchTerm}
        setSearch={setSearchTerm}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
        filterHour={filterHour}
        setFilterHour={setFilterHour}
        goToPage={goToPage}
      />

      <div className="w-full max-w-5xl mt-6 bg-white rounded-xl shadow-md overflow-hidden flex flex-col gap-5 h-[420px] justify-between items-center">
        <DashboardContainer data={paginateData} />

        <PaginationBar
          pagination={pagination}
          currentPage={currentPage}
          totalDates={totalDates}
          goToPage={goToPage}
        />
      </div>
    </div>
  );
};
