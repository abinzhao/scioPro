import React, { memo, useState } from 'react';
import { InputProps } from '../type';
import { Button, Icon } from '../../index';
import classnames from 'classnames';
import './index.module.less';

const SearchComp: React.FC<InputProps> = memo((props) => {
  const {
    className,
    style,
    onChange = () => {},
    disabled = false,
    defaultValue,
    placeholder,
    size = 'medium',
    status = 'success',
    search,
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

  const nowDateId = 'search' + Date.now();

  const _Search = {
    onSearch: () => {},
    btnType: 'primary',
    text: '搜索',
    loading: false,
    ...search,
  };

  const [InputValue, setInputValue] = useState<string>(defaultValue);

  // 样式处理
  const SizeH = () => {
    if (size == 'small') return 24;
    if (size == 'medium') return 32;
    return 40;
  };
  const iconMH = () => {
    if (size == 'small') return '4%';
    if (size == 'medium') return '18%';
    return '24%';
  };
  const _style: React.CSSProperties = {
    ...style,
    borderRadius: '4px 0 0 4px',
    height: SizeH(),
    // @ts-ignore
    paddingLeft: icon && iconAlign == 'left' && '9%',
    // @ts-ignore
    paddingRight: icon && iconAlign == 'right' && clear ? '15%' : '8%',
  };
  const _styleBtn: React.CSSProperties = {
    height: SizeH(),
    borderRadius: '0 4px 4px 0',
  };

  const _styleIconAlign: React.CSSProperties =
    iconAlign == 'left'
      ? {
          top: iconMH(),
          left: '2.5%',
        }
      : { top: iconMH(), right: '22%' };

  return (
    <div className={classnames('scio-input', { 'scio-search': true })}>
      <input
        type="text"
        className={classnames({ className, 'input-disabled': disabled })}
        style={_style}
        value={InputValue}
        readOnly={readOnly}
        required={required}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange?.(InputValue);
        }}
        defaultValue={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        data-status={status}
        {...rest}
      />
      {clear && (InputValue && InputValue != '' ? true : false) && (
        // @ts-ignore
        <div onClick={() => setInputValue('')}>
          <Icon className="search-clear-icon" type="CloseCircleOutlined" />
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
      <Button
        // @ts-ignore
        type={_Search?.btnType}
        style={_styleBtn}
        onClick={() => _Search?.onSearch?.(InputValue)}
        icon={_Search?.loading && <Icon type="LoadingOutlined" />}
      >
        {_Search?.text}
      </Button>
    </div>
  );
});

export default SearchComp;
