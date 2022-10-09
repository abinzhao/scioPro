---
title: GetdataTimeSec
order: 2
nav:
  title: Utility function
  path: /utils
  order: 4
group:
  title: time dependent
  order: 2
---

## GetdataTimeSec

Returns the current formatted system time.

<code src='./demos/index.tsx'>

## API

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 需要格式化的时间，不传参时默认为当前系统时间 | `string , number , Date` |  |
| type | 格式化类型 | `'yyyy-mm-dd' , 'yyyy/mm/dd' , 'yyyy-mm-dd hh:mm:ss' , 'yyyy/mm/dd hh:mm:ss'` |  |
| isWeekDay | 是否显示星期 默认显示 | `boolean` | `true` |
