import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SmallRecipeCard from "../ReuseComp/SmallRecipeCard";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../utils/titleSlice";
import Pagination from "../Components/Pagination"; 
import CookingLoader from "../Components/CookingLoader";

function MealTypeRecipes() {
  const { mealType } = useParams();
  const dispatch = useDispatch();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalRecipes, setTotalRecipes] = useState(0); 

  useEffect(() => {
    dispatch(
      setPageTitle(`${mealType[0].toUpperCase() + mealType.slice(1)} Recipes`)
    );
  }, [mealType]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const skip = (currentPage - 1) * itemsPerPage; 

    fetch(
      `https://dummyjson.com/recipes/meal-type/${mealType}?limit=${itemsPerPage}&skip=${skip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes); 
        setTotalRecipes(data.total); 
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [mealType, currentPage]); 

  // if (loading) return <h3>Loading...</h3>;
  if (loading) return <CookingLoader />;
  if (error) return <h3>Error: {error}</h3>;

  const totalPages = Math.ceil(totalRecipes / itemsPerPage);

  return (
    <div className="recipes-container">
      <h2 className="recipe-title"> {mealType.charAt(0).toUpperCase() + mealType.slice(1).toLowerCase()} Recipes</h2>

      <div className="recipes-grid">
        {recipes.map((item) => (
          <SmallRecipeCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}
export default MealTypeRecipes;
