import React, { memo, useEffect, useState } from 'react';
import { SwitchProps } from './type';
import classnames from 'classnames';
import './index.module.less';

const Switch: React.FC<SwitchProps> = (props) => {
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

  return (
    <div className="scio-switch">
      <div
        style={{
          position: 'relative',
          width: size == 'small' ? '1.65em' : size == 'medium' ? '2em' : '3.5em',
        }}
      >
        <input
          type="checkbox"
          className={classnames(`switch_1_${size}`, { className, 'disabled-style': disabled })}
          style={{ ...style, cursor: disabled ? 'not-allowed' : 'pointer' }}
          onChange={(e) => {
            onChange?.(e?.target?.checked);
            setValue(e?.target?.checked);
          }}
          onClick={() => onClick?.(value)}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        {value ? (
          <span className={`text-open-${size}`}>{text?.openText}</span>
        ) : (
          <span className={`text-close-${size}`}>{text?.closeText}</span>
        )}
      </div>
    </div>
  );
};

export default memo(Switch);
