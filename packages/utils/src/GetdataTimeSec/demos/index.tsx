import React from 'react';
// @ts-ignore
import { GetdataTimeSec } from '@sciopro/utils';

export default () => {
  return (
    <div>
      <h4>当前时间(默认):{GetdataTimeSec()}</h4>
      <h4>当前时间：{GetdataTimeSec({ date: 1665216649640, type: 'yyyy-mm-dd' })}</h4>
      <h4>当前时间：{GetdataTimeSec({ date: 1665216649640, type: 'yyyy-mm-dd hh:mm:ss' })}</h4>
      <h4>当前时间：{GetdataTimeSec({ type: 'yyyy/mm/dd', isWeekDay: false })}</h4>
      <h4>当前时间：{GetdataTimeSec({ type: 'yyyy-mm-dd hh:mm:ss' })}</h4>
      <h4>当前时间：{GetdataTimeSec({ type: 'yyyy/mm/dd hh:mm:ss', isWeekDay: false })}</h4>
    </div>
  );
};
