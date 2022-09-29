import React, { ReactNode } from 'react';

interface PlaceholderProps {
  children?: ReactNode;
  /**
   * @description 文本
   */
  type?:
    | '403'
    | '404'
    | '500'
    | 'error'
    | 'no-network'
    | 'no-data'
    | 'no-result'
    | 'no-record'
    | 'no-news'
    | 'failed-load';
  /**
   * @description 标题
   */
  title?: ReactNode | string;
  /**
   * @description 副标题
   */
  description?: ReactNode | string;
  /**
   * @description 标题文本样式
   */
  textStyle?: {
    titleStyle?: React.CSSProperties;
    descriptionStyle?: React.CSSProperties;
  };

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
  /**
   * @description 插图样式
   */
  imageStyle?: React.CSSProperties;
}
export type { PlaceholderProps };
