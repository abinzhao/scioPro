import React from 'react';
// @ts-ignore
import { Button, Space } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Space>
        <Button>Button</Button>
        <Button type={'success'} size="medium">
          Button
        </Button>
        <Button type={'info'} size="large">
          Button
        </Button>
      </Space>
    </div>
  );
};
