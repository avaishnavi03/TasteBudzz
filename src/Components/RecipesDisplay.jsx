import React, { useState } from "react";
import FilterButtons from "./FilterButtons";
import AllRecipes from "./AllRecipes";
import TopRatedRecipes from "./TopRatedRecipes";
import RecipeByTag from "./RecipeByTag";

function RecipesDisplay() {
  const [active, setActive] = useState("all");

  return (
    <div className="recipes-display-container">

      <FilterButtons active={active} onSelect={setActive} />

      {active === "all" && <AllRecipes />}
      {active === "top" && <TopRatedRecipes />}
      {active === "tags" && <RecipeByTag />}

    </div>
  );
}

export default RecipesDisplay;
