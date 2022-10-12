---
title: 插入排序
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

# 插入排序--时间复杂度 n^2

```js | prue
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let target = arr[j];
    while (j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = target;
  }
  return arr;
}
```

# 使用方法

```js | prue
insertSort([3, 6, 2, 4, 1]);
```
