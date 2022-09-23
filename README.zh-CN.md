<div align="center">
  <a href="http://concis.org.cn/#/" target="_blank">
    <img alt="Concis Logo" width="200" src="http://concis.org.cn/images/concis-logo.png"/>
  </a>
</div>
<div align="center">
  <h1>Concis</h1>
</div>

<div align="center">

一个轻量级的通过 Monorepo 多包仓库搭建的 react 工具链，其中包括 react 组件库，hooks 库以及工具函数库

<img src="https://img.shields.io/github/stars/abinzhao/scioPro" alt="stars">
<img src="https://img.shields.io/badge/react-v18.2.0%2B-%23407fbc" alt="react">
<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="licence">
<img src="https://github.com/abinzhao/scioPro/workflows/CI/badge.svg" alt="ci">

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

## 加入开发

```bash
# 拉取仓库代码
git clone https://github.com/abinzhao/scioPro.git

# 进入分支，安装依赖
cd ./scioPro
yarn install

# 从master分支创建新分支并进入，开始开发

git checkout -b sciopro/[语义化名称]
# 例如：git checkout -b sciopro/dev-button

```

## 🖥 浏览器兼容性

- 现代浏览器和 Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- [Electron](https://www.electronjs.org/)

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![electron_48x48](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 按需加载/TypeScript

`@sciopro/components`，`@sciopro/hooks`,`@sciopro/utils` JS 代码默认支持基于 ES 模块的 tree Shaking，使用 TypeScript 编写并提供完整的定义文件.

## 安装

```bash
yarn add @sciopro/components or(npm run @sciopro/components) // 📦 components
yarn add @sciopro/hooks or(npm run @sciopro/hooks) // 🚀 hooks
yarn add @sciopro/utils or(npm run @sciopro/utils) // 🔧 utils
```

### 推荐使用`pnpm`安装

```bash
pnpm run @sciopro/components  // 📦 components
pnpm run @sciopro/hooks  // 🚀 hooks
pnpm run @sciopro/utils  // 🔧 utils
```

### Component 使用示例

```tsx
import React from 'react';
import { Button } from '@sciopro/components';

export default () => {
  return <Button>Button</Button>;
};
```

### Hooks 使用示例

```tsx
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

### Utils 使用示例

```jsx
import React from 'react';
import { Add } from '@sciopro/utils';

export default () => {
  const [num, setNum] = React.useState(0);
  React.useEffect(() => {
    Add(num);
  }, [num]);
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>x2</button>
      <h2>{num}</h2>
    </div>
  );
};
```
