import React, { useEffect, useState } from "react";
import SmallRecipeCard from "../ReuseComp/SmallRecipeCard";
import Pagination from "../Components/Pagination";
import CookingLoader from "../Components/CookingLoader";
import Button from "./Button";


export default function RecipeByTag() {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState(null)

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [totalRecipes, setTotalRecipes] = useState(0);


  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then(data => {
        return data.json()
      }).then(data => {
        setTags(data)
      })
  }, [])

  useEffect(() => {


    const skip = (currentPage - 1) * itemsPerPage;

    if(!selectedTag){
        setLoading(false)
        setRecipes([])
        return;
    }
    setLoading(true);


    fetch(`https://dummyjson.com/recipes/tag/${selectedTag}?limit=${itemsPerPage}&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes);
        setTotalRecipes(data.total);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));

  }, [selectedTag,currentPage]);

  // if (loading) return <h3>Loading...</h3>;
  if (loading) return <CookingLoader />;

  if (error) return <h3>Error: {error}</h3>;

  const totalPages = Math.ceil(totalRecipes / itemsPerPage);

  return (
    <div className='tag-item-container'>
        Select to tag to continue

       { selectedTag && <div className="btn-row">
             <Button variant="outline">{selectedTag}</Button>
             <Button onClick={()=>{
                setSelectedTag(null)
             }}>
                Clear
             </Button>
        </div>}
      {!selectedTag &&<div className="tags-container">
        {tags.map(tag => <Button variant="outline"
        onClick={()=>{
            setSelectedTag(tag)
        }}
        >{tag}</Button>)}
      </div>}
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
