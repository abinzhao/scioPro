/**
 * @param { string } str 待转换的字符串
 * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 */

const TurnCase = (str: string, type: number) => {
  switch (type) {
    case 1:
      return str?.toUpperCase();
    case 2:
      return str?.toLowerCase();
    case 3:
      return str?.[0]?.toUpperCase() + str?.slice(1)?.toLowerCase() == 'undefined'
        ? ''
        : str?.[0]?.toUpperCase() + str?.slice(1)?.toLowerCase();
    default:
      return str;
  }
};
export default TurnCase;
