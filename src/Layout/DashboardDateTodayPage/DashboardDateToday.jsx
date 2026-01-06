import { TodayDateContainer } from "./TodayDateContainer";
import { usePagination } from "../../hooks/usePagination.js";
import { PaginationBar } from "../Pagination/PaginationBar";
import { DateTodayInput } from "./DateTodayInput";

export const DashboardDateToday = ({
  filteredData,
  searchTerm,
  setSearchTerm,
}) => {
  const { paginateData, currentPage, totalDates, goToPage, pagination } =
    usePagination(filteredData || [], 5);
  return (
    <>
      <h3 className="text-3xl text-center mt-10">Proximas Citas</h3>

      <div className="w-lg mt-10 max-sm:max-w-4/5 rounded-2xl shadow shadow-black p-2 ">
        <DateTodayInput search={searchTerm} setSearch={setSearchTerm} />

        <TodayDateContainer data={paginateData} />

        <PaginationBar
          pagination={pagination}
          currentPage={currentPage}
          totalDates={totalDates}
          goToPage={goToPage}
        />
      </div>
    </>
  );
};
