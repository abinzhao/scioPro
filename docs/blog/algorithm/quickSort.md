---
title: 快速排序
order: 4
nav:
  title: 博客
  path: /blog
  order: 1
group:
  title: 算法相关
  order: 3
  path: /blog/algorithm
---

# 快速排序--时间复杂度 nlogn~ n^2 之间

```js | prue
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const cur = arr[arr.length - 1];
  const left = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
  const right = arr.filter((v) => v > cur);
  return [...quickSort(left), cur, ...quickSort(right)];
}
```

# 使用方法

```js | prue
quickSort([3, 6, 2, 4, 1]);
```
