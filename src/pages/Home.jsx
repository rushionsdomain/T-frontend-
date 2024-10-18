// src/pages/Home.jsx
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import Feed from "../components/Feed";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="content">
        <Stories />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
