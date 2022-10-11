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
            text: '搜索🔍',
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
            text: '🔍搜索',
            loading: true,
          }}
        />

        <h4>搜索值:{InputValue}</h4>
      </Space>
    </div>
  );
};
