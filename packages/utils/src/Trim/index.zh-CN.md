---
title: Trim 去除空格
order: 3
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 基础函数
  order: 1
---

## Trim 去除空格

去除字符串的空格，包括：所有空格，前后空格。

<code src='./demos/index.tsx' />

## API

| 属性名 | 描述                                                 | 类型     | 默认值 |
| ------ | ---------------------------------------------------- | -------- | ------ |
| str    | 待处理字符串                                         | `string` |        |
| type   | 去除空格类型 1-所有空格 2-前后空格 3-前空格 4-后空格 | `number` | `1`    |
