import React, { useState } from 'react';
// @ts-ignore
import { Space, Radio } from '@sciopro/components';
import './index.module.less';

export default () => {
  const [size, setSize] = useState<string>('small');

  const onChange = (val: any) => {
    setSize(val);
    console.log(size);
  };

  const dataSource = [
    { label: 'mini', value: 'mini' },
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' },
  ];

  return (
    <>
      <Radio
        name="scio-radio1"
        direction="row"
        value={size || 'small'}
        dataSource={dataSource}
        onChange={onChange}
      ></Radio>
      <Space size={size}>
        <div className="demo-style">div1</div>
        <div className="demo-style">div2</div>
        <div className="demo-style">div3</div>
      </Space>
    </>
  );
};
