
import React from 'react';

export const PageButton = ({ page, currentPage, goToPage }) => {
    if (page === '...') {
        return <span className="ellipsis text-gray-400">...</span>;
    }
    return (
        <span 
            onClick={() => goToPage(page)}
            className={`cursor-pointer p-1 rounded ${currentPage === page ? 'text-violet-600 font-semibold bg-violet-100' : 'hover:bg-gray-100'}`}
        >
            {page}
        </span>
    );
};

