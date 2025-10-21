import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage username="Guest" logout={() => {}} />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
  );
};

export default App;
