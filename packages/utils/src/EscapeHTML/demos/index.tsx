import React, { useState } from 'react';
// @ts-ignore
import { EscapeHTML } from '@sciopro/utils';

export default () => {
  const [value, _] = useState<string>("<div>{1&&1<>12'1'}</div>");
  return (
    <div>
      <h4>HTML(转义前):{value}</h4>
      <h4>HTML(转义后):{EscapeHTML(value)}</h4>
    </div>
  );
};
