---
title: Debounce
order: 2
nav:
  title: Utility function
  path: /utils
  order: 4
group:
  title: Base Function
  order: 1
---

## Debounce

The corresponding listener function is executed after the user stops an operation for a period of time, instead of executing the listener function as many times as the browser triggers an event during the user operation.

## API

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fn | 需要进行防抖处理的函数 | `()=>void` |  |
| delay | 延迟时间(单位毫秒) | `number` | `1000` |
| immediate | 决定是否要第一次立即执行 | `boolean` | `false` |
| resultFun | 当用户传递了 resultFun 函数时，执行该函数，并将结果以参数传递出去 | `(arg0: any)=>void` | `false` |
