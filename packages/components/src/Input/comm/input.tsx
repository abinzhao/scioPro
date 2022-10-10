import React, { memo, useEffect } from 'react';
import { InputProps } from '../type';
import classnames from 'classnames';
import './index.module.less';

const InputComp: React.FC<InputProps> = memo((props) => {
  const {
    className,
    style,
    onChange = () => {},
    disabled = false,
    defaultValue,
    placeholder,
    size = 'medium',
    status = 'success',
    ...rest
  } = props;

  useEffect(() => {
    onChange?.(defaultValue);
  }, []);

  // 样式处理
  const SizeH = () => {
    if (size == 'small') return 24;
    if (size == 'medium') return 32;
    return 40;
  };
  const _style = {
    ...style,
    height: SizeH(),
  };

  return (
    <div className="scio-input">
      <input
        type="text"
        className={classnames({ className, 'input-disabled': disabled })}
        style={_style}
        onChange={(e) => onChange?.(e.target.value)}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        data-status={status}
        {...rest}
      />
    </div>
  );
});

export default InputComp;
