import { defineConfig } from 'dumi';

const BASE_PATH = '/use-portal/';

export default defineConfig({
  outputPath: 'docs-dist',
  base: BASE_PATH,
  publicPath: BASE_PATH,
  mfsu: false,
  title: 'usePortal',
  themeConfig: {
    name: '@lemonied/use-portal',
  },
});
