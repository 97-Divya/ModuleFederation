// home-app/src/components/FeaturedMovies.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import useMovieStore, { Movie } from "../store/useMovieStore";
import "./FeaturedMovies.css";

const movies: Movie[] = [
  { id: 1, title: "Avengers" },
  { id: 2, title: "Inception" },
  { id: 3, title: "Interstellar" },
  { id: 4, title: "The Dark Knight" },
  { id: 5, title: "Joker" },
  { id: 6, title: "Tenet" },
];

const FeaturedMovies: React.FC = () => {
  const selectMovie = useMovieStore((state) => state.selectMovie);
  const navigate = useNavigate();

  const handleClick = (movie: Movie) => {
    selectMovie(movie); // store selected movie
    navigate("/movie/" + movie.id); // go to details page
  };

  return (
    <div className="featured-container">
      <h3>Featured Movies</h3>
      <div className="featured-movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="featured-movie"
            onClick={() => handleClick(movie)}
          >
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
