import React, { memo, useEffect, useState } from 'react';
import { PlaceholderProps } from './type';
import classnames from 'classnames';
import './index.module.less';

const Placeholder: React.FC<PlaceholderProps> = (props) => {
  const {
    className,
    style,
    onClick = () => {},
    type = '404',
    title,
    description,
    imageStyle,
    textStyle,
    ...rest
  } = props;
  // @ts-ignore
  const ImgResult = require(`./pubilc/${type}.png`);

  return (
    <div className={classnames('scio-placeholder', className)} style={style}>
      <img src={ImgResult} width={'80%'} style={imageStyle} alt={type} />
      {title && (
        <div className="title-style" style={textStyle?.titleStyle}>
          {title}
        </div>
      )}
      {description && (
        <div className="desc-style" style={textStyle?.descriptionStyle}>
          {description}
        </div>
      )}
    </div>
  );
};

export default memo(Placeholder);
