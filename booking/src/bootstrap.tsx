// booking/src/bootstrap.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);

const isStandalone = !window.__FEDERATION__;

if (isStandalone) {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  root.render(<App />);
}
