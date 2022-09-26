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

#### when to use

<Alert type="info">
  避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。

- 可以设置各种水平对齐方式。

</Alert>

## 基本使用

间距组件的基本用法。

```tsx
import React from 'react';
import { Space } from '@sciopro/components';

export default () => {
  const style = {
    width: 120,
    height: 60,
    margin: 12,
    lineHeight: 60,
    textAlign: 'center',
    background: '#2d8cf0',
    borderRadius: 18,
  };
  return (
    <Space>
      <div style={style}>div1</div>
      <div style={style}>div2</div>
      <div style={style}>div3</div>
    </Space>
  );
};
```

## 垂直间距

<Alert type="info">
  可以设置垂直方向排列的间距。
</Alert>

```tsx
import React from 'react';
import { Space } from '@sciopro/components';

export default () => {
  const style = {
    width: 120,
    height: 60,
    margin: 12,
    lineHeight: 60,
    textAlign: 'center',
    background: '#2d8cf0',
    borderRadius: 18,
  };
  return (
    <Space direction="vertical">
      <div style={style}>div1</div>
      <div style={style}>div2</div>
      <div style={style}>div3</div>
    </Space>
  );
};
```

## 尺寸

<Alert type="info">
  内置 4 个尺寸，mini - 4px small - 8px (默认) medium - 16px large - 24px，也支持传数字来自定义尺寸。
</Alert>

<!--
```tsx
import React, { useState } from 'react';
import { Space, Button, Radio, RadioGroup } from '@sciopro/components';

export default () => {
  const [size, setSize] = useState<'mini' | 'small' | 'medium' | 'large'>('small');

  const onChange = (val: { children: 'mini' | 'small' | 'medium' | 'large' }) => {
    setSize(val.children);
    console.log(size);
  };

  return (
    <>
      <RadioGroup value={1} onChange={onChange}>
        <Radio>mini</Radio>
        <Radio>small</Radio>
        <Radio>medium</Radio>
        <Radio>large</Radio>
      </RadioGroup>
      <br />
      <Space size={size}>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </Space>
    </>
  );
};
```

## Align

There are 4 built-in alignment methods, namely start center end baseline, and the default is center in horizontal mode.

```tsx
import React, { useState } from 'react';
import { Space, Button, Radio, RadioGroup } from '@sciopro/components';

export default () => {
  const [align, setAlign] = useState('small');

  const onChange = (val) => {
    setAlign(val.children);
    console.log(align);
  };

  return (
    <>
      <RadioGroup value={1} onChange={onChange}>
        <Radio>start</Radio>
        <Radio>center</Radio>
        <Radio>end</Radio>
        <Radio>baseline</Radio>
      </RadioGroup>
      <br />
      <div style={{ height: 200, width: '100%' }}>
        <Space align={align}>
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button style={{ padding: 48 }}>Button3</Button>
        </Space>
      </div>
    </>
  );
};
``` -->

## 环绕间距

<Alert type="info">
  环绕类型的间距，四周都有间距，一般用于换行的场景，配置 size 为[12,18]分别表示水平、垂直间距。
</Alert>

```tsx
import React from 'react';
import { Space } from '@sciopro/components';

export default () => {
  const style = {
    width: 120,
    height: 60,
    margin: 12,
    lineHeight: 60,
    textAlign: 'center',
    background: '#2d8cf0',
    borderRadius: 18,
  };
  return (
    <Space size={[12, 18]} wrap>
      {new Array(12).fill('').map((item, index) => {
        return (
          <div key={index} style={style}>
            Button{index + 1}
          </div>
        );
      })}
    </Space>
  );
};
```

<API />
