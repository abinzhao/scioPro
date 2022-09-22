---
hero:
  title: scioPro
  desc: scioPro 是基于目前流行的设计体系而生的 React UI 组件库，主要用于现代化、个性化的产品。
  actions:
    - text: 快速上手
      link: /components
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: 简单易用，降低使用者的代码量,降低开发成本，根据使用习惯进行封装,更加易用,减少学习成本
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 预设行为
    desc: 更少的代码，更少的 Bug,更加高效的开发效率，与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 效率反馈
    desc: 通过界面样式和交互动效让用户可以清晰的感知自己的操作，设计简洁直观的操作流程,界面简单直白,减少用户记忆负担
  - icon: https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg
    title: TypeScript
    desc: 使用 TypeScript 开发，提供完整的类型定义文件
  - icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr
    title: 简单易用
    desc: 通过实践沉淀出的组件，更加适合市场以及开发需求
  - icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr
    title: 工具集合
    desc: 通过抽离各种代码片段与功能集合，使开发上手更加方便，代码量更少
footer: Open-source MIT Licensed | Copyright © 2022<br />Powered by [dumi](https://d.umijs.org)
---

```tsx
/**
 * inline: true
 */
import React from 'react';

export default () => {
  return (
    <div style={{ textAlign: 'center', color: '#1890ff', fontSize: '3rem', fontWeight: 'bold' }}>
      scioPro React 生态工具
    </div>
  );
};
```

## 🖥 浏览器兼容性

- 现代浏览器和 Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- [Electron](https://www.electronjs.org/)

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![electron_48x48](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 按需加载/TypeScript

`@sciopro/components`，`@sciopro/hooks`,`@sciopro/utils` 的 JS 代码默认支持基于 ES modules 的 tree shaking,并且使用 TypeScript 进行书写并提供了完整的定义文件。

## 安装

```bash
yarn add @sciopro/components or(npm run @sciopro/components) // 📦 组件库
yarn add @sciopro/hooks or(npm run @sciopro/hooks) // 🚀 hooks库
yarn add @sciopro/utils or(npm run @sciopro/utils) // 🔧 工具函数库
```

### 推荐使用`pnpm`安装

```bash
pnpm run @sciopro/components  // 📦 组件库
pnpm run @sciopro/hooks  // 🚀 hooks库
pnpm run @sciopro/utils  // 🔧 工具函数库
```

### 组件使用示例

```tsx | pure
import React from 'react';
import { Button } from '@sciopro/components';

export default () => {
  return <Button>primary粒子按钮</Button>;
};
```

### hooks 使用示例

```jsx | pure
import React from 'react';
import { ViewportProvider, useViewport } from '@sciopro/hooks';
const MyComponent = () => {
  const { width, height } = useViewport();
  const breakpoint = 620;
  return width < breakpoint ? (
    <div>
      你好，小屏幕,当前屏幕宽高为：width:{width},height:{height}
    </div>
  ) : (
    <div>
      Hello，大屏幕,当前屏幕宽高为：width:{width},height:{height}
    </div>
  );
};
export default () => {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
};
```

### utils 工具函数 使用示例

```jsx | pure
import React from 'react';
import { Add } from '@sciopro/utils';

export default () => {
  const [num, setNum] = React.useState(0);
  React.useEffect(() => {
    Add(num);
  }, [num]);
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>点我</button>
      <h2>{num}</h2>
    </div>
  );
};
```
