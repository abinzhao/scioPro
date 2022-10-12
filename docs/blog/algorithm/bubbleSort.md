---
title: 冒泡排序
order: 2
nav:
  title: 博客
  path: /blog
  order: 1
group:
  title: 算法相关
  order: 3
  path: /blog/algorithm
---

# 冒泡排序--时间复杂度 n^2

```js | prue
function bubbleSort(arr) {
  // 缓存数组长度
  const len = arr.length;
  // 外层循环用于控制从头到尾的比较+交换到底有多少轮
  for (let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较+交换
    for (let j = 0; j < len - 1; j++) {
      // 若相邻元素前面的数比后面的大
      if (arr[j] > arr[j + 1]) {
        // 交换两者
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // 返回数组
  return arr;
}
```

# 使用方法

```js | prue
bubbleSort([3, 6, 2, 4, 1]);
```
