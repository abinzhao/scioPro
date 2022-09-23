import { ReactNode } from 'react';

export default interface BoxType {
  children: ReactNode;
  /**
   * 排列方式
   */
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /**
   * 内边距
   * [0,0,0,0] 上 右 下 左
   */
  padding?: number[];
  /**
   * 外边距
   * [0,0,0,0] 上  右  下  左
   */
  margin?: number[];
  /**
   * 主轴对齐
   */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
    | 'initial'
    | 'inherit';
  /**
   * 纵轴对齐
   */
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'initial' | 'inherit';
  /**
   * 按钮样式
   */
  className?: string | undefined;
  /**
   *  按钮内联样式
   */
  style?: React.CSSProperties;
  /**
   * 点击事件
   */
  onClick?: () => void;
  /**
   * 是否开启loading态
   * @default false
   */
  loading?: boolean | undefined;
}
