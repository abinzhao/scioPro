---
title: TimeTop 防抖
order: 1
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 性能相关
  order: 1
---

## Foo

Demo:

```tsx
import React from 'react';
import { Debounce } from '@sciopro/utils';
import { Button } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Button onClick={Debounce}>防抖</Button>
    </div>
  );
};
```
