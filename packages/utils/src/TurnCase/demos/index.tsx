import React, { useState } from 'react';
// @ts-ignore
import { TurnCase } from '@sciopro/utils';

export default () => {
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <h4>请输入英文:</h4>
      <input
        onChange={async (e: any) => {
          setValue(e.target.value);
        }}
      />
      <h4>全大写:{TurnCase(value, 1)}</h4>
      <h4>全小写:{TurnCase(value, 2)}</h4>
      <h4>首字母大写:{TurnCase(value, 3) || ''}</h4>
    </div>
  );
};
