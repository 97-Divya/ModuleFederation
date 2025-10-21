// movie-details-app/src/pages/MovieDetailsPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBookingStore from "../store/useBookingStore";

interface Movie {
  id: number;
  title: string;
  description?: string;
  image?: string;
  rating?: string;
}

const MOCK_MOVIES: Movie[] = [
  { id: 1, title: "Avengers", description: "Superhero action", image: "https://via.placeholder.com/300x420?text=Avengers" },
  { id: 2, title: "Inception", description: "Mind-bending thriller", image: "https://via.placeholder.com/300x420?text=Inception" },
  { id: 3, title: "Interstellar", description: "Sci-fi epic", image: "https://via.placeholder.com/300x420?text=Interstellar" },
];

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const [movie, setMovie] = useState<Movie | null>(null);
  const addBooking = useBookingStore((s) => s.addBooking);
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    // In real app: fetch(`/api/movies/${movieId}`)
    const found = MOCK_MOVIES.find((m) => m.id === movieId) ?? null;
    setMovie(found);
  }, [movieId]);

  if (!movie) {
    return <div style={{ padding: 20 }}>Movie not found.</div>;
  }

  const handleBook = () => {
    setIsBooking(true);
    // Simulate async workflow (e.g., seat selection) - here immediate
    const booking = addBooking({ movieId: movie.id, title: movie.title, poster: movie.image });
    // redirect to bookings page
    navigate("/my-bookings");
    setIsBooking(false);
  };

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 20 }}>
        <img src={movie.image} alt={movie.title} style={{ width: 300, height: 420, objectFit: "cover", borderRadius: 8 }} />
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <p>Rating: {movie.rating ?? "N/A"}</p>
          <div style={{ marginTop: 24 }}>
            <button onClick={handleBook} disabled={isBooking}>
              {isBooking ? "Booking..." : "Book Tickets"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
