import React, { memo, useEffect, useState } from 'react';
import { InputProps } from '../type';
import classnames from 'classnames';
import './index.module.less';
import { Icon } from '../../index';

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
    icon,
    iconAlign = 'left',
    clear = false,
    readOnly = false,
    required = false,
    autoFocus = false,
    maxLength,
    minLength,
    autoComplete = 'off',
    ...rest
  } = props;

  const [value, setValue] = useState<string>();
  const nowDateId = 'textarea' + Date.now();

  useEffect(() => {
    onChange?.(defaultValue);
  }, []);

  // 样式处理
  const SizeH = () => {
    if (size == 'small') return 24;
    if (size == 'medium') return 32;
    return 40;
  };
  const iconMH = () => {
    if (size == 'small') return '4%';
    if (size == 'medium') return '14%';
    return '24%';
  };
  const _style: React.CSSProperties = {
    ...style,
    height: SizeH(),
    // @ts-ignore
    paddingLeft: icon && iconAlign == 'left' ? '9%' : 11,
    // @ts-ignore
    paddingRight: icon ? (iconAlign == 'right' ? (clear ? '15%' : '9%') : 11) : 11,
  };
  const _styleIconAlign: React.CSSProperties =
    iconAlign == 'right'
      ? {
          top: iconMH(),
          right: '3%',
        }
      : { top: iconMH(), left: '2.5%' };

  return (
    <div className="scio-input">
      <input
        type="text"
        className={classnames({ className, 'input-disabled': disabled })}
        style={_style}
        value={value}
        readOnly={readOnly}
        required={required}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        onChange={(e) => {
          onChange?.(e.target.value);
          setValue(e.target.value);
        }}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        data-status={status}
        {...rest}
      />
      {clear && (value && value != '' ? true : false) && (
        // @ts-ignore
        <div onClick={() => setValue('')}>
          <Icon
            className="input-clear-icon"
            style={{ right: icon ? '9%' : 6 }}
            type="CloseCircleOutlined"
          />
        </div>
      )}
      {icon && (
        <div
          style={{
            margin: iconAlign == 'left' ? '0 5px 0 0' : '0 0 0 5px',
            position: 'absolute',
            ..._styleIconAlign,
          }}
        >
          {icon}
        </div>
      )}
    </div>
  );
});

export default InputComp;
