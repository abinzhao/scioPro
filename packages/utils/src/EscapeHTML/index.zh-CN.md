---
title: EscapeHTML 转义HTML(防XSS攻击)
order: 6
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 基础函数
  order: 1
---

## EscapeHTML 转义 HTML(防 XSS 攻击)

转义 HTML 中的特殊字符，可以有效防止 XSS 攻击。

<code src='./demos/index.tsx' />

## API

| 属性名 | 描述         | 类型     | 默认值 |
| ------ | ------------ | -------- | ------ |
| str    | 待转义字符串 | `string` |        |
