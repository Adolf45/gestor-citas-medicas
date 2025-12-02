import React from "react";
import { PageButton } from "../../components/input/PageButton";
export const PaginationContainer = ({ pagination, currentPage, goToPage }) => {
  return (
    <div className="min-w-fit max-w-45 overflow-hidden flex justify-start items-center gap-3">
      {pagination.map((page) => (
        <PageButton page={page} currentPage={currentPage} goToPage={goToPage} />
      ))}
    </div>
  );
};
