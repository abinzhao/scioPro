import React, { ReactNode } from 'react';

interface SwitchProps {
  children?: ReactNode;
  /**
   *@description 按钮类型
   */
  type?: 'primary' | 'success' | 'info' | 'warning' | 'error';
  /**
   *@description 图标
   */
  icon?: ReactNode;
  /**
   *@description 图标位置
   */
  iconAlign?: 'left' | 'right';
  /**
   *@description 按钮背景颜色
   */
  color?: string | undefined;
  /**
   * @description 块级按钮 以容器宽度为按钮宽度
   * @default false
   */
  block?: boolean;
  /**
   * @description 是否为虚线边框
   * @default false
   */
  dashed?: boolean;
  /**
   * @description 是否加载中
   * @default false
   */
  loading?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * @description 点击事件
   */
  onClick?: (value: any) => void;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 内联样式
   */
  style?: React.CSSProperties;
}
export type { SwitchProps };
