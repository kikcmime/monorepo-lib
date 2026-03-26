import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';

export interface MyButtonProps extends ButtonProps {
  /** 自定义类名 */
  className?: string;
}

/**
 * 自定义 Button 组件
 * 默认 margin: 0 8px
 * - 默认 size: middle
 * - 保留 ant Button 的所有
 */
export const MyButton: React.FC<MyButtonProps> = ({
  style,
  size = 'middle',
  ...restProps
}) => {
  const defaultStyle: React.CSSProperties = {
    margin: '0 8px',
    ...style,
  };

  return <Button style={defaultStyle} size={size} {...restProps} />;
};

export default MyButton;
