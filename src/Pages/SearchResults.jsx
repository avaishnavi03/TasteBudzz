import React, { useEffect, useState } from "react"; 
import SmallRecipeCard from "../ReuseComp/SmallRecipeCard";
import Pagination from "../Components/Pagination"; 

function SearchResults() {
  const [recipes, setRecipes] = useState([]);

  const query = new URLSearchParams(location.search).get("q");

  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes); 
        setCurrentPage(1); 
      });
  }, [query]);

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage; 
  const currentData = recipes.slice(start, start + itemsPerPage); 

  return (
    <div className="page-container recipes-container">
      <h2 className="recipe-title">Search "{query}"</h2>

      <div className="recipes-grid">
        {currentData.map((item) => (
          <SmallRecipeCard key={item.id} item={item} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage} 
        />
      )}
    </div>
  );
}

export default SearchResults;
