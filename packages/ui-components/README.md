# @company/ui-components

公司公共 UI 组件库，基于 antd 5.x 封装。

## 安装

```bash
pnpm add @company/ui-components
```

## 使用

```tsx
import React from 'react';
import { MyButton, Input, Table, Modal } from '@company/ui-components';

const App = () => {
  return (
    <div>
      {/* 自定义按钮组件 */}
      <MyButton type="primary">自定义按钮</MyButton>

      {/* antd 原生组件 */}
      <Input placeholder="原生 Input 组件" />
    </div>
  );
};

export default App;
```

## 包含组件

### 自定义组件
- `MyButton` - 封装的按钮组件，默认 margin: 0 8px, size: middle

###d 透传
Button, Input, Select, Table, Modal, Form, DatePicker, Upload, Menu, Tabs, Card, Tree, Dropdown, Tooltip, Popover, message, notification, ConfigProvider

## 依赖
- react >= 18.0.0
- react-dom >= 18.0.0
