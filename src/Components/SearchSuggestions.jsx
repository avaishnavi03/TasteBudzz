import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchSuggestions({ query, setQuery }) {
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    fetch(`https://dummyjson.com/recipes/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data.recipes));
  }, [query]);

  if (results.length === 0) return null;

  return (
    <div className="suggestions-box">
      {results.slice(0,6).map((item) => (
        <p className="suggestion-item"
          key={item.id}
          onClick={() =>{ navigate(`/recipe/${item.id}`)
            setQuery("");     
            setResults([]);
          }} >
          {item.name}
        </p>
      ))}
    </div>
  );
}

export default SearchSuggestions;
