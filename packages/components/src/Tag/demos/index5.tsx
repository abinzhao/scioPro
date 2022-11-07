import React from 'react';
// @ts-ignore
import { Input, Space } from '@sciopro/components';

export default () => {
  return (
    <div style={{ width: 300 }}>
      <Space direction="vertical">
        <Input.TextArea
          placeholder="input search"
          textArea={{
            maxLength: 20,
          }}
        />
        <Input.TextArea
          placeholder="input search"
          clear
          textArea={{
            maxLength: 20,
            autoFocus: true,
            cols: 20,
            rows: 2,
          }}
        />
        <Input.TextArea
          placeholder="input search"
          status="error"
          textArea={{
            maxLength: 20,
            cols: 20,
            rows: 2,
          }}
        />
      </Space>
    </div>
  );
};
