import React from "react";
import { useNavigate } from "react-router-dom";
import useMovieStore from "home/useMovieStore"; // shared remote store

const BookingPage: React.FC = () => {
  const { selectedMovie } = useMovieStore();
  const navigate = useNavigate();

  if (!selectedMovie) {
    return <p>No movie selected. Please select one from Home.</p>;
  }

  const confirmBooking = () => {
    navigate("/confirmation");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Booking for: {selectedMovie.title}</h2>
      <p>{selectedMovie.description}</p>
      <button onClick={confirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingPage;
