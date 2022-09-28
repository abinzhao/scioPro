export default interface IconType {
  /**
   * 图标类型
   */
  type?: string;
  /**
   * 设置图标的样式名
   */
  className?: string;
  /**
   * 设置图标的样式
   * 例如 fontSize 和 color
   */
  style?: React.CSSProperties;
  /**
   * 图标旋转角度（IE9 无效）
   */
  rotate?: number;
  /**
   * 是否有旋转动画
   * @default false
   */
  spin?: boolean;
  /**
   * 仅适用双色图标
   * 设置双色图标的主要颜色
   * (十六进制颜色)
   */
  twoToneColor?: string;
}
