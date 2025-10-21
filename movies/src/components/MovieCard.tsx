import React from "react";

interface MovieCardProps {
  title: string;
  image: string;
  rating: string;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, rating, onClick }) => {
  return (
    <div
      className="movie-card"
      onClick={onClick}
      style={{
        cursor: "pointer",
        margin: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "180px",
      }}
    >
      <img src={image} alt={title} style={{ width: "100%", borderRadius: "6px" }} />
      <h4>{title}</h4>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
