import React from 'react';
// @ts-ignore
import { Badge, Space } from '@sciopro/components';
import './index.module.less';

export default () => {
  return (
    <Space>
      <Badge count={25} />
      <Badge
        count={4}
        style={{
          backgroundColor: '#fff',
          color: '#999',
          border: '1px solid #d9d9d9',
        }}
      />
      <Badge count={109} style={{ backgroundColor: '#87d068' }} />
      <Badge dot />
      <Badge content="hot" style={{ backgroundColor: '#FC0E3D', color: '#FFFFFF' }} />
    </Space>
  );
};
