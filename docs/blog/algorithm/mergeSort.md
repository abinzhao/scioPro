---
title: 归并排序
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

# 归并排序--时间复杂度 nlog(n)

```js | prue
function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  if (i < left.length) {
    res.push(...left.slice(i));
  } else {
    res.push(...right.slice(j));
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

# 使用方法

```js | prue
mergeSort([3, 6, 2, 4, 1]);
```
