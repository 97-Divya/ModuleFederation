// import { defineConfig } from '@rsbuild/core';
// import { pluginReact } from '@rsbuild/plugin-react';
// import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
// import moduleFederationConfig from './module-federation.config';

// export default defineConfig({
//   plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
//   server: {
//     port: 3001,
//   },
// });
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import moduleFederationConfig from "./module-federation.config";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation(moduleFederationConfig)
  ],
  server: {
    port: 3001, // dev server port
      cors: true, // or allowlist of your host URL

  },
});
