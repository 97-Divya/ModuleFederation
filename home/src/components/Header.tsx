// home-app/src/components/Header.tsx
import React from "react";

interface HeaderProps {
  username: string | null;
  logout: () => void;
}

const Header: React.FC<HeaderProps> = ({ username, logout }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#1c1c1c",
        color: "white",
      }}
    >
      <h2>BookMyShow Clone</h2>
      <div>
        {username && (
          <>
            <span style={{ marginRight: "15px" }}>Welcome, {username}!</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
