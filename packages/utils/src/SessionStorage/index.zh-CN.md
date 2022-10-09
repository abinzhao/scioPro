---
title: Session 存储
order: 2
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 浏览器存储相关
  order: 3
---

## Session 存储

浏览器 Session 存储的工具函数

## 使用方法

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

  return <div>使用方法</div>;
};
```

## API

| 属性名    | 描述               | 类型                                                | 默认值 |
| --------- | ------------------ | --------------------------------------------------- | ------ |
| Set       | 新增，存储         | `(key: string, value: any) => void`                 |        |
| Get       | 查询               | `(key: string) => string，null`                     |        |
| Remove    | 移除               | `(key: string) => void`                             |        |
| SetExpire | 存储一段时间后过期 | `(key: string, value: any, expire: number) => void` |        |
