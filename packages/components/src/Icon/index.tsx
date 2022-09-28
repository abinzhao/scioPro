import React from 'react';
import IconType from './type';

const Icon: React.FC<IconType> = (props) => {
  const { type, className, rotate, style, spin, twoToneColor } = props;
  // @ts-ignore
  const Compon = require('@ant-design/icons')?.[type];
  return (
    <Compon
      className={className}
      rotate={rotate}
      style={style}
      spin={spin}
      twoToneColor={twoToneColor}
    />
  );
};

export default React.memo(Icon);
