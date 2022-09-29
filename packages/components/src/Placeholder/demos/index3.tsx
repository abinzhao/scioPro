import React, { useState } from 'react';
// @ts-ignore
import { Placeholder, Button, Radio } from '@sciopro/components';

export default () => {
  const [value, setValue] = useState<string>('403');
  const dataSource = [
    { label: '403', value: '403' },
    { label: '404', value: '404' },
    { label: '系统错误', value: '500' },
    { label: '页面出错', value: 'error' },
    { label: '无网络', value: 'no-network' },
    // { label: '无数据', value: 'no-data' },
    // { label: '无结果', value: 'no-result' },
    // { label: '无消息', value: 'no-news' },
    { label: '无记录', value: 'no-record' },
    { label: '加载出错', value: 'failed-load' },
  ];
  return (
    <div>
      <Radio
        name="scio-radio2"
        direction="row"
        dataSource={dataSource}
        value={value}
        isCheckedBG
        isHoverBG
        onClick={(v: any) => setValue(v)}
      ></Radio>
      <Placeholder
        type={value}
        title={'页面丢了，咋整？'}
        description={
          <Button type={'success'} block>
            回到首页
          </Button>
        }
      />
    </div>
  );
};
