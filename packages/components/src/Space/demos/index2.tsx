import React from 'react';
// @ts-ignore
import { Space } from '@sciopro/components';
import './index.less';

export default () => {
  return (
    <Space direction="vertical">
      <div className="demo-style">div1</div>
      <div className="demo-style">div2</div>
      <div className="demo-style">div3</div>
    </Space>
  );
};
