import React from 'react';
// @ts-ignore
import { DetectDeviceType } from '@sciopro/utils';

export default () => {
  return (
    <div>
      <h4>当前设备为:{DetectDeviceType()}端</h4>
    </div>
  );
};
