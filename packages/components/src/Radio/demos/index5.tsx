import React from 'react';
// @ts-ignore
import { Radio } from '@sciopro/components';

export default () => {
  const dataSource = [
    { label: 'Html', value: 'html' },
    { label: 'Css', value: 'css' },
    { label: 'Javascript', value: 'javascript' },
  ];
  return (
    <div>
      <Radio
        name="scio-radio"
        direction="row"
        dataSource={dataSource}
        isCheckedBG
        defaultChecked
      ></Radio>
      <Radio
        name="scio-radio1"
        direction="row"
        dataSource={dataSource}
        defaultChecked
        isHoverBG
      ></Radio>
      <Radio
        name="scio-radio2"
        direction="row"
        dataSource={dataSource}
        defaultChecked
        isCheckedBG
        isHoverBG
        onClick={(v: any) => console.log(v)}
      ></Radio>
    </div>
  );
};
