---
title: Space 间距
order: 2
nav:
  title: 组件
  path: /components
  order: 2
group:
  title: 布局组件
  order: 1
---

# Space 间距

设置组件之间的间距。

#### 何时使用

<Alert type="info">
  避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。

- 可以设置各种水平对齐方式。

</Alert>

## 基本使用

间距组件的基本用法。

<code src="./demos/index1.tsx" />

## 垂直间距

<Alert type="info">
  可以设置垂直方向排列的间距。
</Alert>

<code src="./demos/index2.tsx" />

## 尺寸

<Alert type="info">
  内置 4 个尺寸，mini - 4px small - 8px (默认) medium - 16px large - 24px，也支持传数字来自定义尺寸。
</Alert>

<code src="./demos/index3.tsx" />

## 对齐方式

内置对齐方式有 4 种，即 start、center、end、baseline，水平模式默认居中。

<code src="./demos/index4.tsx" />

## 环绕间距

<Alert type="info">
  环绕类型的间距，四周都有间距，一般用于换行的场景，配置 size 为[12,18]分别表示水平、垂直间距。
</Alert>

<code src="./demos/index5.tsx" />

<API />
