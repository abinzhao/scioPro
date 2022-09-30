---
title: Signature
order: 6
nav:
  title: Components
  path: /components
  order: 2
group:
  title: Common components
  order: 2
---

# Signature

Paperless processes and electronic contracts have become popular, the demand for electronic signatures is also increasing, and the signature experience is gradually improving. From the simple `canvas` line drawing at the beginning, to the pursuit of smooth and smooth lines, to the requirement that it is the same as writing on paper The pen edge effect and so on. There are many ready-made open source signature libraries on the Internet. Among them, `signature_pad` has a better stroke effect, but the specific use will still find obvious jaggedness, so I used another scheme to implement a set of .

## basic use

Basic usage of the `Signature` electronic signature component.

<code src="./demos/index1.tsx" />

## basic method

```tsx | pure
import { Signature } from '@sciopro/components';

const canvas = document.querySelector('canvas');
const _signature = new Signature(canvas);

// 生成PNG
_signature.getPNG(); // 或者 _signature.toDataURL()

// 生成JPG
_signature.getJPG(); // 或者 _signature.toDataURL('image/jpeg')

// 清屏
_signature.clear();

// 撤销
_signature.undo();

// 是否为空
_signature.isEmpty();

// 生成旋转后的新画布 -90/90/-180/180
_signature.getRotateCanvas(90);
```

<code src="./demos/index2.tsx" />

<API />
