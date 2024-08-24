import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import PostList from "./components/PostList";
import Recommendations from "./components/Recommendation";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/" element={<PostList />} />
      </Routes>
    </Router>
  );
};

export default App;
