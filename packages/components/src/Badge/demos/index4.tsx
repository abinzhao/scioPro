import React from 'react';
// @ts-ignore
import { Badge, Space, Icon } from '@sciopro/components';
import './index.module.less';

export default () => {
  return (
    <Space>
      <Badge content="hot" style={{ backgroundColor: '#FC0E3D', color: '#FFFFFF' }}>
        <a href="#" className="basic-example"></a>
      </Badge>
      <Badge
        content={<Icon type="CloseCircleTwoTone" style={{ fontSize: 18 }} />}
        style={{ backgroundColor: 'transparent', color: 'red', padding: 0 }}
      >
        <a href="#" className="basic-example"></a>
      </Badge>
    </Space>
  );
};
