// movie-details-app/src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./pages/MovieDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
