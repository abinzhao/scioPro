import React from 'react';
// @ts-ignore
import { Button, Space } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Space>
        <Button>Button</Button>
        <Button type={'success'}>Button</Button>
        <Button type={'info'}>Button</Button>
        <Button type={'warning'}>Button</Button>
        <Button type={'error'}>Button</Button>
      </Space>
    </div>
  );
};
