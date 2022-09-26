---
title: Color 色彩
order: 1
nav:
  title: 组件
  path: /components
  order: 2
group:
  title: 全局基础
  order: 1
---

# Color 色彩

## 概述

scioPro 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。

## 主色

<Alert type="info">
  scioPro 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。
</Alert>

```tsx
/**
 * inline: true
 */
import React from 'react';

export default () => {
  const style = {
    width: '30%',
    height: 80,
    marginRight: 12,
    borderRadius: 18,
    textAlign: 'center',
    color: '#fff',
    padding: '18px 0',
  };
  const p = {
    margin: 0,
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ ...style, background: '#2d8cf0' }}>
        <p style={p}>Primary</p>
        <p style={p}>#2d8cf0</p>
      </div>
      <div style={{ ...style, background: '#5cadff' }}>
        <p style={p}>Light Primary</p>
        <p style={p}>#5cadff</p>
      </div>
      <div style={{ ...style, background: '#2b85e4' }}>
        <p style={p}>Dark Primary</p>
        <p style={p}>#2b85e4</p>
      </div>
    </div>
  );
};
```

# 辅助色

<Alert type="info">
  辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。
</Alert>

```tsx
/**
 * inline: true
 */
import React from 'react';

export default () => {
  const style = {
    width: '23%',
    height: 80,
    marginRight: 12,
    borderRadius: 18,
    textAlign: 'center',
    color: '#fff',
    padding: '18px 0',
  };
  const p = {
    margin: 0,
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ ...style, background: '#2db7f5' }}>
        <p style={p}>Info</p>
        <p style={p}>#2db7f5</p>
      </div>
      <div style={{ ...style, background: '#19be6b' }}>
        <p style={p}>Success</p>
        <p style={p}>#19be6b</p>
      </div>
      <div style={{ ...style, background: '#ff9900' }}>
        <p style={p}>Warning</p>
        <p style={p}>#ff9900</p>
      </div>
      <div style={{ ...style, background: '#ed4014' }}>
        <p style={p}>Error</p>
        <p style={p}>#ed4014</p>
      </div>
    </div>
  );
};
```

# 中性色

<Alert type="info">
  中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。
</Alert>

```tsx
/**
 * inline: true
 */
import React from 'react';

export default () => {
  const style = {
    width: '23%',
    height: 80,
    marginRight: 12,
    borderRadius: 18,
    textAlign: 'center',
    color: '#fff',
    padding: '18px 0',
    marginBottom: 12,
  };
  const p = {
    margin: 0,
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ ...style, background: '#17233d' }}>
        <p style={p}>标题-Title</p>
        <p style={p}>#17233d</p>
      </div>
      <div style={{ ...style, background: '#515a6e' }}>
        <p style={p}>正文-Content</p>
        <p style={p}>#515a6e</p>
      </div>
      <div style={{ ...style, background: '#808695' }}>
        <p style={p}>辅助/图标</p>
        <p style={p}>#808695</p>
      </div>
      <div style={{ ...style, background: '#c5c8ce', color: '#515a6e' }}>
        <p style={p}>禁用-Disabled</p>
        <p style={p}>#c5c8ce</p>
      </div>
      <div style={{ ...style, background: '#dcdee2', color: '#808695' }}>
        <p style={p}>边框-Border</p>
        <p style={p}>#dcdee2</p>
      </div>
      <div style={{ ...style, background: '#e8eaec', color: '#808695' }}>
        <p style={p}>分割线-Divider</p>
        <p style={p}>#e8eaec</p>
      </div>
      <div style={{ ...style, background: '#f8f8f9', color: '#808695' }}>
        <p style={p}>背景-Background</p>
        <p style={p}>#f8f8f9</p>
      </div>
    </div>
  );
};
```
