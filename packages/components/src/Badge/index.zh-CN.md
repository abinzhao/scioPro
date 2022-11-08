---
title: Badge 徽标
order: 8
nav:
  title: 组件
  path: /components
  order: 2
group:
  title: 通用组件
  order: 2
---

# Badge 徽标

图标右上角的圆形徽标数字。

## 何时使用

- 一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

- 在有新消息、讯息时，或者是 app/插件/功能模块可以更新、升级时使用这个组件。

## 基本使用

<code src="./demos/index1.tsx" title="基本使用" desc="简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示" />

## 封顶数字

<code src="./demos/index2.tsx" title="封顶数字" desc="超过`overflowCount`的数值，会显示`${overflowCount}+`，`overflowCount`默认值为`99`。" />

## 讨嫌的小红点

<code src="./demos/index3.tsx" title="讨嫌的小红点" desc="没有具体的数字，仅展示小红点。" />

## 自定义图标、颜色等

<code src="./demos/index4.tsx" title="自定义图标、颜色等 " desc="通过 `content` 属性可以自定义徽标的内容，自定义内容不包含任何色彩样式，完全由使用者自己定义。" />

## 独立使用

<code src="./demos/index5.tsx" title="独立使用 " desc="不包裹任何元素即独立使用，可自定样式展示。" />

## 徽标点击

<code src="./demos/index6.tsx" title="徽标点击 " desc="通过点击事件可以让徽标做更多的动作" />

<API />
