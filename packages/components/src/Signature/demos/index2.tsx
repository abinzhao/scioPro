import React, { useEffect } from 'react';
// @ts-ignore
import { Signature, Button, Space } from '@sciopro/components';

export default () => {
  let signature: any = null;

  const init = () => {
    const canvas = document.getElementById('canvas2');
    const options = {
      width: 400,
      height: 300,
      minWidth: 4,
      maxWidth: 12,
      color: '#1890ff',
      bgColor: '#f6f6f6',
    };
    signature = new Signature(canvas, options);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      {/* <Space>
        <Button onClick={() => signature.getPNG()}>生成PNG</Button>
        <Button onClick={() => signature.getJPG()}>生成JPG</Button>
        <Button onClick={() => signature.clear()}>清屏</Button>
        <Button onClick={() => signature.undo()}>撤销</Button>
        <Button onClick={() => console.log('是否为空:', signature.isEmpty())}>是否为空</Button>
        <Button onClick={() => signature.getRotateCanvas()}>生成旋转后的新画布</Button>
      </Space> */}
      <canvas id="canvas2"></canvas>
    </div>
  );
};
