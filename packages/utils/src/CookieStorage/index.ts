/**
 * 新增
 * @param {String} key  存储名称
 * @param {*} value  存储值
 * @param { number } expire  过期时间,单位天
 */
const CookieSet = (key: string, value: any, expire: number) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};

/**
 * 查询
 * @param {String} key  存储名称
 */
export const CookieGet = (key: string) => {
  const cookieStr = decodeURIComponent(document.cookie);
  const arr = cookieStr.split('; ');
  let cookieValue = '';
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split('=');
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};

/**
 * 移除
 * @param {String} key  存储名称
 */
export const CookieRemove = (key: string) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};

/**
 * CookieStorage 存储:
 * Set 存储+有效期（天）,
 * Get 查询,
 * Remove 移除
 */
const CookieStorage = {
  Set: CookieSet,
  Get: CookieGet,
  Remove: CookieRemove,
};

export default CookieStorage;
