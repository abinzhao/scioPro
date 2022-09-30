import React, { ReactNode } from 'react';

interface IOptions {
  /**
   * @description 画布在页面实际渲染的宽度(px)
   * @default 320
   */
  width?: number;
  /**
   * @description 画布在页面实际渲染的高度(px)
   * @default 200
   * 画布缩放，可用于提高清晰度
   */
  height?: number;
  /**
   * @description 画笔颜色
   * @default 'black'
   */
  color?: string;
  /**
   * @description 画布背景颜色，默认透明
   */
  bgColor?: string;
  /**
   * @description 画布缩放，可用于提高清晰度
   * @default 1
   */
  scale?: number;
  /**
   * @description 是否开启笔锋效果，默认开启
   * @default true
   */
  openSmooth?: boolean;
  /**
   * @description 画笔最小宽度(px)，开启笔锋时画笔最小宽度
   * @default 2
   */
  minWidth?: number;
  /**
   * @description 画笔最大宽度(px)，开启笔锋时画笔最大宽度，或未开启笔锋时画笔正常宽度
   * @default 6
   */
  maxWidth?: number;
  /**
   * @description 画笔达到最小宽度所需最小速度(px/ms)，取值范围1.0-10.0
   * 注:值越小，画笔越容易变细，笔锋效果会比较明显，可以自行调整查看效果，选出自己满意的值
   * @default 1.5
   */
  minSpeed?: number;
  /**
   * @description 相邻两线宽度增(减)量最大百分比，取值范围1-100
   * 为了达到笔锋效果，画笔宽度会随画笔速度而改变，如果相邻两线宽度差太大，过渡效果就会很突兀
   * 使用maxWidthDiffRate限制宽度差，让过渡效果更自然
   * 可以自行调整查看效果，选出自己满意的值
   * @default 20
   */
  maxWidthDiffRate?: number;
  /**
   * @description 限制历史记录数，即最大可撤销数，传入0则关闭历史记录功能
   * @default 20
   */
  maxHistoryLength?: number;
  /**
   * @description 绘画开始回调函数
   */
  onStart?: (event: any) => void;
  /**
   * @description 绘画结束回调函数
   */
  onEnd?: (event: any) => void;
}

interface IPoint {
  x: number;
  y: number;
  t: number;
  speed?: number;
  distance?: number;
  lineWidth?: number;
}

interface IRadianData {
  val: number;
  pos: -1 | 1;
}
export type { IOptions, IPoint, IRadianData };
