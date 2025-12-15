import React, { useEffect, useState } from "react";
import SmallRecipeCard from "../ReuseComp/SmallRecipeCard";
import Pagination from "../Components/Pagination";

export default function AllRecipes() {
  
  const [recipes, setRecipes] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1); 

  const [totalRecipes, setTotalRecipes] = useState(0); 

  useEffect(() => {
    setLoading(true);


    const skip = (currentPage - 1) * itemsPerPage; 

    fetch(`https://dummyjson.com/recipes?limit=${itemsPerPage}&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes); 
        setTotalRecipes(data.total); 
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));

  }, [currentPage]); 

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  const totalPages = Math.ceil(totalRecipes / itemsPerPage);

  return (
    <>
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
    </>
  );
}
