import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'scioPro',
  favicon: 'https://file.iviewui.com/view-ui-logo-new.svg',
  logo: 'https://file.iviewui.com/view-ui-logo-new.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  base: process.env.NODE_ENV === 'production' ? '/scioPro/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/scioPro/' : '/',
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
