import React from 'react';
// @ts-ignore
import { Button, Space } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Space>
        <Button loading>Button</Button>
        <Button type={'success'} dashed loading>
          Button
        </Button>
        <Button type={'info'} loading>
          Button
        </Button>
        <Button type={'warning'} dashed loading>
          Button
        </Button>
        <Button type={'error'} loading>
          Button
        </Button>
      </Space>
    </div>
  );
};
