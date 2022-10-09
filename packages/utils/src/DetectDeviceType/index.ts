/**
 * @param { string } str 待转义的HTML字符串
 */

const DetectDeviceType = (str: string) => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'PC';
};
export default DetectDeviceType;
