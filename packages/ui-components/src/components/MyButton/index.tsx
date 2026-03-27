import React from 'react';

/**
 * 自定义 Button 组件
 * 默认 margin: 0 8px
 * - 默认 size: middle
 * - 保留 ant Button 的所有
 */
export const MyButton: React.FC<{
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  style,
  children,
  ...restProps
}) => {
  const defaultStyle: React.CSSProperties = {
    margin: '0 8px',
    ...style,
  };

  return <div style={style} >{children || '王腾飞'}</div>;
};

export default MyButton;
