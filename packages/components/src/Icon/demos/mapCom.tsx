import React, { useState } from 'react';
// @ts-ignore
import { Icon, Space, Radio } from '@sciopro/components';
import './index.module.less';

export default ({ data, lineData }: any) => {
  const [value, setValue] = useState<string>('line');
  const dataSource = [
    { label: '线框风格图标', value: 'line' },
    { label: '双色风格图标', value: 'color' },
  ];
  return (
    <div>
      <Radio
        name="scio-radio5"
        direction="row"
        dataSource={dataSource}
        value={value}
        onClick={(e: any) => {
          console.log(e);
          setValue(e);
        }}
        isCheckedBG
        isHoverBG
      ></Radio>
      <Space size={[12, 18]} wrap>
        {value == 'line' &&
          lineData?.map((item: any) => {
            return (
              <div key={item} className="demo-icon-style">
                <div className="icon">
                  <Icon type={item} style={{ fontSize: 32 }} />
                </div>
                <div>{item}</div>
              </div>
            );
          })}
        {value == 'color' &&
          data?.map((item: any) => {
            return (
              <div key={item} className="demo-icon-style">
                <div className="icon">
                  <Icon type={item} style={{ fontSize: 32 }} />
                </div>
                <div>{item}</div>
              </div>
            );
          })}
      </Space>
    </div>
  );
};
