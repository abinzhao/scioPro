import React from 'react';
// @ts-ignore
import { Box, Button, Space } from '@sciopro/components';
import './index.module.less';

export default () => {
  return (
    <Box direction="row">
      <Space>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
    </Box>
  );
};
