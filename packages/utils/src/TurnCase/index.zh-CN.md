---
title: TurnCase 大小写转换
order: 5
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 基础函数
  order: 1
---

## TurnCase 大小写转换

大小写转换，包含全部转换大写，全部转换小写，首字母大写。

<code src='./demos/index.tsx' />

## API

| 属性名 | 描述                                                    | 类型     | 默认值 |
| ------ | ------------------------------------------------------- | -------- | ------ |
| str    | 待转换字符串                                            | `string` |        |
| type   | 去除空格类型 1-全大写 2-全小写 3-首字母大写 其他-不转换 | `number` |        |
