---
title: Color
order: 1
nav:
  title: Components
  path: /components
  order: 2
group:
  title: global basis
  order: 1
---

# Color

## Overview

scioPro recommends using the following palette of colors as design and development specifications to ensure visual consistency between pages and components.

## main color

<Alert type="info">
  scioPro uses a relatively safe blue as the main color, in which Light Primary is often used for hover, and Dark Primary is often used for active.
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

# secondary color

<Alert type="info">
  Secondary colors are representative colors that are often used for informational cues such as success, warning, and failure.
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

# neutral color

<Alert type="info">
  Neutral colors are often used for text, backgrounds, borders, shadows, etc., and can reflect the hierarchical structure of a page.
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
        <p style={p}>Title</p>
        <p style={p}>#17233d</p>
      </div>
      <div style={{ ...style, background: '#515a6e' }}>
        <p style={p}>Content</p>
        <p style={p}>#515a6e</p>
      </div>
      <div style={{ ...style, background: '#808695' }}>
        <p style={p}>Auxiliary/Icon</p>
        <p style={p}>#808695</p>
      </div>
      <div style={{ ...style, background: '#c5c8ce', color: '#515a6e' }}>
        <p style={p}>Disabled</p>
        <p style={p}>#c5c8ce</p>
      </div>
      <div style={{ ...style, background: '#dcdee2', color: '#808695' }}>
        <p style={p}>Border</p>
        <p style={p}>#dcdee2</p>
      </div>
      <div style={{ ...style, background: '#e8eaec', color: '#808695' }}>
        <p style={p}>Divider</p>
        <p style={p}>#e8eaec</p>
      </div>
      <div style={{ ...style, background: '#f8f8f9', color: '#808695' }}>
        <p style={p}>Background</p>
        <p style={p}>#f8f8f9</p>
      </div>
    </div>
  );
};
```
