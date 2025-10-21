import React from "react";
import { useNavigate } from "react-router-dom";
import useMovieStore from "../store/useMovieStore";

const MovieDetailsPage: React.FC = () => {
  const { selectedMovie } = useMovieStore();
  const navigate = useNavigate();

  if (!selectedMovie) {
    return <p>No movie selected. Go back to Home.</p>;
  }

  const handleBook = () => navigate("/booking");

  return (
    <div style={{ padding: 20 }}>
      <h2>{selectedMovie.title}</h2>
      <img src={selectedMovie.poster} alt={selectedMovie.title} style={{ width: 250 }} />
      <p>{selectedMovie.description}</p>
      <button onClick={handleBook}>Book Now</button>
    </div>
  );
};

export default MovieDetailsPage;
