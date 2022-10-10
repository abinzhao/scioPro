import React from 'react';
// @ts-ignore
import { Input, Space } from '@sciopro/components';

export default () => {
  return (
    <div style={{ width: 300 }}>
      <Space direction="vertical">
        <Input status="success" placeholder="success" />
        <Input status="warning" placeholder="warning" />
        <Input status="error" placeholder="error" />
      </Space>
    </div>
  );
};
