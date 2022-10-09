---
title: Cookie Storage
order: 3
nav:
  title: Utility function
  path: /utils
  order: 4
group:
  title: Browser storage related
  order: 3
---

## Cookie Storage

Utility functions for browser CookieStorage storage.

## Instructions

```jsx | pure
import React from 'react';
// @ts-ignore
import { CookieStorage } from '@sciopro/utils';

export default () => {
  // 存储，新增
  CookieStorage.Set('name', 'scioPro'，2);
  // 查询
  CookieStorage.Get('name');
  // 移除
  CookieStorage.Remove('name');

  return <div>Instructions</div>;
};
```

## API

| 属性名 | 描述       | 类型                                                | 默认值 |
| ------ | ---------- | --------------------------------------------------- | ------ |
| Set    | 新增，存储 | `(key: string, value: any, expire: number) => void` |        |
| Get    | 查询       | `(key: string) => string`                           |        |
| Remove | 移除       | `(key: string) => void`                             |        |
