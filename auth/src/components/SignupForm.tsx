import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import "./Auth.css";

interface SignupFormProps {
  onSignup?: () => void; // Optional callback
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const signup = useAuthStore((state) => state.signup);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const success = signup(username, password);
    if (success && onSignup) onSignup();
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
