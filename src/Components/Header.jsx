import React, {useState}from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";

function Header() {
  const navigate = useNavigate();
  const [query,setQuery] = useState("");

   function goToSearchPage() {
    navigate(`/search?q=${query}`);
  }

  return (
    <header className="header">
      <h2 className="logo">TasteBudzz</h2>

      <div className="search-section">
        <SearchBar query={query} setQuery={setQuery} />
        <button className="search-btn" onClick={goToSearchPage}>
          Search
          </button>
          <SearchSuggestions query={query} setQuery={setQuery} />
         </div>

      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navigate("/")}>
          Home
        </button>

        <button className="nav-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
