// src/bootstrap.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Check if running standalone
const isStandalone = !window.__FEDERATION__;

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);

  if (isStandalone) {
    // Running standalone (dev mode)
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  } else {
    // Running as remote inside host
    root.render(<App />);
  }
}
