import React from 'react';

/**
 * 自定义 Button 组件
 * 默认 margin: 0 8px
 */
export const MyButton: React.FC<{
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({
  style,
  children,
  className,
  onClick
}) => {
  const defaultStyle: React.CSSProperties = {
    margin: '0 8px',
    ...style,
  };

  return <div style={defaultStyle} className={className} onClick={onClick}>{children || '王腾飞'}</div>;
};

export default MyButton;
