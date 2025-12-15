import React from "react";
import { useNavigate } from "react-router-dom";

function ViewDetailsButton({ id }) {
    const navigate = useNavigate();

  return (
    <button
      className="view-btn"
      onClick={() => navigate(`/recipe/${id}`)}>
      View Details
    </button>
  );
}

export default ViewDetailsButton;
