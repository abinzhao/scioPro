import React from 'react';
// @ts-ignore
import { Tag, Space, Icon } from '@sciopro/components';

export default () => {
  return (
    <Space>
      <Tag icon={<Icon type="GithubOutlined" />} text={'标签'} />
      <Tag icon={<Icon type="WechatOutlined" />} text={'标签'} />
      <Tag icon={<Icon type="QqOutlined" />} text={'标签'} />
    </Space>
  );
};
