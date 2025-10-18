import React from "react";
import useAuthStore from "../store/useAuthStore";

const WelcomePage: React.FC = () => {
  const loggedInUser = useAuthStore((state) => state.loggedInUser);
  const logout = useAuthStore((state) => state.logout);

  if (!loggedInUser) return null;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {loggedInUser}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default WelcomePage;
