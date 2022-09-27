import React from 'react';
// @ts-ignore
import { Switch, Space } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Switch text={{ openText: 'on', closeText: 'off' }}></Switch>
      <Switch text={{ openText: '开', closeText: '关' }}></Switch>
      <Switch text={{ openText: 'on', closeText: 'off' }}></Switch>
    </div>
  );
};
