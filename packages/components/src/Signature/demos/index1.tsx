import React, { useEffect } from 'react';
// @ts-ignore
import { Signature } from '@sciopro/components';
export default () => {
  let signature: any = null;

  const init = () => {
    const canvas = document.getElementById('canvas');
    const options = {
      width: Math.min(window.innerWidth, 1000),
      height: 600,
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
  return <canvas id="canvas"></canvas>;
};
