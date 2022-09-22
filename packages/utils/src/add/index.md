---
nav:
  title: Utils
  path: /utils
---

## Foo

Demo:

```tsx
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

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
