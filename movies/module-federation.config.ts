// movie-details-app/module-federation.config.ts
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "movies",
  filename: "remoteEntry.js",
  exposes: {
    "./MovieDetailsPage": "./src/pages/MovieDetailsPage.tsx",
  },
  shared: {
    react: { singleton: true, requiredVersion: false, eager: true },
    "react-dom": { singleton: true, requiredVersion: false, eager: true },
    zustand: { singleton: true, requiredVersion: false, eager: true },
    "react-router-dom": { singleton: true, requiredVersion: false, eager: true },
  },
});
