import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [preferences, setPreferences] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { username, password, preferences: preferences.split(",") }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
        placeholder="Preferences (comma-separated)"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
