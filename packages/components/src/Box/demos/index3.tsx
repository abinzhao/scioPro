import React from 'react';
// @ts-ignore
import { Box } from '@sciopro/components';
import './index.less';

export default () => {
  return (
    <div>
      <Box direction="row" justify="flex-start">
        <div className="demo-style2">1</div>
        <div className="demo-style2">2</div>
      </Box>
      <Box direction="row" justify="center">
        <div className="demo-style2">1</div>
        <div className="demo-style2">2</div>
      </Box>
      <Box direction="row" justify="flex-end">
        <div className="demo-style2">1</div>
        <div className="demo-style2">2</div>
      </Box>
    </div>
  );
};
