import React, { ReactNode } from 'react';

interface RadioProps {
  children?: ReactNode;
  /**
   * @description 单选框名称
   */
  name: string;
  /**
   * 排列方式
   */
  direction: 'row' | 'column';
  /**
   * @description 单选类型
   */
  type: 'card' | 'checkbox';
  /**
   * @description 数据源
   */
  dataSource?: Array<{
    label: ReactNode;
    value: string | number;
    disabled?: boolean;
  }>;
  /**
   * @description 当前选中值
   */
  value?: string[] | number[];
  /**
   * @description 是否开启选中背景色
   */
  isCheckedBG?: boolean;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 是否默认选中
   */
  defaultChecked?: boolean;
  /**
   * @description 是否开启鼠标滑过背景色
   */
  isHoverBG?: boolean;
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
export type { RadioProps };
