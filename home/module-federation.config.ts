// home/module-federation.config.ts
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "home",
  filename: "remoteEntry.js",
exposes: {
  "./HomePage": "./src/pages/HomePage.tsx",
  "./MovieDetailsPage": "./src/pages/MovieDetailsPage.tsx",
  "./useMovieStore": "./src/store/useMovieStore.ts",
},
  shared: {
    react: { singleton: true, eager: true, requiredVersion: false },
    "react-dom": { singleton: true, eager: true, requiredVersion: false },
    "react-router-dom": { singleton: true, eager: true, requiredVersion: false },
    zustand: { singleton: true, eager: true, requiredVersion: false },
  },
});
