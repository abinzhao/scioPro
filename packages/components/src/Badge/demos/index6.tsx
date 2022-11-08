import React, { useState } from 'react';
// @ts-ignore
import { Badge } from '@sciopro/components';
import './index.module.less';

export default () => {
  const [count, setCount] = useState<number>(0);
  const onClick = () => setCount(count + 1);
  return (
    <Badge count={count} onClick={onClick}>
      <span className="basic-example"></span>
    </Badge>
  );
};
