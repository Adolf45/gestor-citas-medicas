import React, { useState } from "react";

export const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_RANGE = 2;

  const totalDates = Math.ceil(data.length / itemsPerPage);
  const min = (currentPage - 1) * itemsPerPage;
  const max = min + itemsPerPage;

  const paginateData = data.slice(min, max);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalDates) return;
    setCurrentPage(pageNumber);
  };
  const getSmartPagination = () => {
    if (totalDates <= 1) return [];

    let pages = [];
    const start = Math.max(2, currentPage - PAGE_RANGE);
    const end = Math.min(totalDates - 1, currentPage + PAGE_RANGE);

    pages.push(1);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalDates - 1) {
      pages.push("...");
    }

    if (totalDates > 1 && pages[pages.length - 1] !== totalDates) {
      pages.push(totalDates);
    }

    return [...new Set(pages)];
  };

  const pagination = getSmartPagination();

  return { paginateData, currentPage, totalDates, goToPage, pagination };
};
