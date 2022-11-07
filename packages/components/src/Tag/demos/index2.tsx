import React from 'react';
// @ts-ignore
import { Tag, Space } from '@sciopro/components';

export default () => {
  return (
    <div style={{ width: 300 }}>
      <Space>
        <Tag size="small" text={'标签'} />
        <Tag size="medium" text={'标签'} />
        <Tag size="large" text={'标签'} />
      </Space>
    </div>
  );
};
