import React from 'react';
// @ts-ignore
import { Badge, Space, Icon } from '@sciopro/components';

export default () => {
  return (
    <Space>
      <Badge dot>
        <Icon type="WechatOutlined" />
      </Badge>
      <Badge count={0} dot>
        <Icon type="QqOutlined" />
      </Badge>
      <Badge dot>
        <a href="#">A Link</a>
      </Badge>
    </Space>
  );
};
