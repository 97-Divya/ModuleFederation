// import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';
// // import { defineConfig } from "@module-federation/rsbuild";

// export default createModuleFederationConfig({
//   name: 'auth',
//   filename: 'remoteEntry.js',
//   exposes: {
//     './LoginForm': './src/components/LoginForm.tsx',
//     './SignupForm': './src/components/SignupForm.tsx',
//     './useAuthStore': './src/store/useAuthStore.ts',
//     './WelcomePage': './src/components/WelcomePage.tsx'
//   },
//   shared: {
//     react: { singleton: true },
//     'react-dom': { singleton: true },
//     zustand: { singleton: true, requiredVersion: false },
//   },
// });
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "auth", // must match host remotes key
  filename: "remoteEntry.js",
  exposes: {
    "./LoginForm": "./src/components/LoginForm.tsx",
    "./SignupForm": "./src/components/SignupForm.tsx",
    "./useAuthStore": "./src/store/useAuthStore.ts",
    "./WelcomePage": "./src/components/WelcomePage.tsx",
  },
  shared: {
    react: { singleton: true, requiredVersion: false, eager: true },
    "react-dom": { singleton: true, requiredVersion: false, eager: true },
    zustand: { singleton: true, requiredVersion: false, eager: true },
  },
});
