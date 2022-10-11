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
   * @description 输入值发生变化触发事件
   */
  onChange?: (value: any) => void;
  /**
   * @description 只读
   * @default false
   */
  readOnly?: boolean;
  /**
   * @description 必填项
   * @default false
   */
  required?: boolean;
  /**
   * @description 是否可清空
   * @default false
   */
  clear?: boolean;
  /**
   * @description 自动聚焦
   * @default false
   */
  autoFocus?: boolean;
  /**
   * @description 允许用户输入的最大字符长度
   */
  maxLength?: number;
  /**
   * @description 允许用户输入的最小字符长度
   */
  minLength?: number;
  /**
   * @description 是否使用浏览器的记忆功能自动填充文本
   */
  autoComplete?: 'off' | 'on';
  /**
   * @description Icon图标
   */
  icon?: ReactNode;
  /**
   * @description Icon图标显示位置
   * @default left
   */
  iconAlign?: 'left' | 'right';
  /**
   * 搜索配置:
   * @param {(e:any)=>void} onSearch  搜索点击事件
   * @param {'success' | 'warning' | 'error' | 'primary' | 'info'} btnType  搜索按钮类型
   * @param {string | ReactNode} text  搜索按钮文案
   * @param {boolean} loading  搜索按钮加载态
   */
  search?: SearchProps;
  /**
   * 文本域配置:
   * @param {string} autoCapitalize  'none'|'sentences'|'words'|'characters' 文本是否首字母大写
   * @param {number} cols  文本域的可视宽度。必须为正数,默认为 20 (HTML5)
   * @param {number} rows  元素的输入文本的行数（显示的高度）
   * @param {string} wrap 'hard'|'soft'  元素的名称
   */
  textArea?: textAreaProps;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 内联样式
   */
  style?: React.CSSProperties;
}
interface SearchProps {
  onSearch?: (value: any) => void;
  btnType?: 'success' | 'warning' | 'error' | 'primary' | 'info';
  text?: string | ReactNode;
  loading?: boolean;
}
interface textAreaProps {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  cols?: number;
  rows?: number;
  wrap?: 'hard' | 'soft';
}
export type { InputProps };
