import React from 'react';
// @ts-ignore
import { Input, Space } from '@sciopro/components';

export default () => {
  return (
    <div style={{ width: 300 }}>
      <Space direction="vertical">
        <Input size="small" placeholder="small" clear />
        <Input size="medium" placeholder="medium" clear />
        <Input size="large" placeholder="large" clear />
      </Space>
    </div>
  );
};
