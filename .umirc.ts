import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'scioPro',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/',
  exportStatic: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  navs: {
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: '掘金',
        path: 'https://juejin.cn/user/2849548342403454',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/abinzhao/scioPro',
      },
    ],
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'Nuggets',
        path: 'https://juejin.cn/user/2849548342403454',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/abinzhao/scioPro',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
