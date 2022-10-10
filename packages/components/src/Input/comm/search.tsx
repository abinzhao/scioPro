import React, { memo, useState } from 'react';
import { InputProps } from '../type';
import { Button } from '../../index';
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
    Search,
    ...rest
  } = props;

  const _Search = {
    onSearch: () => {},
    btnType: 'primary',
    text: '搜索',
    ...Search,
  };

  const [InputValue, setInputValue] = useState<string>(defaultValue);

  // 样式处理
  const SizeH = () => {
    if (size == 'small') return 24;
    if (size == 'medium') return 32;
    return 40;
  };
  const _style = {
    ...style,
    borderRadius: '4px 0 0 4px',
    height: SizeH(),
  };
  const _styleBtn = {
    height: SizeH(),
    borderRadius: '0 4px 4px 0',
  };

  return (
    <div className={classnames('scio-input', { 'scio-search': true })}>
      <input
        type="text"
        className={classnames({ className, 'input-disabled': disabled })}
        style={_style}
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
      <Button
        // @ts-ignore
        type={_Search?.btnType}
        style={_styleBtn}
        onClick={() => _Search?.onSearch?.(InputValue)}
      >
        {_Search?.text}
      </Button>
    </div>
  );
});

export default SearchComp;
