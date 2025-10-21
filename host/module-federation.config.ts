import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    auth: "auth@http://localhost:3001/remoteEntry.js",
    booking: "booking@http://localhost:3002/remoteEntry.js",
    home: "home@http://localhost:3003/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: false },
    "react-dom": { singleton: true, eager: true, requiredVersion: false },
    "react-router-dom": { singleton: true, eager: true, requiredVersion: false },
    zustand: { singleton: true, eager: true, requiredVersion: false },
  },
});
