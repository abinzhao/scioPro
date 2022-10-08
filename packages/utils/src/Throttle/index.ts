/**
 *  @param {*} fn 需要进行节流处理的函数
 *  @param {*} interval 延迟时间(单位毫秒)
 *  @param {*} leading 决定是否要第一次立即执行
 *  @param {*} trailing 控制是否最后一次是否执行
 */
const Throttle = (
  fn: { apply: (arg0: any, arg1: any[]) => void },
  interval = 1000,
  leading: boolean = false,
  trailing: boolean = false,
) => {
  // trailing参数用来控制是否最后一次是否执行，默认为false
  //该变量用于记录上一次函数的执行事件
  let lastTime = 0;
  // 内部的控制是否立即执行的变量
  let isLeading = true;
  // time 保存定时器的id
  let time: number | null | undefined = null;

  const _throttle = function (this: any, ...args: any[]) {
    // 获取当前时间
    const nowTime = new Date().getTime();

    // 第一次不需要立即执行
    if (!leading && isLeading) {
      // 将lastTime设置为nowTime，这样就不会导致第一次时remainTime大于interval
      lastTime = nowTime;
      // 将isLeading设置为false，这样就才不会对后续的lastTime产生影响。
      isLeading = false;
    }

    // cd剩余时间
    const remainTime = nowTime - lastTime;
    // 如果剩余时间大于间隔时间，也就是说可以再次执行函数
    if (remainTime - interval >= 0) {
      fn.apply(this, args);
      // 将上一次函数执行的时间设置为nowTime，这样下次才能重新进入cd
      lastTime = nowTime;
    }

    if (remainTime < interval) {
      // 判断是否存在定时器，如果存在则取消掉
      if (time) clearTimeout(time);

      // 设置定时器
      time = setTimeout(() => {
        // 判断是否最后一次需要执行
        if (trailing) {
          // 最后一次需要执行
          fn.apply(this, args);
        }
        // 由于该定时器，会在没有事件触发的interval时间间隔后才会执行，也就是说一轮事件
        // 执行已经结束，使用需要将isLeading复原，这样下一轮事件的第一次事件就不会立即执行了。
        isLeading = true;
      }, interval);
    }
  };
  return _throttle;
};

export default Throttle;
