import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MealsType() {
  const navigate = useNavigate();
  const mealTypes = ["Breakfast","Lunch","Dinner","Snack","Dessert","Appetizer","Side Dish","Beverage"];
 
  const [images, setImages] = useState({});

  useEffect(() => {
    mealTypes.forEach((type) => {
      fetch(`https://dummyjson.com/recipes/meal-type/${type.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.recipes && data.recipes.length > 0) {
            setImages((prev) => ({
              ...prev,
              [type]: data.recipes[2].image,
            }));
          }
        })
        .catch(() => {});
    });
  }, []);

  return (
    <div className="meal-container">
      <h2 className="meal-title">Meal Categories</h2>

      <div className="meal-scroll">
        {mealTypes.map((type) => (
          <div
            key={type}
            className="meal-card-new"
            onClick={() => navigate(`/meals/${type.toLowerCase()}`)}
          >
            <img src={images[type]} alt={type} className="meal-img" />

            <div className="meal-ontext" />
            <p className="meal-text">{type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealsType;
