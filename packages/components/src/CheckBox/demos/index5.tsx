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
      <CheckBox
        name="scio-checkbox"
        direction="row"
        dataSource={dataSource}
        isCheckedBG
        defaultChecked
      ></CheckBox>
      <CheckBox
        name="scio-checkbox1"
        direction="row"
        dataSource={dataSource}
        defaultChecked
        isHoverBG
      ></CheckBox>
      <CheckBox
        name="scio-checkbox2"
        direction="row"
        dataSource={dataSource}
        defaultChecked
        isCheckedBG
        isHoverBG
        onClick={(v: any) => console.log(v)}
      ></CheckBox>
    </div>
  );
};
