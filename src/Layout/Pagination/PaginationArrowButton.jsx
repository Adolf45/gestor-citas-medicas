import React from "react";

export const PaginationArrowButton = ({ goToPage,icon,condition,parameters}) => {
  return (
    <button
      onClick={() => goToPage(condition)}
      disabled={parameters}
    >
      {icon && icon}
    </button>
  );
};
