import React, { ReactNode } from 'react';

interface SwitchProps {
  children?: ReactNode;
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
   * @description 宽度
   */
  width?: number | string;
  /**
   * @description 高度
   */
  height?: number | string;
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
