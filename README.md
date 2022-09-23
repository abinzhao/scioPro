<div align="center">
  <a href="http://abinzhao.github.io/scioPro" target="_blank">
    <img alt="scioPro Logo" width="200" src="https://file.iviewui.com/view-ui-logo-new.svg"/>
  </a>
</div>
<div align="center">
  <h1>scioPro</h1>
</div>

<div align="center">
<div align="center">
A lightweight React toolchain built through Monorepo multi-package repository, including react component library, hooks library and tool function library
</div>

<img src="https://img.shields.io/github/stars/abinzhao/scioPro" alt="stars">
<img src="https://img.shields.io/badge/react-v18.2.0%2B-%23407fbc" alt="react">
<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="licence">

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

## 加入开发

```bash
# Pull repository code
git clone https://github.com/abinzhao/scioPro.git

# Enter the branch and install the dependencies
cd ./scioPro
yarn install

# Create new branch from master branch and enter, start developing

git checkout -b sciopro/[Semantic name]
# such as：git checkout -b sciopro/dev-button

```

## 🖥 Browser Compatibility

- Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- [Electron](https://www.electronjs.org/)

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![electron_48x48](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## On-demand loading/TypeScript

`@sciopro/components`，`@sciopro/hooks`,`@sciopro/utils` The JS code supports tree shaking based on ES modules by default, and is written in TypeScript and provides a complete definition file.

## Install

```bash
yarn add @sciopro/components or(npm run @sciopro/components) // 📦 components
yarn add @sciopro/hooks or(npm run @sciopro/hooks) // 🚀 hooks
yarn add @sciopro/utils or(npm run @sciopro/utils) // 🔧 utils
```

### It is recommended to use `pnpm` to install

```bash
pnpm run @sciopro/components  // 📦 components
pnpm run @sciopro/hooks  // 🚀 hooks
pnpm run @sciopro/utils  // 🔧 utils
```

### Component usage example

```tsx
import React from 'react';
import { Button } from '@sciopro/components';

export default () => {
  return <Button>Button</Button>;
};
```

### Hooks usage example

```jsx
import React from 'react';
import { ViewportProvider, useViewport } from '@sciopro/hooks';
const MyComponent = () => {
  const { width, height } = useViewport();
  const breakpoint = 620;
  return width < breakpoint ? (
    <div>
      Hello, small screen, the current screen width and height is：width:{width},height:{height}
    </div>
  ) : (
    <div>
      Hello, big screen, the current screen width and height is：width:{width},height:{height}
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

### Utils usage example

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
