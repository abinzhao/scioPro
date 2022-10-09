import React, { memo, useEffect, useState } from 'react';
import { SwitchProps } from './type';
import classnames from 'classnames';
import './index.module.less';

const Input: React.FC<SwitchProps> = (props) => {
  const {
    className,
    style,
    onChange = () => {},
    onClick = () => {},
    disabled = false,
    text = undefined,
    defaultChecked = false,
    size = 'small',
    ...rest
  } = props;
  const [value, setValue] = useState<boolean>(defaultChecked);

  useEffect(() => {
    onChange?.(value);
    onClick?.(value);
  }, [value]);

  return <div className="scio-input"></div>;
};

export default memo(Input);
