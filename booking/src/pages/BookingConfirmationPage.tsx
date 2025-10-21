import React from "react";
import { useNavigate } from "react-router-dom";

const BookingConfirmationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Booking Confirmed ✅</h2>
      <button onClick={() => navigate("/home")}>Go to Home</button>
    </div>
  );
};

export default BookingConfirmationPage;
