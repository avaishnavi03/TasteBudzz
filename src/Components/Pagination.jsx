import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination-container">

      <button
        className="page-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((value, index) => (
        <button
          key={index}
          className={`page-btn ${currentPage === index + 1 && "active-page"}`}

          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="page-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
