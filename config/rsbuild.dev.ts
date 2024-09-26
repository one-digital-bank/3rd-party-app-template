import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const publicPath = process.env.PUBLIC_PATH || '/';
const basePath = publicPath === '/' ? '' : publicPath;

const rsbuildConfig = defineConfig({
  plugins: [pluginReact()],
  output: {
    sourceMap: {
      js: false,
      css: false,
    },
    dataUriLimit: {
      font: Number.MAX_SAFE_INTEGER,
    },
  },
  html: {
    template: './public/index.html',
  },
  source: {
    define: {
      PUBLIC_PATH: JSON.stringify(publicPath),
      API_BASE_PATH: JSON.stringify(basePath),
    },
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 4080,
    historyApiFallback: {
      index: `${basePath}/`,
      disableDotRule: true,
    },
  },
  dev: {
    assetPrefix: `http://localhost:4080${basePath}/`,
  },
});

export default rsbuildConfig;
