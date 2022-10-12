---
title: 发布订阅模式
order: 1
nav:
  title: 博客
  path: /blog
  order: 1
group:
  title: 手写面试题相关
  order: 2
  path: /blog/audition
---

# 发布订阅模式

描述:实现一个发布订阅模式拥有 `on emit once off` 方法

```js | pure
class EventEmitter {
    constructor={
        this.events={}
    }
    // 实现订阅
    on(type,callback){
        if(!events[type]){
            this.events[type]=[callback];
        }else{
            this.events[type].push(callback);
        }
    }
    // 删除订阅
    off(type,callback){
        if(!events[type]) return
        this.events[type] = this.events[type].filter(item=>{
            return item !== callback;
        })
    }
    // 只执行一次订阅事件
    once(type,callback){
        function fn(){
            callback();
            this.off(type,fn)
        }
        this.on(type,fn);
    }
    // 触发事件
    emit(type,...rest){
        this.events[type] && this.events[type].foreEach(fn=>fn.apply(this,rest));
    }
}
```

## 使用方法

```js | prue
// 使用如下
// const event = new EventEmitter();

// const handle = (...rest) => {
//   console.log(rest);
// };

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);

// event.emit("click", 1, 2);

// event.once("dbClick", () => {
//   console.log(123456);
// });
// event.emit("dbClick");
// event.emit("dbClick");
```
