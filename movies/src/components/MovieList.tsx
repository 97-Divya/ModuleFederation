import React from "react";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: string;
}

interface MovieListProps {
  movies: Movie[];
  onMovieClick?: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
          rating={movie.rating}
          onClick={() => onMovieClick && onMovieClick(movie)}
        />
      ))}
    </div>
  );
};

export default MovieList;
