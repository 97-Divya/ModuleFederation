import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<BookingPage />} />
    <Route path="/confirmation" element={<BookingConfirmationPage />} />
  </Routes>
);

export default App;
