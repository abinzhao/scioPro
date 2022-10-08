import React, { useEffect, useState } from 'react';
// @ts-ignore
import { Signature, Button, Space, Box } from '@sciopro/components';
// @ts-ignore
import { RandomColor } from '@sciopro/utils';
let signature: any = null;
export default () => {
  const [color, setColor] = useState<string>('#1890ff');
  const [bgColor, setBgColor] = useState<string>('#f6f6f6');
  const init = () => {
    const canvas = document.getElementById('canvas2');
    const options = {
      width: 400,
      height: 300,
      minWidth: 4,
      maxWidth: 12,
      color: color,
      bgColor: bgColor,
    };
    signature = new Signature(canvas, options);
  };

  const download = (type: string) => {
    const a = document.createElement('a');
    if (type == 'PNG') {
      a.href = signature.getPNG();
    } else {
      a.href = signature.getJPG();
    }
    a.setAttribute('download', '签名');
    a.click();
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      <Box margin={[12, 0]}>
        <Space>
          <Button onClick={() => download('PNG')}>生成PNG</Button>
          <Button onClick={() => download('JPG')}>生成JPG</Button>
          <Button onClick={() => signature.clear()}>清屏</Button>
          <Button onClick={() => signature.undo()}>撤销</Button>
          <Button onClick={() => (signature.color = RandomColor('#16'))}>笔色</Button>

          {/* <Button onClick={() => console.log('是否为空:', signature.isEmpty())}>是否为空</Button>
        <Button onClick={() => signature.getRotateCanvas()}>生成旋转后的新画布</Button> */}
        </Space>
      </Box>
      <canvas id="canvas2"></canvas>
    </div>
  );
};
