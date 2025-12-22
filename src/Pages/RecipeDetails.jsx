import { LuClock } from "react-icons/lu";
import { LuFlame } from "react-icons/lu";
import { PiForkKnifeFill } from "react-icons/pi";
import { BsGraphUp } from "react-icons/bs";
import { LuGlobe } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { MdOutlinePrint } from "react-icons/md";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageTitle, setFavicon } from "../utils/titleSlice";
import Button from "../Components/Button";
import CookingLoader from "../Components/CookingLoader";

function RecipeDetails() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    if (recipe) {
      dispatch(setPageTitle(recipe.name));
      dispatch(setFavicon(recipe.image));
    }
  }, [recipe]);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }, [id]);

  // if (loading) return <h2>Loading...</h2>;
  if (loading) return <CookingLoader />;
  if (error) return <h2>{error}</h2>;

  const toggleCheck = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="page-container details-container">
      <div className="main-img image-wrap noPrint">
        <img src={recipe.image} alt={recipe.name} className="full-img" />
        <h1 className="image-title">{recipe.name}</h1>
      </div>

      <div className="over-ing-ins-grid">

        <div className="overview">
        <h1 className="printOnly">{recipe.name}</h1>

          <h2 className="section-title noPrint">Recipe Overview</h2>
          <div className="overview-grid">
            <div className="ov-item">
              <LuClock className="ov-icon" /> 
              <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
            </div>
            <div className="ov-item">
              <LuFlame className="ov-icon" />
              <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
            </div>

            <div className="ov-item">
              <PiForkKnifeFill className="ov-icon" />
              <p><strong>Servings:</strong> {recipe.servings}</p>
            </div>

            <div className="ov-item">
              <BsGraphUp className="ov-icon" />
              <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
            </div>

            <div className="ov-item">
              <LuGlobe className="ov-icon" />
              <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            </div>

            <div className="ov-item">
              <FaFire className="ov-icon" />
              <p><strong>Calories:</strong> {recipe.caloriesPerServing}</p>
            </div>

          </div>

          <div className="btn-row noPrint">

            <Button variant="primary">
              Save Recipe
            </Button>

            <button className="icon-btn" onClick={handlePrint}>
             <MdOutlinePrint size={20}/>
            </button>

            <button className="icon-btn">
              <PiShareFatLight size={20} />
            </button>
          </div>
        </div>

        <div className="ing-box">
          <h3 className="section-title">Ingredients</h3>

          {recipe.ingredients.map((ing, index) => (
            <div key={index} className="ing-item">
              <input
                type="checkbox"
                checked={!!checkedItems[index]}
                onChange={() => toggleCheck(index)}
              />
              <span className={checkedItems[index] ? "ing-checked" : ""}>
                {ing}
              </span>
            </div>
          ))}
        </div>

        <div className="ins-box">
          <h3 className="section-title">Instructions</h3>

          {recipe.instructions.map((step, index) => (
            <div key={index} className="ins-step">
              <span className="step-num">{index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default RecipeDetails;
