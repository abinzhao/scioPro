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

- Various horizontal alignments can be set.

</Alert>

## basic use

Basic usage of spacing components.

<code src="./demos/index1.tsx" />

## vertical spacing

<Alert type="info">
  You can set the spacing of the vertical alignment.
</Alert>

<code src="./demos/index2.tsx" />

## Size

<Alert type="info">
  There are 4 built-in sizes, mini - 4px small - 8px (default) medium - 16px large - 24px, also supports passing numbers to customize the size.
</Alert>

<code src="./demos/index3.tsx" />

## Align

There are 4 built-in alignment methods, namely start center end baseline, and the default is center in horizontal mode.

<code src="./demos/index4.tsx" />

## Surround spacing

<Alert type="info">
 The spacing of the wrapping type has spacing around it. It is generally used in the scene of wrapping. The configuration size is [12,18] to indicate the horizontal and vertical spacing, respectively.
</Alert>

<code src="./demos/index5.tsx" />

<API />
