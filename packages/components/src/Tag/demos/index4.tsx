import React from 'react';
// @ts-ignore
import { Tag, Space, Icon } from '@sciopro/components';

export default () => {
  const arr = ['blue', 'green', 'orange', 'red', 'turquoise', 'yellow'];
  const arr2 = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
  return (
    <Space direction="vertical">
      <Space>
        {arr?.map((item) => (
          <Tag type="normal" color={item} text={item} />
        ))}
      </Space>
      <Space>
        {arr2?.map((item) => (
          <Tag type="primary" color={item} text={item} />
        ))}
      </Space>
    </Space>
  );
};
