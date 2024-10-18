// src/pages/Explore.jsx
import { useState } from "react";
import "../style.css";

const Explore = () => {
  // State to hold the search term and the search results
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Sample data for demonstration (You can replace this with actual data)
  const data = [
    "Photography",
    "Travel",
    "Food",
    "Technology",
    "Fashion",
    "Sports",
    "Music",
    "Movies",import
  ];

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Filter the data based on the search term
    if (value) {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="explore">
      <h2>Explore</h2>
      <p>Discover new things here!</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      {/* Display Search Results */}
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Explore;
