---
title: Session Storage
order: 2
nav:
  title: Utility function
  path: /utils
  order: 4
group:
  title: Browser storage related
  order: 3
---

## Session Storage

Utility functions for browser SessionStorage storage.

## Instructions

```jsx | pure
import React from 'react';
// @ts-ignore
import { SessionStorage } from '@sciopro/utils';

export default () => {
  // 存储，新增
  SessionStorage.Set('name', 'scioPro');
  // 查询
  SessionStorage.Get('name');
  // 移除
  SessionStorage.Remove('name');
  // 存储一段时间后过期 单位:毫秒
  SessionStorage.SetExpire('name', 'scioPro', 60000);

  return <div>Instructions</div>;
};
```

## API

| 属性名    | 描述               | 类型                                                | 默认值 |
| --------- | ------------------ | --------------------------------------------------- | ------ |
| Set       | 新增，存储         | `(key: string, value: any) => void`                 |        |
| Get       | 查询               | `(key: string) => string，null`                     |        |
| Remove    | 移除               | `(key: string) => void`                             |        |
| SetExpire | 存储一段时间后过期 | `(key: string, value: any, expire: number) => void` |        |
