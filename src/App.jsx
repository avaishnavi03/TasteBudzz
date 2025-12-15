import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import MealsType from "./Components/MealsType";
import MealTypeRecipes from "./Components/MealTypeRecipes";
import Login from "./Pages/Login";
import RecipeDetails from "./Pages/RecipeDetails";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";
import SearchResults from "./Pages/SearchResults";

function App() {
  const { pageTitle, favicon } = useSelector((state) => state.title);

  useEffect(() => {
    document.title = pageTitle;
    const faviconTag = document.querySelector("link[rel='icon']");
    if (favicon && faviconTag) {
      faviconTag.href = favicon;
    }
  }, [pageTitle, favicon]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<MealsType />} />
        <Route path="/meals/:mealType" element={<MealTypeRecipes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
