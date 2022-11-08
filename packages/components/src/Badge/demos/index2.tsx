import React from 'react';
// @ts-ignore
import { Badge, Space } from '@sciopro/components';
import './index.module.less';

export default () => {
  return (
    <Space>
      <Badge count={5}>
        <a href="#" className="basic-example"></a>
      </Badge>
      <Badge count={99} overflowCount={99}>
        <a href="#" className="basic-example"></a>
      </Badge>
      <Badge count={999} overflowCount={999}>
        <a href="#" className="basic-example"></a>
      </Badge>
    </Space>
  );
};
