import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import SignupForm from "./SignupForm";
import "./Auth.css";

const LoginForm: React.FC = () => {
  const login = useAuthStore((state) => state.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) setShowSignup(true);
  };

  if (showSignup) {
    return <SignupForm onSignup={() => setShowSignup(false)} />;
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        New user?{" "}
        <span className="link" onClick={() => setShowSignup(true)}>
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
