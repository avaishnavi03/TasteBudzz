import React from "react";
// import Button from "../Components/Button";

function FilterButtons({ active, onSelect }) {
  return (
    <div className="filter-btns-box">

      <button varient="primary"
        className={active === "all" ? "filter-btn active-btn" : "filter-btn"}
        onClick={() => onSelect("all")}
      >
        All Recipes
      </button>

      <button
        className={active === "top" ? "filter-btn active-btn" : "filter-btn"}
        onClick={() => onSelect("top")}
      >
        Top Rated Recipes
      </button>

    </div>
  );
}

export default FilterButtons;
