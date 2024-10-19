import { useState } from "react";
import "../style.css";

const Explore = () => {
  // State to hold the search term and the search results
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Sample data for demonstration (URLs of images)
  const data = [
    {
      id: 1,
      title: "iPhone",
      url: "https://via.placeholder.com/300x300?text=Post+1",
    },
    {
      id: 2,
      title: "Tech",
      url: "https://via.placeholder.com/300x300?text=Post+2",
    },
    {
      id: 3,
      title: "City",
      url: "https://via.placeholder.com/300x300?text=Post+3",
    },
    {
      id: 4,
      title: "Cats",
      url: "https://via.placeholder.com/300x300?text=Post+4",
    },
    {
      id: 5,
      title: "Phone",
      url: "https://via.placeholder.com/300x300?text=Post+5",
    },
    {
      id: 6,
      title: "Magic",
      url: "https://via.placeholder.com/300x300?text=Post+6",
    },
    {
      id: 7,
      title: "Cute",
      url: "https://via.placeholder.com/300x300?text=Post+7",
    },
  ];

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Filter the data based on the search term
    if (value) {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  // Choose the display data, either filtered results or original data
  const displayData = results.length > 0 ? results : data;

  return (
    <div className="explore">
      <h2>Explore</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      {/* Grid for displaying posts */}
      <div className="explore-grid">
        {displayData.map((item) => (
          <div key={item.id} className="explore-item">
            <img src={item.url} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
