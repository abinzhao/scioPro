import React, { memo, useEffect, useState } from 'react';
import { RadioProps } from './type';
import classnames from 'classnames';
import './index.module.less';

const CheckBox: React.FC<RadioProps> = (props) => {
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
    name = 'checkbox',
    direction = 'row',
  } = props;

  const ValFun = (_value: any, _defaultChecked: boolean) => {
    if (_value && _value?.length > 0) return _value;
    if (defaultChecked) return [dataSource?.[0]?.value];
    return [];
  };

  const [_value, setValue] = useState<string | number>(ValFun(value, defaultChecked));
  const [_checkbox, setCheckbox] = useState<any[]>(ValFun(value, defaultChecked));

  const Direction_style: React.CSSProperties = {
    flexDirection: direction == 'row' ? 'row' : 'column',
    alignItems: direction == 'row' ? 'center' : 'flex-start',
  };

  const CheckBoxOnChange = (e: any) => {
    let data: any[] = [..._checkbox];

    if (e?.target?.checked) {
      if (data?.includes(e?.target?.value)) {
        data?.splice(data.indexOf(e?.target?.value), 1);
        setCheckbox([...data]);
        setValue(e?.target?.value);
        onChange?.(data);
        return;
      }
      data?.push(e?.target?.value);
      setCheckbox([...data]);
      onChange?.(data);
      return;
    }

    if (data?.includes(e?.target?.value)) {
      data?.splice(data.indexOf(e?.target?.value), 1);
      setCheckbox([...data]);
      onChange?.(data);
      return;
    }
  };

  useEffect(() => {
    onChange?.(_checkbox);
    onClick?.(_checkbox);
  }, [_checkbox]);

  return (
    <div
      className={classnames('scio-checkbox', className)}
      style={{ ...style, ...Direction_style }}
    >
      {dataSource?.length
        ? dataSource?.map((item) => (
            <label key={item?.value}>
              <input
                type="checkbox"
                name={name}
                onChange={(e) => {
                  CheckBoxOnChange(e);
                }}
                value={item?.value}
                defaultChecked={_checkbox?.includes(item?.value)}
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

export default memo(CheckBox);
