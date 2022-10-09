import React, { useState } from 'react';
// @ts-ignore
import { FileToBase64 } from '@sciopro/utils';

export default () => {
  const [base64, setBase64] = useState<any>({});
  return (
    <div>
      <input
        id="upload"
        type="file"
        onChange={async (e: any) => {
          const data = await FileToBase64({ file: e.target.files[0] });
          setBase64(data);
        }}
      />
      <h4>
        文件格式:<span style={{ color: '#f00' }}>{base64?.suffix}</span>
      </h4>
      <h4>
        Base64:<span style={{ color: '#00f' }}>{base64?.base64String}</span>
      </h4>
    </div>
  );
};
