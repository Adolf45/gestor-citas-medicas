import React from "react";
import { ContainerToday } from "../Layout/DashboardDateTodayPage/ContainerToday";
import { DashboardDateToday } from "../Layout/DashboardDateTodayPage/DashboardDateToday";
import { useEffect} from "react";
import { FetchDate } from "../services/FetchDate";
import { useFilter } from "../hooks/useFilter";
import { getAppointmentStats } from "../utils/getAppointmentStats";
import { calculateDateRange } from "../utils/dateHelper";
import { useAppointmentStatusFilter } from "../hooks/useAppointmentStatusFilter";
export const DashboardDateTodayPage = () => {
  const { data, loading, error } = FetchDate({ url: "./Date.json" });
  const { filteredData, searchTerm, setSearchTerm, setFilterDate } = useFilter({
    data,
  });
  useEffect(() => setFilterDate(calculateDateRange("Hoy")), []);
  const { todayTotal, todayAttended, todayCancelled } =
    getAppointmentStats(filteredData);
  const { NewfilteredData, setStatusFilter, statusFilter } =
    useAppointmentStatusFilter(filteredData);
  return (
    <main className="min-h-dvh w-full ">
      <section className="w-full flex flex-col items-center justify-center py-20 ">
        <h2 className="text-3xl text-center mb-10">Resumen de Hoy</h2>

        <ContainerToday
          setCancelled={setStatusFilter}
          setFilterDate={setFilterDate}
          cancelled={statusFilter}
          todayAttended={todayAttended}
          todayCancelled={todayCancelled}
          todayTotal={todayTotal}
        />

        <DashboardDateToday
          filteredData={NewfilteredData}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </section>
    </main>
  );
};
