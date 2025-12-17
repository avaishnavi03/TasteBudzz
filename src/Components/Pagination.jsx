import React from "react";
import Button from "./Button";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination-container">

      <Button
        className="page-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </Button>

      {[...Array(totalPages)].map((value, index) => (
        <Button
          key={index}
          className={`page-btn ${currentPage === index + 1 && "active-page"}`}

          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        className="page-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
