interface PropsType {
  /**
   * 生成的颜色类型
   * #16（16进制）或者rgb
   */
  type?: '#16' | 'rgb';
}
/**
 *  @param {*} type 生成的颜色类型 #16（16进制）或者rgb
 *  @return {string} 返回16进制或RGB颜色代码
 */
const RandomColor = (props: PropsType) => {
  const { type = '#16' } = props;
  if (type == '#16') {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`;
  } else {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export default RandomColor;
