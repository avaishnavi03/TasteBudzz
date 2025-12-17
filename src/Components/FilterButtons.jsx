import React from "react";
import Button from "./Button";
// import Button from "../Components/Button";

function FilterButtons({ active, onSelect }) {
  return (
    <div className="filter-btns-box">

      <Button
        className={active === "all" ? "filter-btn active-btn" : "filter-btn"}
        onClick={() => onSelect("all")}
      >
        All Recipes
      </Button>

      <Button
        className={active === "top" ? "filter-btn active-btn" : "filter-btn"}
        onClick={() => onSelect("top")}
      >
        Top Rated Recipes
      </Button>

      <Button
        className={active === "tags" ? "filter-btn active-btn" : "filter-btn"}
        onClick={() => onSelect("tags")}
      >
        Recipe type
      </Button>
    </div>
  );
}

export default FilterButtons;
