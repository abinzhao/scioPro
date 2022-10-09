/**
 * 存储
 * 目前对象值如果是函数 、RegExp等特殊对象存储会被忽略
 * @param { String } key  存储名称
 * @param { string } value 存储值
 */
const SessionSet = (key: string, value: any) => {
  if (typeof value === 'object') value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
};

/**
 * 查询
 * @param { String } key  存储名称
 */
const SessionGet = (key: string) => {
  return sessionStorage.getItem(key);
};

/**
 * 移除
 * @param {String} key  存储名称
 */
const SessionRemove = (key: string) => {
  sessionStorage.removeItem(key);
};

/**
 * 存储某一段时间后失效
 * @param {String} key  存储名称
 * @param {*} value 存储值
 * @param { number } expire 过期时间,毫秒数
 */
export const SessionSetExpire = (key: string, value: any, expire: number) => {
  if (typeof value === 'object') value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
  setTimeout(() => {
    sessionStorage.removeItem(key);
  }, expire);
};

/**
 * SessionStorage 存储:
 * Set 存储,
 * Get 查询,
 * Remove 移除,
 * SetExpire 存储一段时间后过期
 */
const SessionStorage = {
  Set: SessionSet,
  Get: SessionGet,
  Remove: SessionRemove,
  SetExpire: SessionSetExpire,
};

export default SessionStorage;
