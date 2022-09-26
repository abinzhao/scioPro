import React, { memo, useEffect, useState } from 'react';
import { RadioProps } from './type';
import classnames from 'classnames';
import './index.module.less';

const Radio: React.FC<RadioProps> = (props) => {
  const {
    className,
    style,
    isCheckedBG = false,
    isHoverBG = false,
    defaultChecked = false,
    dataSource,
    onChange,
    onClick,
    disabled,
    value,
    name = 'radio',
    direction = 'row',
    type = 'radio',
  } = props;

  const ValFun = (_value: any, _defaultChecked: boolean) => {
    if (_value) return _value;
    if (defaultChecked) return dataSource?.[0]?.value;
    return '';
  };

  const [_value, setValue] = useState<string | number>(ValFun(value, defaultChecked));

  const Direction_style: React.CSSProperties = {
    flexDirection: direction == 'row' ? 'row' : 'column',
    alignItems: direction == 'row' ? 'center' : 'flex-start',
  };

  useEffect(() => {
    onChange?.(_value);
    onClick?.(_value);
  }, [_value]);

  return (
    <div className={classnames('scio-radio', className)} style={{ ...style, ...Direction_style }}>
      {dataSource?.length
        ? dataSource?.map((item) => (
            <label key={item?.value}>
              <input
                type="radio"
                name={name}
                onChange={(e) => {
                  setValue(e?.target?.value);
                  onChange?.(e?.target?.value);
                }}
                value={item?.value}
                defaultChecked={_value == item?.value}
                disabled={disabled || item?.disabled}
              />
              <span
                className={classnames({
                  'checked-style': isCheckedBG,
                  'hover-style': isHoverBG,
                })}
              >
                {item?.label ?? ''}
              </span>
            </label>
          ))
        : null}
    </div>
  );
};

export default memo(Radio);
