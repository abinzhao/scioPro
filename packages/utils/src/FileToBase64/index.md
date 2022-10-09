---
title: FileToBase64
order: 1
nav:
  title: Utility function
  path: /utils
  order: 4
group:
  title: File related
  order: 4
---

## FileToBase64

Convert image files to Base64 encoding format.

## Instructions

<code src='./demos/index.tsx' />

## API

| 属性名    | 描述               | 类型       | 默认值                          |
| --------- | ------------------ | ---------- | ------------------------------- |
| file      | 文件               | `any`      |                                 |
| format    | 指定文件格式       | `string[]` | `['jpg', 'jpeg', 'png', 'gif']` |
| size      | 指定文件大小(字节) | `number`   | `20 * 1024 * 1024`              |
| formatMsg | 格式错误提示       | `string`   | `文件格式不正确`                |
| sizeMsg   | 大小超出限制提示   | `string`   | `文件大小超出限制`              |
