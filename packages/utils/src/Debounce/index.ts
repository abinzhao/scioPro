/**
 *  @param {*} fn 需要进行防抖处理的函数
 *  @param {*} delay 延迟时间(单位毫秒) 默认1s
 *  @param {*} immediate 决定是否要第一次立即执行
 *  @param {*} resultFun 当用户传递了 resultFun 函数时，执行该函数，并将结果以参数传递出去
 */
const Debounce = (
  fn: { apply: (arg0: any, arg1: any[]) => void },
  delay = 1000,
  immediate: boolean = false,
  resultFun: (arg0: any) => void,
) => {
  // 第一个参数是需要进行防抖处理的函数，第二个参数是延迟时间，默认为1秒钟
  // 这里多传一个参数，immediate用来决定是否要第一次立即执行, 默认为false
  // 实现防抖函数的核心是使用setTimeout
  // time变量用于保存setTimeout返回的Id
  let time: number | null | undefined = null;
  // isImmediateInvoke变量用来记录是否立即执行, 默认为false
  let isImmediateInvoke = false;

  // 将回调接收的参数保存到args数组中
  function _debounce(this: any, ...args: any[]) {
    if (time !== null) {
      clearTimeout(time);
    }

    if (!isImmediateInvoke && immediate) {
      const result = fn.apply(this, args);
      if (typeof resultFun === 'function') {
        resultFun(result);
      }
      isImmediateInvoke = true;
    }

    time = setTimeout(() => {
      fn.apply(this, args);
      isImmediateInvoke = false;
    }, delay);
  }
  return _debounce;
};

export default Debounce;
