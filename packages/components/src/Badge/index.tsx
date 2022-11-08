import React, { memo } from 'react';
import { TagProps } from './type';
import classnames from 'classnames';
import './index.module.less';

/**
 * Badge 徽标
 */

const Badge: React.FC<TagProps> = (props) => {
  const {
    children,
    className,
    style,
    showZero = false,
    content,
    count = 0,
    overflowCount = 99,
    dot = false,
    onClick = () => {},
  } = props;
  return (
    <div className={classnames('scio-badge', { className })} onClick={onClick}>
      {!dot ? (
        (count != 0 || !showZero) && (
          <span className={classnames('scio-badge-item')} style={style}>
            {content ? content : overflowCount == count ? `${count}+` : count}
          </span>
        )
      ) : (
        <span className={classnames('scio-badge-item-dot')}></span>
      )}
      {children && children}
    </div>
  );
};

export default memo(Badge);
