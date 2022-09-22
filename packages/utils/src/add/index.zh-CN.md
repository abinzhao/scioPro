---
title: Add
order: 1
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 计算相关
  order: 1
---

## Foo

Demo:

```tsx
import React from 'react';
import { Add } from '@sciopro/utils';

let data = 1;
export default () => {
  const [num, setNum] = React.useState(1);
  React.useEffect(() => {
    data = Add(num);
    return () => (data = 1);
  }, [num]);
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>点我</button>
      <h2>{data}</h2>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
