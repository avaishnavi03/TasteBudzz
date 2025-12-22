import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";
import Button from "./Button";
function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function goToSearchPage() {
    navigate(`/search?q=${query}`);
  }

  function goToHome(){
    navigate("/");
  }

  return (
    <header className="header">
      <img
        src="/tastebudslogo.png"
        alt="TasteBudzz Logo"
        className="header-logo"
        onClick={goToHome}
        style={{cursor:"pointer"}}
      />
      {/* <h2 className="logo">TasteBudzz</h2> */}

      <div className="search-section">
        <SearchBar query={query} setQuery={setQuery} />
        <Button className="search-btn" onClick={goToSearchPage}>
          Search
        </Button>
        <SearchSuggestions query={query} setQuery={setQuery} />
      </div>

    </header>
  );
}

export default Header;
