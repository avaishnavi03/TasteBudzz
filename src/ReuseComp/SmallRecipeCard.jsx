

import React from "react";
import { useNavigate } from "react-router-dom";

function SmallRecipeCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="recipe-card"       
      onClick={() => navigate(`/recipe/${item.id}`)}  
    >
      <img
        src={item.image}
        alt={item.name}
        className="recipe-image"    
      />

      <div className="recipe-overlay">

        <h3 className="recipe-name">{item.name}</h3>
        <div className="flexing">
        <p className="recipe-rating">
          ⭐ {item.rating}</p>
          <p className="recipe-tym">
           {item.prepTimeMinutes}min</p>
          </div>
      </div>
    </div>
  );
}

export default SmallRecipeCard;

