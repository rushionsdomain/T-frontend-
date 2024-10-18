// src/components/Stories.jsx
import "../style.css";

const Stories = () => {
  const stories = ["Alice", "Bob", "Charlie", "Diana"]; // Sample users with stories
  return (
    <div className="stories">
      {stories.map((user, index) => (
        <div key={index} className="story">
          <img
            src={`https://via.placeholder.com/50?text=${user}`}
            alt={`${user}'s story`}
            className="story-img"
          />
          <p>{user}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
