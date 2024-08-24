import axios from "axios";
import React, { useEffect, useState } from "react";

const Recommendations = () => {
  const [recommendedPosts, setRecommendedPosts] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts/recommendations",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setRecommendedPosts(response.data);
    };
    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended Posts</h2>
      {recommendedPosts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
