// home-app/src/pages/HomePage.tsx
import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeaturedMovies from "../components/FeaturedMovies";

interface HomePageProps {
  username: string | null;
  logout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ username, logout }) => {
  return (
    <div>
      <Header username={username} logout={logout} />
      <Banner />
      <FeaturedMovies />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>All Movies</h2>
        <p>Here would be the complete movie list and other sections...</p>
      </div>
    </div>
  );
};

export default HomePage;
