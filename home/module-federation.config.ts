// home-app/module-federation.config.ts
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "home",
  filename: "remoteEntry.js",
  exposes: {
    "./HomePage": "./src/pages/HomePage.tsx",
  },
  shared: {
    react: { singleton: true, requiredVersion: false, eager: true },
    "react-dom": { singleton: true, requiredVersion: false, eager: true },
    zustand: { singleton: true, requiredVersion: false, eager: true }, // ready for integration later
  },
});
