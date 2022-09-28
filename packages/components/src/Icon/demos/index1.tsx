import React from 'react';
// @ts-ignore
import { Icon, Space } from '@sciopro/components';
export default () => {
  return (
    <Space>
      <Icon type="HomeOutlined" />
      <Icon type="SettingFilled" />
      <Icon type="SmileOutlined" />
      <Icon type="SyncOutlined" spin />
      <Icon type="SmileOutlined" rotate={180} />
      <Icon type="LoadingOutlined" />
    </Space>
  );
};
