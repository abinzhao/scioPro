import React, { useState } from 'react';
// @ts-ignore
import { Space, Radio } from '@sciopro/components';
import './index.module.less';

export default () => {
  const [align, setAlign] = useState('start');

  const onChange = (val: any) => {
    setAlign(val);
    console.log(align);
  };

  const dataSource = [
    { label: 'start', value: 'start' },
    { label: 'center', value: 'center' },
    { label: 'end', value: 'end' },
    { label: 'baseline', value: 'baseline' },
  ];

  return (
    <>
      <Radio
        name="scio-radio2"
        direction="row"
        value={align}
        dataSource={dataSource}
        onChange={onChange}
      ></Radio>
      <br />
      <Space align={align}>
        <div className="demo-style">div1</div>
        <div className="demo-style">div2</div>
        <div className="demo-style1">div3</div>
      </Space>
    </>
  );
};
