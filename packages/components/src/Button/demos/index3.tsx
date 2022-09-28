import React from 'react';
// @ts-ignore
import { Space, Button } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Space>
        <Button disabled>Button</Button>
        <Button type={'success'} disabled>
          Button
        </Button>
        <Button type={'info'} disabled>
          Button
        </Button>
        <Button type={'warning'} disabled>
          Button
        </Button>
        <Button type={'error'} disabled>
          Button
        </Button>
      </Space>
    </div>
  );
};
