import React, { ReactNode } from 'react';

interface InputProps {
  /**
   * @description 默认值
   */
  defaultValue?: any;
  /**
   * @description 状态
   * 'success'|'warning'|'error'
   */
  status?: 'success' | 'warning' | 'error';
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 提示占位
   */
  placeholder?: string;
  /**
   * @description 大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * @description 选中值发生变化触发事件
   */
  onChange?: (value: any) => void;
  /**
   * @description 搜索配置
   */
  Search?: {
    /**
     * @description 搜索点击事件
     */
    onSearch?: (value: any) => void;
    /**
     * @description 搜索按钮类型
     * @default 'primary'
     */
    btnType?: 'success' | 'warning' | 'error' | 'primary' | 'info';
    /**
     * @description 搜索按钮文案
     * @default '搜索'
     */
    text?: string | ReactNode;
  };
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 内联样式
   */
  style?: React.CSSProperties;
}
export type { InputProps };
