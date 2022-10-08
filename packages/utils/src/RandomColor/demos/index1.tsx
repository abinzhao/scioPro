import React, { useState } from 'react';
// @ts-ignore
import { RandomColor } from '@sciopro/utils';
// @ts-ignore
import { Button, Box } from '@sciopro/components';
export default () => {
  const [color, setColor] = useState<string>(RandomColor({ type: '#16' }));
  const [rgbColor, setRgbColor] = useState<string>(RandomColor({ type: 'rgb' }));
  return (
    <div>
      <Button
        onClick={() => {
          setColor(RandomColor({ type: '#16' }));
        }}
      >
        生成16进制颜色
      </Button>
      <Box margin={[12, 0]} align="center">
        <h2>16进制随机颜色为:{color}</h2>
        <h2 style={{ backgroundColor: color, padding: 4, borderRadius: 18 }}>{color}</h2>
      </Box>
      <Button
        onClick={() => {
          setRgbColor(RandomColor({ type: 'rgb' }));
        }}
      >
        生成RGB颜色
      </Button>
      <Box margin={[12, 0]} align="center">
        <h2>RGB随机颜色为:{rgbColor}</h2>
        <h2 style={{ backgroundColor: rgbColor, padding: 4, borderRadius: 18 }}>{rgbColor}</h2>
      </Box>
    </div>
  );
};
