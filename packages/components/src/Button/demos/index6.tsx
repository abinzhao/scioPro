import React from 'react';
// @ts-ignore
import { Button, Space } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Space>
        <Button color="#498fda">Button</Button>
        <Button color="#8734fc" circle>
          Button
        </Button>
        <Button color="#00f">Button</Button>
        <Button color="#7f89dc">Button</Button>
        <Button color="#f0f" circle>
          Button
        </Button>
      </Space>
    </div>
  );
};
