import React, { ReactNode } from 'react';

interface SwitchProps {
  children?: ReactNode;
  /**
   * @description 文本
   */
  text?: {
    openText?: string;
    closeText?: string;
  };
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * @description 默认选中
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * @description 点击事件
   */
  onClick?: (value: any) => void;
  /**
   * @description 选中值发生变化触发事件
   */
  onChange?: (value: any) => void;
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
