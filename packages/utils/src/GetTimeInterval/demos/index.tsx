import React from 'react';
// @ts-ignore
import { GetTimeInterval } from '@sciopro/utils';

export default () => {
  return <div>时间：{GetTimeInterval(1665216649640, 1665217649640)}</div>;
};
