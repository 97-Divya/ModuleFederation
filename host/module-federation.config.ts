// import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

// export default createModuleFederationConfig({
//   name: 'host',
//   exposes: {},
//   remotes: {
//     'provider': 'rslib_provider@https://unpkg.com/module-federation-rslib-provider@latest/dist/mf/mf-manifest.json',
//     auth: 'auth@http://localhost:3001/remoteEntry.js',
//     // home: 'home@http://localhost:3002/remoteEntry.js',
//     // movies: 'movies@http://localhost:3003/remoteEntry.js',
//     // booking: 'booking@http://localhost:3004/remoteEntry.js',
//     // shared: 'shared-lib@http://localhost:3005/remoteEntry.js',

//   },
//   shareStrategy: 'loaded-first',
//   shared: {
//     react: { singleton: true },
//     'react-dom': { singleton: true },
//     zustand: { singleton: true, requiredVersion: false },
//   },
// });
// host/module-federation.config.ts
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    auth: "auth@http://localhost:3001/remoteEntry.js",
    home: "home@http://localhost:3002/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, requiredVersion: false, eager: true },
    "react-dom": { singleton: true, requiredVersion: false, eager: true },
    zustand: { singleton: true, requiredVersion: false, eager: true }, // important!
  },
});
