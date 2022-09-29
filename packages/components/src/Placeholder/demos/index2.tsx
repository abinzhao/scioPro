import React from 'react';
// @ts-ignore
import { Placeholder, Button } from '@sciopro/components';

export default () => {
  return (
    <Placeholder
      title={'页面丢了，咋整？'}
      description={
        <Button type={'success'} block>
          回到首页
        </Button>
      }
    />
  );
};
