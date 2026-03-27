# Company Shared Library

公司前端公共库 Monorepo，集中维护「公共 UI 组件」和「公共工具方法」两类核心能力。

## 目录结构

```
company-shared-lib/
├── packages/
│   ├── shared-lib/        # 聚合包 (company-shared-lib) - 整体安装
│   ├── ui-components/     # UI 组件包 (@company/ui-components)
│   └── utils/             # 工具方法包 (@company/utils)
├── package.json           # 根目录配置
├── pnpm-workspace.yaml    # Monorepo 工作区配置
└── tsconfig.json          # 全局 TS 配置
```

## 安装

### 方式一：整体安装（推荐）

一键安装所有功能：

```bash
pnpm add company-shared-lib antd
```

**注意**: 由于本包基于 antd 构建，使用时需要同时安装 antd 作为项目依赖。

### 方式二：按需安装

只安装需要的包，减小体积：

```bash
# 只安装 UI 组件（需要同时安装 antd）
pnpm add @company/ui-components antd

# 只安装工具方法（无需额外依赖）
pnpm add @company/utils
```

## 使用示例

### 整体安装后使用

```tsx
import React from 'react';
// 从聚合包统一导入所有内容
import { MyButton, Input, formatDate, validatePhone } from 'company-shared-lib';

const App = () => (
  <div>
    <MyButton type="primary">自定义按钮</MyButton>
    <Input placeholder="原生 Input 组件" />
    <p>当前日期：{formatDate(new Date())}</p>
  </div>
);

export default App;
```

### 按需安装后使用

```tsx
// 从子包分别导入
import { MyButton, Input } from '@company/ui-components';
import { formatDate, validatePhone } from '@company/utils';

const App = () => (
  <div>
    <MyButton type="primary">自定义按钮</MyButton>
    <p>当前日期：{formatDate(new Date())}</p>
    <p>手机号校验：{validatePhone('13800138000') ? '合法' : '非法'}</p>
  </div>
);

export default App;
```

## 子包说明

### company-shared-lib（聚合包）

聚合导出所有子包内容，适合需要完整功能的场景。

### @company/ui-components

基于 antd 5.x 封装的公共 UI 组件库。

**重要提示**: 本包基于 antd 构建，使用时需要项目已安装 antd。

安装时请确保:
```bash
pnpm add antd
```

**注意**: 请保持 antd 版本与我方构建时使用的版本 (^5.12.0) 兼容，类型定义才能正常工作。

- **自定义组件**：`MyButton`（默认样式：margin: 0 8px, size: middle）
- **antd 透传**：Button, Input, Select, Table, Modal, Form, DatePicker, Upload, Menu, Tabs, Card, Tree, Dropdown, Tooltip, Popover, message, notification, ConfigProvider

[详细文档](./packages/ui-components/README.md)

### @company/utils

无依赖的公共工具方法库。

- **格式化**：`formatDate`, `formatRelativeTime`
- **校验**：`validatePhone`, `validateEmail`, `validateIdCard`, `validateUrl`
- **通用**：`isEmpty`, `isNotEmpty`

[详细文档](./packages/utils/README.md)

## 开发指南

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 本地开发

```bash
# 安装依赖
pnpm install

# 开发模式（监听文件变化）
pnpm dev

# 构建所有包
pnpm build

# 清理构建产物
pnpm clean
```

## 发布指南

### 发布顺序

由于聚合包依赖子包，发布时需按顺序：

```bash
# 1. 先发布子包
cd packages/utils && npm publish
cd packages/ui-components && npm publish

# 2. 再发布聚合包
cd packages/shared-lib && npm publish
```

### 版本更新

```bash
# 更新子包版本
cd packages/utils
npm version patch

# 更新聚合包版本
cd packages/shared-lib
npm version patch
```

## License

MIT
