import React, { useState } from "react";
import FilterButtons from "./FilterButtons";
import AllRecipes from "./AllRecipes";
import TopRatedRecipes from "./TopRatedRecipes";

function RecipesDisplay() {
  const [active, setActive] = useState("all");

  return (
    <div className="recipes-display-container">

      <FilterButtons active={active} onSelect={setActive} />

      {active === "all" && <AllRecipes />}
      {active === "top" && <TopRatedRecipes />}

    </div>
  );
}

export default RecipesDisplay;
