import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "booking",
  filename: "remoteEntry.js",
  exposes: {
    "./BookingPage": "./src/pages/BookingPage.tsx",
    "./BookingConfirmationPage": "./src/pages/BookingConfirmationPage.tsx",
  },
  remotes: {
    home: "home@http://localhost:3003/remoteEntry.js",
  },
shared: {
  react: { singleton: true, eager: true },
  "react-dom": { singleton: true, eager: true },
  "react-router-dom": { singleton: true, eager: true },
  zustand: { singleton: true, eager: true },
},
});
