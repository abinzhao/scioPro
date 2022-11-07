import React, { memo } from 'react';
import { TagProps } from './type';
import classnames from 'classnames';
import './index.module.less';

/**
 * Tag 标签
 */

const Tag: React.FC<TagProps> = (props) => {
  const {
    size = 'medium',
    type = 'normal',
    color = '#4f5669',
    icon,
    text,
    className,
    style,
    textStyle,
    onClick = () => {},
  } = props;
  const borderColor = (v: string) => {
    switch (v) {
      case 'blue':
        return '#4494f9';
      case 'green':
        return '#46bc15';
      case 'orange':
        return '#ff9300';
      case 'red':
        return '#ff3000';
      case 'turquoise':
        return '#01c1b2';
      case 'yellow':
        return '#fccc12';
      default:
        return v;
    }
  };

  const StyleSize = (v: string) => {
    switch (v) {
      case 'small':
        return '0px 6px';
      case 'large':
        return '3px 18px';
      default:
        return '1px 12px';
    }
  };

  const styleBorder: React.CSSProperties = {
    border: `1px solid ${borderColor(color)}`,
    backgroundColor: `${borderColor(color)}25`,
    color: borderColor(color),
    padding: StyleSize(size),
    ...style,
  };
  const primaryStyleBorder: React.CSSProperties = {
    backgroundColor: `${borderColor(color)}`,
    color: '#fff',
    padding: StyleSize(size),
    ...style,
  };
  const styleText: React.CSSProperties = {
    color: type == 'normal' ? borderColor(color) : '#fff',
    marginLeft: icon ? '4px' : undefined,
    display: 'inline-block',
    ...textStyle,
  };
  return (
    <div
      className={classnames('scio-tag', { className })}
      style={type == 'normal' ? styleBorder : primaryStyleBorder}
      onClick={onClick}
    >
      {icon && icon}
      <div style={styleText}>{text}</div>
    </div>
  );
};

export default memo(Tag);
