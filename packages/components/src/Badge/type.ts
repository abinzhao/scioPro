import React, { ReactNode } from 'react';

interface TagProps {
  /**
   * 徽标依托的内容，一般显示在其右上方
   */
  children?: ReactNode;
  /**
   * 	展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时默认隐藏
   */
  count?: number | string;
  /**
   * 	当count为0时，是否显示count
   * @default false
   */
  showZero?: boolean;
  /**
   * 自定义徽标中的内容
   */
  content?: ReactNode;
  /**
   * 展示的封顶的数字
   * @default 99
   */
  overflowCount?: number | string;
  /**
   * 	不展示数字，只展示一个小红点
   */
  dot?: boolean;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 点击事件
   */
  onClick?: () => void;
  /**
   * 样式类名
   */
  className?: string;
}
export type { TagProps };
