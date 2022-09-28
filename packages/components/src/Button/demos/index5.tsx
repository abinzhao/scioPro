import React from 'react';
// @ts-ignore
import { Button, Space } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Space>
        <Button dashed>Button</Button>
        <Button type={'success'} dashed circle>
          Button
        </Button>
        <Button type={'info'} dashed>
          Button
        </Button>
        <Button type={'warning'} dashed>
          Button
        </Button>
        <Button type={'error'} dashed circle>
          Button
        </Button>
      </Space>
    </div>
  );
};
