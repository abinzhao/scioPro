import React from 'react';
// @ts-ignore
import { Space } from '@sciopro/components';
import './index.module.less';

export default () => {
  return (
    <Space size={[12, 18]} wrap>
      {new Array(12).fill('').map((item, index) => {
        return (
          <div key={index} className="demo-style">
            div{index + 1}
          </div>
        );
      })}
    </Space>
  );
};
