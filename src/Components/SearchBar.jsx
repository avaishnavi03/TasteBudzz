import React, { useState, useEffect } from "react";

function SearchBar({query, setQuery }) {
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(query);
      console.log(debounced);
    }, 300);

  return () => clearTimeout(timer);
}, [query]);
  return (
    <input className="search-input" type="text" placeholder="Search recipes.."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
