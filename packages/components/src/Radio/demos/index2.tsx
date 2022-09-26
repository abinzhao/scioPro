import React from 'react';
// @ts-ignore
import { Radio } from '@sciopro/components';

export default () => {
  const dataSource = [
    { label: 'Html', value: 'html' },
    { label: 'Css', value: 'css', disabled: true },
    { label: 'Javascript', value: 'javascript' },
  ];
  return (
    <div>
      <Radio name="scio-radio" direction="row" dataSource={dataSource} disabled></Radio>
      <Radio name="scio-radio1" direction="row" dataSource={dataSource}></Radio>
    </div>
  );
};
