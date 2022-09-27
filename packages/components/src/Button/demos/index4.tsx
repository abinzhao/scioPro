import React from 'react';
// @ts-ignore
import { Switch } from '@sciopro/components';

export default () => {
  return (
    <div>
      <Switch size="small" text={{ openText: '开', closeText: '关' }}></Switch>
      <Switch defaultChecked size="medium" text={{ openText: '开', closeText: '关' }}></Switch>
      <Switch size="large" text={{ openText: '开', closeText: '关' }}></Switch>
    </div>
  );
};
