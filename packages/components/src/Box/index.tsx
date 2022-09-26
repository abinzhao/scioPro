import React, { memo } from 'react';
import Type from './type';
import classNames from 'classnames';
// import Loading from '../Loading';

const Box: React.FC<Type> = (props) => {
  const {
    className,
    onClick,
    loading,
    children,
    style,
    direction,
    padding,
    margin,
    align,
    justify,
    ...rest
  } = props;

  const _PM = (arr: number[]) => {
    const _length = arr?.length || 0;
    if (_length == 1) return `${arr[0]}px`;
    if (_length == 2) return `${arr[0]}px ${arr[1]}px`;
    if (_length == 3) return `${arr[0]}px ${arr[1]}px ${arr[2]}px`;
    if (_length == 4) return `${arr[0]}px ${arr[1]}px ${arr[2]}px ${arr[3]}px`;
    return undefined;
  };

  const _styleBox: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    position: loading ? 'relative' : undefined,
    padding: _PM(padding ? padding : []),
    margin: _PM(margin ? margin : []),
    justifyContent: justify,
    alignItems: align,
  };

  return (
    <div
      className={classNames('scio-box-style', className)}
      style={{ ..._styleBox, ...style }}
      {...rest}
      onClick={onClick}
    >
      {children}
      {/* {loading && <Loading mask />} */}
    </div>
  );
};
export default memo(Box);
