import React from 'react';
// @ts-ignore
import { Icon, Space } from '@sciopro/components';
import PromptSuggestionIcon from './data2';
import './index.module.less';

export default () => {
  return (
    <Space size={[12, 18]} wrap>
      {PromptSuggestionIcon?.map((item) => {
        return (
          <div key={item} className="demo-icon-style">
            <div className="icon">
              <Icon type={item} style={{ fontSize: 32 }} />
            </div>
            <div>{item}</div>
          </div>
        );
      })}
    </Space>
  );
};
