import React, { useState } from 'react';
// @ts-ignore
import { Input, Space, Icon } from '@sciopro/components';

export default () => {
  const [InputValue, setInputValue] = useState<string>();
  return (
    <div style={{ width: 300 }}>
      <Space direction="vertical">
        <Input.Search
          placeholder="input search"
          search={{
            onSearch: (v: string) => setInputValue(v),
          }}
        />
        <Input.Search
          placeholder="input search"
          status="warning"
          icon={<Icon type="GithubOutlined" />}
          iconAlign="right"
          clear
          search={{
            onSearch: (v: string) => setInputValue(v),
            btnType: 'warning',
            text: 'ๆ็ดข๐',
          }}
        />
        <Input.Search
          placeholder="input search"
          status="error"
          clear
          icon={<Icon type="GithubOutlined" />}
          search={{
            onSearch: (v: string) => setInputValue(v),
            btnType: 'error',
            text: '๐ๆ็ดข',
            loading: true,
          }}
        />

        <h4>ๆ็ดขๅผ:{InputValue}</h4>
      </Space>
    </div>
  );
};
