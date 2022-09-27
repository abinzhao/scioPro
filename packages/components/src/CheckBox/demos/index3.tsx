import React from 'react';
// @ts-ignore
import { CheckBox } from '@sciopro/components';

export default () => {
  const dataSource = [
    { label: '网页', value: 'html' },
    { label: '样式表', value: 'css' },
    { label: '逻辑', value: 'javascript' },
  ];
  return (
    <div>
      <CheckBox name="scio-checkbox" direction="column" dataSource={dataSource}></CheckBox>
    </div>
  );
};
