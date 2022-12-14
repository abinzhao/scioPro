---
hero:
  title: scioPro
  desc: scioPro is a React UI component library based on the current popular design system, mainly used for modern and personalized products.
  actions:
    - text: Get started quickly
      link: /components
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: out of the box
    desc: Simple and easy to use, reduce the amount of code for users, reduce development costs, encapsulate according to usage habits, easier to use, and reduce learning costs
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: default behavior
    desc: Less code, less bugs, more efficient development efficiency, consistent with real-life processes and logic, and follow the language and concepts that users are used to
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: efficiency feedback
    desc: Through the interface style and interactive dynamic effects, users can clearly perceive their own operations, design a simple and intuitive operation process, and the interface is simple and straightforward, reducing the user's memory burden
  - icon: https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg
    title: TypeScript
    desc: Developed with TypeScript, providing a complete type definition file
  - icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr
    title: Simple to use
    desc: The components precipitated through practice are more suitable for the market and development needs
  - icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr
    title: tool collection
    desc: By extracting various code fragments and function sets, development is more convenient and the amount of code is less
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
      scioPro React Ecology Tool
    </div>
  );
};
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

```tsx | pure
import React from 'react';
import { Button } from '@sciopro/components';

export default () => {
  return <Button>Button</Button>;
};
```

### Hooks usage example

```jsx | pure
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
      <button onClick={() => setNum(num + 1)}>x2</button>
      <h2>{num}</h2>
    </div>
  );
};
```
