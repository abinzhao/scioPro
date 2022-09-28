import React from 'react';
// @ts-ignore
import { Button, Space } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Space width={300} direction="vertical">
        <Button block>按钮</Button>
        <Button type={'success'} block>
          按钮
        </Button>
        <Button type={'info'} block>
          按钮
        </Button>
        <Button type={'warning'} block>
          按钮
        </Button>
        <Button type={'error'} block>
          按钮
        </Button>
      </Space>
    </div>
  );
};
