import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(e.key)
      onSearch(query);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
