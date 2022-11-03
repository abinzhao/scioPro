import React from 'react';
// @ts-ignore
import { Box, Button } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Box direction="row" justify="flex-start">
        <Button>Button1</Button>
        <Button>Button2</Button>
      </Box>
      <Box direction="row" justify="center">
        <Button>Button1</Button>
        <Button>Button2</Button>
      </Box>
      <Box direction="row" justify="flex-end">
        <Button>Button1</Button>
        <Button>Button2</Button>
      </Box>
    </div>
  );
};
