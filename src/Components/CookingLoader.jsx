import React from "react";
import "./CookingLoader.css";  

function CookingLoader() {
  return (
    <div className="cooking-loader-page">
      <h1>Cooking in progress...</h1>

      <div id="cooking">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>

        <div id="area">
          <div id="sides">
            <div id="pan"></div>
            <div id="handle"></div>
          </div>

          <div id="pancake">
            <div id="pastry"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookingLoader;
