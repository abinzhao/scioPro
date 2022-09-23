import React from 'react';
import { Box } from '@sciopro/components';
import './index.less';

export default () => {
  return (
    <div>
      <Box direction="row">
        <div className="demo-style2">1</div>
        <div className="demo-style2">2</div>
      </Box>
      <Box direction="column">
        <div className="demo-style2">1</div>
        <div className="demo-style2">2</div>
      </Box>
      <Box direction="row-reverse">
        <div className="demo-style2">1</div>
        <div className="demo-style2">2</div>
        <div className="demo-style2">3</div>
      </Box>
      <Box direction="column-reverse">
        <div className="demo-style2">1</div>
        <div className="demo-style2">2</div>
        <div className="demo-style2">3</div>
      </Box>
    </div>
  );
};
