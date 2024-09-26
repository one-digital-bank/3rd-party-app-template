import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

const publicPath = process.env.PUBLIC_PATH || '/';
const basePath = publicPath === '/' ? '' : publicPath;

export default defineConfig({
  plugins: [pluginReact(), pluginTypeCheck()],
  html: {
    template: './public/index.html',
  },
  output: {
    dataUriLimit: {
      font: Number.MAX_SAFE_INTEGER,
    },
    assetPrefix: '.',
  },
  source: {
    define: {
      PUBLIC_PATH: JSON.stringify(publicPath),
      API_BASE_PATH: JSON.stringify(basePath),
    },
  },
});
