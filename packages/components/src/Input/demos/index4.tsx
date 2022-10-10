import React, { useState } from 'react';
// @ts-ignore
import { Input, Space } from '@sciopro/components';

export default () => {
  const [InputValue, setInputValue] = useState<string>();
  return (
    <div style={{ width: 300 }}>
      <Space direction="vertical">
        <Input.Search
          placeholder="input search"
          Search={{
            onSearch: (v: string) => setInputValue(v),
          }}
        />
        <Input.Search
          placeholder="input search"
          status="warning"
          Search={{
            onSearch: (v: string) => setInputValue(v),
            btnType: 'warning',
            text: '搜索🔍',
          }}
        />
        <Input.Search
          placeholder="input search"
          status="error"
          Search={{
            onSearch: (v: string) => setInputValue(v),
            btnType: 'error',
            text: '🔍搜索',
          }}
        />

        <h4>搜索值:{InputValue}</h4>
      </Space>
    </div>
  );
};
