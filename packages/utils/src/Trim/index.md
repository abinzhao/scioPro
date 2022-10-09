---
title: Trim
order: 4
nav:
  title: Utility function
  path: /utils
  order: 4
group:
  title: Base Function
  order: 1
---

## Trim

Remove spaces from a string, including: all spaces, leading and trailing spaces.

<code src='./demos/index.tsx' />

## API

| 属性名 | 描述                                                 | 类型     | 默认值 |
| ------ | ---------------------------------------------------- | -------- | ------ |
| str    | 待处理字符串                                         | `string` |        |
| type   | 去除空格类型 1-所有空格 2-前后空格 3-前空格 4-后空格 | `number` | `1`    |
