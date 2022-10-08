---
title: Debounce 防抖
order: 2
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 基础函数
  order: 1
---

## Debounce 防抖

在用户停止某个操作一段时间之后才执行相应的监听函数，而不是在用户操作的过程当中，浏览器触发多少次事件，就执行多少次监听函数。

## API

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fn | 需要进行防抖处理的函数 | `()=>void` |  |
| delay | 延迟时间(单位毫秒) | `number` | `1000` |
| immediate | 决定是否要第一次立即执行 | `boolean` | `false` |
| resultFun | 当用户传递了 resultFun 函数时，执行该函数，并将结果以参数传递出去 | `(arg0: any)=>void` |  |
