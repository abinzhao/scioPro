/**
 * 存储
 * 目前对象值如果是函数 、RegExp等特殊对象存储会被忽略
 * @param { String } key  存储名称
 * @param { string } value 存储值
 */
const LocalStorageSet = (key: string, value: any) => {
  if (typeof value === 'object') value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

/**
 * 查询
 * @param { String } key  存储名称
 */
const localStorageGet = (key: string) => {
  return localStorage.getItem(key);
};

/**
 * 移除
 * @param {String} key  存储名称
 */
const localStorageRemove = (key: string) => {
  localStorage.removeItem(key);
};

/**
 * 存储某一段时间后失效
 * @param {String} key  存储名称
 * @param {*} value 存储值
 * @param { number } expire 过期时间,毫秒数
 */
export const localStorageSetExpire = (key: string, value: any, expire: number) => {
  if (typeof value === 'object') value = JSON.stringify(value);
  localStorage.setItem(key, value);
  setTimeout(() => {
    localStorage.removeItem(key);
  }, expire);
};

/**
 * LocalStorage 存储:
 * Set 存储,
 * Get 查询,
 * Remove 移除,
 * SetExpire 存储一段时间后过期
 */
const LocalStorageStorage = {
  Set: LocalStorageSet,
  Get: localStorageGet,
  Remove: localStorageRemove,
  SetExpire: localStorageSetExpire,
};

export default LocalStorageStorage;
