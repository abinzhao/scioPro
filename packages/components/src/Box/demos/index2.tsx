import React from 'react';
// @ts-ignore
import { Box, Button, Space } from '@sciopro/components';
import './index.module.less';

export default () => {
  return (
    <div>
      <Box direction="row">
        <Space>
          <Button>Button1</Button>
          <Button>Button2</Button>
        </Space>
      </Box>
      <Box direction="column" margin={[12, 0]}>
        <Space direction="vertical">
          <Button>Button1</Button>
          <Button>Button2</Button>
        </Space>
      </Box>
      <Box direction="row-reverse">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </Box>
      <Box direction="column-reverse">
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </Box>
    </div>
  );
};
