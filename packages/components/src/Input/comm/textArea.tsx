import React, { memo, useEffect, useState } from 'react';
import { InputProps } from '../type';
import classnames from 'classnames';
import './index.module.less';
import { Icon } from '../../index';

const TextAreaComp: React.FC<InputProps> = memo((props) => {
  const {
    className,
    style,
    onChange = () => {},
    disabled = false,
    defaultValue,
    placeholder,
    size = 'medium',
    status = 'success',
    textArea,
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

  const _textArea = {
    autoCapitalize: 'none',
    cols: 20,
    rows: 4,
    wrap: 'hard',
    ...textArea,
  };

  useEffect(() => {
    onChange?.(defaultValue);
  }, []);

  return (
    <div className="scio-input scio-textarea">
      <textarea
        className={classnames({ className, 'input-disabled': disabled })}
        style={style}
        onChange={(e) => {
          onChange?.(e.target.value);
          setValue(e.target.value);
        }}
        value={value}
        readOnly={readOnly}
        required={required}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        data-status={
          maxLength
            ? (value?.length ?? 0) >= maxLength
              ? 'error'
              : status
              ? status
              : 'success'
            : status
        }
        id={nowDateId}
        {..._textArea}
        {...rest}
      />
      {clear && (value && value != '' ? true : false) && (
        // @ts-ignore
        <div onClick={() => setValue('')}>
          <Icon className="clear-icon" type="CloseCircleOutlined" />
        </div>
      )}
      {maxLength && <span className="textarea-span">{`${value?.length ?? 0}/${maxLength}`}</span>}
    </div>
  );
});

export default TextAreaComp;
