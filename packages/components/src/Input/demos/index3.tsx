import React from 'react';
// @ts-ignore
import { Input, Space, Icon } from '@sciopro/components';

export default () => {
  return (
    <div style={{ width: 300 }}>
      <Space direction="vertical">
        <Input
          status="success"
          placeholder="success--"
          iconAlign="left"
          icon={<Icon type="GithubOutlined" />}
        />
        <Input
          status="warning"
          placeholder="warning"
          iconAlign="right"
          clear
          icon={<Icon type="GithubOutlined" />}
        />
        <Input status="error" placeholder="error" icon={<Icon type="GithubOutlined" />} />
      </Space>
    </div>
  );
};
