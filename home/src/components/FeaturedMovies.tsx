// home-app/src/components/FeaturedMovies.tsx
import React from "react";

const movies = [
  "Avengers",
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Joker",
  "Tenet",
];

const FeaturedMovies: React.FC = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h3>Featured Movies</h3>
      <div style={{ display: "flex", gap: "15px", overflowX: "auto" }}>
        {movies.map((movie) => (
          <div
            key={movie}
            style={{
              minWidth: "150px",
              height: "220px",
              backgroundColor: "#eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
            }}
          >
            {movie}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
