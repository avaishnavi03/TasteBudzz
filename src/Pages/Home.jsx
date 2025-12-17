import React,{useEffect} from "react";
import MealsType from "../Components/MealsType";
// import TopRatedRecipes from "../Components/TopRatedRecipes";
import RecipesDisplay from "../Components/RecipesDisplay";
import { useDispatch } from "react-redux";
import { setPageTitle, setFavicon } from "../utils/titleSlice";


function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setPageTitle("Home"));
    dispatch(setFavicon("/homeicon.png"));
  },[]);
  return (
    <div className="page-container">
      <MealsType />
      {/* <TopRatedRecipes /> */}
      <RecipesDisplay />
    </div>
  );
}

export default Home;
