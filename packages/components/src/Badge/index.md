---
title: Badge
order: 8
nav:
  title: Components
  path: /components
  order: 2
group:
  title: Common components
  order: 2
---

# Badge logo

The circular logo number in the upper right corner of the icon.

## When to use

- It usually appears in the upper right corner of the notification icon or avatar to display the number of messages that need to be processed, attracting users to deal with it in an eye-catching visual form.

- Use this component when there is a new message, message, or when the app/plugin/feature module can be updated or upgraded.

## When to use

<code src="./demos/index1.tsx" title="When to use" desc="Simple badge display, when count is 0, it is not displayed by default, but it can be modified to display using showZero" />

## capped figures

<code src="./demos/index2.tsx" title="capped figures" desc="If the value of `overflowCount` is exceeded, `${overflowCount}+` will be displayed, and the default value of `overflowCount` is `99`。" />

## nasty little red dot

<code src="./demos/index3.tsx" title="nasty little red dot" desc="No specific numbers, only small red dots are shown." />

## Customize icons, colors, and more

<code src="./demos/index4.tsx" title="Customize icons, colors, and more" desc="The content of the logo can be customized through the `content` attribute. The customized content does not contain any color style and is completely defined by the user." />

## Standalone use

<code src="./demos/index5.tsx" title="Standalone use " desc="It can be used independently without wrapping any elements, and can be displayed in a custom style." />

## Logo click

<code src="./demos/index6.tsx" title="Logo click " desc="The logo can do more actions with click events" />

<API />
