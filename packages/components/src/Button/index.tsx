import React, { memo } from 'react';
import { SwitchProps } from './type';
import classnames from 'classnames';
import './index.module.less';

const Button: React.FC<SwitchProps> = (props) => {
  const {
    className,
    children,
    style,
    onClick = () => {},
    disabled = false,
    size = 'small',
    ...rest
  } = props;

  const WH_style = () => {
    if (size == 'medium') return { padding: '8px 24px' };
    if (size == 'large') return { padding: '8px 32px' };
    return { padding: '8px 12px' };
  };

  return (
    <div className="scio-button">
      <button className={classnames('button-style')} style={{ ...style, ...WH_style() }}>
        {children || ''}
      </button>
    </div>
  );
};

export default memo(Button);
