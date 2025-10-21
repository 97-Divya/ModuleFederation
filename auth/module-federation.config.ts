import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "auth",
  filename: "remoteEntry.js",
  exposes: {
    "./LoginForm": "./src/components/LoginForm.tsx",
    "./SignupForm": "./src/components/SignupForm.tsx",
    "./useAuthStore": "./src/store/useAuthStore.ts",
    "./WelcomePage": "./src/components/WelcomePage.tsx",
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: false },
    "react-dom": { singleton: true, eager: true, requiredVersion: false },
    zustand: { singleton: true, eager: true, requiredVersion: false },
  },
});
