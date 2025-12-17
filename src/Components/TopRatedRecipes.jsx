import React, { useEffect, useState } from "react";
import SmallRecipeCard from "../ReuseComp/SmallRecipeCard";
import CookingLoader from "../Components/CookingLoader";

function TopRatedRecipes() {
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://dummyjson.com/recipes?sortBy=rating&order=desc")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed fetching recipes");
        }
       return  res.json();
      })
      .then((data) => {
        const filtered = data.recipes;
        setTop(filtered);
      })
      .catch((err) => {
        console.error("Err while fetching data:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // if (loading) return <h2>Loading</h2>;
  if (loading) return <CookingLoader />;
  if (error) return <h2>{error}</h2>;
  return (
    <div className="top-container">
      <h2 className="top-title">Top Rated Recipes</h2>

      <div className="top-grid">
        {top.map((item) => (
          <SmallRecipeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default TopRatedRecipes;

