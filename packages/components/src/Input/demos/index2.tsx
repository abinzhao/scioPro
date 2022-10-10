import React from 'react';
// @ts-ignore
import { Input, Space } from '@sciopro/components';

export default () => {
  return (
    <div style={{ width: 300 }}>
      <Space direction="vertical">
        <Input size="small" placeholder="small" />
        <Input size="medium" placeholder="medium" />
        <Input size="large" placeholder="large" />
      </Space>
    </div>
  );
};
