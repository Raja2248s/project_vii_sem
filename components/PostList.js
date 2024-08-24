import axios from "axios";
import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:5000/api/posts", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      await axios.post(
        "http://localhost:5000/api/posts/like",
        { postId },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      alert("Post liked!");
    } catch (error) {
      console.error("Like failed");
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>Likes: {post.likes}</p>
          <button onClick={() => handleLike(post._id)}>Like</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
