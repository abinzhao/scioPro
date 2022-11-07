import React, { ReactNode } from 'react';

interface TagProps {
  /**
   * 样式类名
   */
  className?: string;
  /**
   * 内联样式
   */
  style?: React.CSSProperties;
  /**
   * 文案样式
   */
  textStyle?: React.CSSProperties;
  /**
   * 标签大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 标签类型
   */
  type?: 'normal' | 'primary';
  /**
   * 标签文案
   */
  text?: string;
  /**
   * 标签颜色
   * 目前支持：blue、 green、 orange、red、 turquoise、 yellow以及16进制颜色代码
   */
  color?: string;
  /**
   * 图标
   */
  icon?: ReactNode;
  /**
   * 点击事件
   */
  onClick?: () => void;
}
export type { TagProps };
