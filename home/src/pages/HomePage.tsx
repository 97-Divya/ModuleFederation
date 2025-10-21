import React from "react";
import { useNavigate } from "react-router-dom";
import useMovieStore, { Movie } from "../store/useMovieStore";

export interface HomePageProps {
  username: string;
  logout: () => void;
}

const movies: Movie[] = [
  { id: 1, title: "Avengers", description: "Superhero action", poster: "/posters/avengers.jpg" },
  { id: 2, title: "Interstellar", description: "Space adventure", poster: "/posters/interstellar.jpg" },
  { id: 3, title: "Inception", description: "Mind-bending thriller", poster: "/posters/inception.jpg" },
];

const HomePage: React.FC<HomePageProps> = ({ username, logout }) => {
  const setSelectedMovie = useMovieStore((s) => s.setSelectedMovie);
  const navigate = useNavigate();

  const handleSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {username}</h2>
      <button onClick={logout}>Logout</button>
      <h3>Now Showing</h3>
      <div style={{ display: "flex", gap: 20 }}>
        {movies.map((m) => (
          <div
            key={m.id}
            style={{ border: "1px solid gray", padding: 10, width: 180, cursor: "pointer" }}
            onClick={() => handleSelect(m)}
          >
            <img src={m.poster} alt={m.title} style={{ width: "100%" }} />
            <h4>{m.title}</h4>
            <p>{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
