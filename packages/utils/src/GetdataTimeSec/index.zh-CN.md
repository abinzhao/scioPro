---
title: GetdataTimeSec 当前时间格式化
order: 2
nav:
  title: 工具函数
  path: /utils
  order: 4
group:
  title: 时间相关
  order: 2
---

## GetdataTimeSec 当前时间格式化

返回当前格式化后的系统时间.

<code src='./demos/index.tsx'>

## API

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 需要格式化的时间，不传参时默认为当前系统时间 | `string , number , Date` |  |
| type | 格式化类型 | `'yyyy-mm-dd' , 'yyyy/mm/dd' , 'yyyy-mm-dd hh:mm:ss' , 'yyyy/mm/dd hh:mm:ss'` |  |
| isWeekDay | 是否显示星期 默认显示 | `boolean` | `true` |
