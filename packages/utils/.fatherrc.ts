import { defineConfig } from 'father';
export default defineConfig({
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  // cssModules: true,
  // extractCSS: true,
  esm: {},
  cjs: {},
  umd: {
    name: 'scioPro-utils',
  },
  // LessInBabelMode: true,
});
