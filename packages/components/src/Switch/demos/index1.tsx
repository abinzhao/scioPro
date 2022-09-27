import React from 'react';
// @ts-ignore
import { Switch } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Switch text={{ openText: '开', closeText: '关' }}></Switch>
      <Switch />
      <Switch />
    </div>
  );
};
