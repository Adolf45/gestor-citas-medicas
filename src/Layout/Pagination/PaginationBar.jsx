import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PaginationArrowButton } from "../Pagination/PaginationArrowButton";
import { PaginationContainer } from "../Pagination/PaginationContainer";
export const PaginationBar = ({
  pagination,
  currentPage,
  totalDates,
  goToPage,
}) => {
  return (
    <div className="flex justify-center items-center py-3 gap-3 text-sm">
      <PaginationArrowButton
        goToPage={goToPage}
        icon={<FiChevronLeft className="w-4 h-4 cursor-pointer" />}
        condition={currentPage - 1}
        parameters={currentPage === 1}
      />

      <PaginationContainer
        pagination={pagination}
        currentPage={currentPage}
        goToPage={goToPage}
      />

      <PaginationArrowButton
        goToPage={goToPage}
        icon={<FiChevronRight className="w-4 h-4 cursor-pointer" />}
        condition={currentPage + 1}
        parameters={currentPage === totalDates}
      />
    </div>
  );
};
