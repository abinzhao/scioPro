---
title: Throttle 节流
order: 3
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 基础函数
  order: 1
---

## Throttle 节流

在用户停止某个操作一段时间之后才执行相应的监听函数，而不是在用户操作的过程当中，浏览器触发多少次事件，就执行多少次监听函数。

## API

| 属性名   | 描述                     | 类型       | 默认值  |
| -------- | ------------------------ | ---------- | ------- |
| fn       | 需要进行节流处理的函数   | `()=>void` |         |
| interval | 延迟时间(单位毫秒)       | `number`   | `1000`  |
| leading  | 决定是否要第一次立即执行 | `boolean`  | `true`  |
| trailing | 控制是否最后一次是否执行 | `boolean`  | `false` |
