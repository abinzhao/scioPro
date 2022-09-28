import React from 'react';
// @ts-ignore
import { Button, Space, Icon } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Space>
        <Button icon={<Icon type="GithubOutlined" />}>Button</Button>
        <Button type={'success'} dashed circle icon={<Icon type="WechatOutlined" />}>
          Button
        </Button>
        <Button type={'info'} icon={<Icon type="QqOutlined" />}>
          Button
        </Button>
        <Button type={'warning'} dashed icon={<Icon type="WeiboOutlined" />}>
          Button
        </Button>
        <Button type={'error'} circle icon={<Icon type="IeOutlined" />}>
          Button
        </Button>
      </Space>
    </div>
  );
};
