import React from 'react';
// @ts-ignore
import { Tag, Space } from '@sciopro/components';

export default () => {
  const arr = ['blue', 'green', 'orange', 'red', 'turquoise', 'yellow'];
  return (
    <div style={{ width: 300 }}>
      <Tag text={'标签'} style={{ margin: '6px 0' }} />
      <Space>
        {arr?.map((item) => (
          <Tag type="normal" color={item} text={item} />
        ))}
      </Space>
    </div>
  );
};
