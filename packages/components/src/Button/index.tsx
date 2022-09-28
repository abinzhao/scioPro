import React, { memo } from 'react';
import { SwitchProps } from './type';
import classnames from 'classnames';
import './index.module.less';
import '../theme/index.less';

const Button: React.FC<SwitchProps> = (props) => {
  const {
    className,
    children,
    style,
    onClick = () => {},
    disabled = false,
    size = 'small',
    type = 'primary',
    color = undefined,
    icon,
    iconAlign = 'left',
    dashed = false,
    loading = false,
    block = false,
    ...rest
  } = props;

  const WH_style = () => {
    if (size == 'medium') return { padding: 20 };
    if (size == 'large') return { padding: '24px 32px' };
    return { padding: 8 };
  };

  const renderIcon = () => {
    return (
      icon && (
        <div
          style={{
            margin: iconAlign == 'left' ? '0 5px 0 0' : '0 0 0 5px',
          }}
        >
          {icon}
        </div>
      )
    );
  };

  return (
    <div className="scio-button">
      <button
        className={classnames('button-style')}
        style={{
          ...style,
          backgroundColor:
            color || (dashed ? 'var(--scio-background-color)' : `var(--scio-${type}-color)`),
          color: dashed ? `var(--scio-${type}-color)` : '#fff',
          border: dashed ? `1px dashed var(--scio-${type}-color)` : undefined,
          padding: WH_style()?.padding,
          filter: disabled ? 'grayscale(0.3)' : 'grayscale(0)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          width: block ? '-webkit-fill-available' : 'max-content',
        }}
        onClick={onClick}
      >
        {loading && (
          <svg
            version="1.1"
            id="loader-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="32px"
            height="32px"
            viewBox="0 0 50 50"
            // @ts-ignore
            style={{ enableBackground: 'new 0 0 50 50' }}
            xmlSpace="preserve"
          >
            <path
              fill={dashed ? `var(--scio-${type}-color)` : '#fff'}
              d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        )}
        {iconAlign == 'left' && renderIcon()}
        {children}
        {iconAlign == 'right' && renderIcon()}
      </button>
    </div>
  );
};

export default memo(Button);
