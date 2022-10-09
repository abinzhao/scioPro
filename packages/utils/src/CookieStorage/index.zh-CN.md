---
title: Cookie 存储
order: 2
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 浏览器存储相关
  order: 3
---

## Cookie 存储

浏览器 Cookie 存储的工具函数

## 使用方法

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

  return <div>使用方法</div>;
};
```

## API

| 属性名 | 描述       | 类型                                                | 默认值 |
| ------ | ---------- | --------------------------------------------------- | ------ |
| Set    | 新增，存储 | `(key: string, value: any, expire: number) => void` |        |
| Get    | 查询       | `(key: string) => string`                           |        |
| Remove | 移除       | `(key: string) => void`                             |        |
