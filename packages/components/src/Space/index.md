---
title: Space
order: 2
nav:
  title: Components
  path: /components
  order: 2
group:
  title: layout component
  order: 1
---

# Space

Sets the spacing between components.

#### when to use

<Alert type="info">
  Avoid components clinging together, creating a unified space.

- Horizontal spacing to fit inline elements.

- Various horizontal alignments can be set. </Alert>

## basic use

Basic usage of spacing components.

```tsx
import React from 'react';
import { Space } from '@sciopro/components';

export default () => {
  const style = { background: '2d8cf0', width: 24, height: 12 };
  return (
    <Space>
      <div style={style}>div1</div>
      <div style={style}>div2</div>
      <div style={style}>div3</div>
    </Space>
  );
};
```

## vertical spacing

You can set the spacing of the vertical alignment.

```tsx
import React from 'react';
import { Space } from '@sciopro/components';

export default () => {
  const style = { background: '2d8cf0', width: 24, height: 12 };
  return (
    <Space direction="vertical">
      <div style={style}>div1</div>
      <div style={style}>div2</div>
      <div style={style}>div3</div>
    </Space>
  );
};
```

## Size

There are 4 built-in sizes, mini - 4px small - 8px (default) medium - 16px large - 24px, also supports passing numbers to customize the size.

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

## Surround spacing

The spacing of the wrapping type has spacing around it. It is generally used in the scene of wrapping. The configuration size is [12,18] to indicate the horizontal and vertical spacing, respectively.

```tsx
import React from 'react';
import { Space } from '@sciopro/components';

export default () => {
  return (
    <Space size={[12, 18]} wrap>
      {new Array(30).fill('').map((item, index) => {
        return (
          <div key={index} style={{ background: '2d8cf0', width: 24, height: 12 }}>
            Button{index + 1}
          </div>
        );
      })}
    </Space>
  );
};
```

<API />
