// src/components/Feed.jsx
import "../style.css";

const Feed = () => {
  const posts = [
    { user: "Alice", content: "Had a great day!" },
    { user: "Bob", content: "Check out this view!" },
  ]; // Sample posts

  return (
    <div className="feed">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.user}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
