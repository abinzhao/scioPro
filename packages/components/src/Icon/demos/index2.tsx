import React from 'react';
// @ts-ignore
import { Icon, Space } from '@sciopro/components';
import DirectionalIcons from './data1';
import './index.module.less';

export default () => {
  return (
    <Space size={[12, 18]} wrap>
      {DirectionalIcons?.map((item) => {
        return (
          <div key={item} className="demo-icon-style">
            <div className="icon">
              <Icon type={item} style={{ fontSize: 32 }} />
            </div>
            <div>{item}</div>
          </div>
        );
      })}
    </Space>
  );
};
