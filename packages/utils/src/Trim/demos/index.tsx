import React, { useState } from 'react';
// @ts-ignore
import { Trim } from '@sciopro/utils';

export default () => {
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <input
        onChange={async (e: any) => {
          setValue(e.target.value);
        }}
      />
      <h4>去除空格前:{value}</h4>
      <h4>去除所有空格:{Trim(value)}</h4>
      <h4>去除前后空格:{Trim(value, 2)}</h4>
    </div>
  );
};
