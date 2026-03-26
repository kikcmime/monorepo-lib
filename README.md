# Company Shared Library

公司前端公共库 Monorepo，集中维护「公共 UI 组件」和「公共工具方法」两类核心能力。

## 目录结构

```
company-shared-lib/
├── packages/
│   ├── ui-components/     # UI 组件包 (@company/ui-components)
│   └── utils/             # 工具方法包 (@company/utils)
├── package.json           # 根目录配置
├── pnpm-workspace.yaml    # Monorepo 工作区配置
└── tsconfig.json          # 全局 TS 配置
```

## 安装

```bash
# 安装 UI 组件包
pnpm add @company/ui-components

# 安装工具方法包
pnpm add @company/utils

# 同时安装两个包
pnpm add @company/ui-components @company/utils
```

## 使用示例

```tsx
import React from 'react';
// 从 UI 组件包导入原生 antd 组件 + 自定义组件
import { MyButton, Input, Table, Modal } from '@company/ui-components';
// 从工具包导入方法
import { formatDate, validatePhone, isEmpty } from '@company/utils';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      {/* 自定义组件 */}
      <MyButton type="primary" onClick={handleClick}>
        自定义按钮
      </MyButton>

      {/* antd 原生组件 */}
      <Input placeholder="原生 Input 组件" />

      {/* 工具方法 */}
      <p>当前日期：{formatDate(new Date())}</p>
      <p>手机号校验：{validatePhone('13800138000') ? '合法' : '非法'}</p>
    </div>
  );
};

export default App;
```

## 子包说明

### @company/ui-components

基于 antd 5.x 封装的公共 UI 组件库。

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

### 单独构建子包

```bash
# 构建 UI 组件包
cd packages/ui-components && pnpm build

# 构建工具方法包
cd packages/utils && pnpm build
```

## 发布指南

### 1. 登录 npm

```bash
# 登录公共 npm
npm login

# 或登录私有 npm
npm login --registry=https://your-private-registry.com
```

### 2. 更新版本号

```bash
# 在子包目录下执行
cd packages/ui-components
npm version patch  # 或 minor / major
```

### 3. 构建并发布

```bash
# 构建
pnpm build

# 发布
npm publish

# 发布到私有仓库
npm publish --registry=https://your-private-registry.com
```

### 4. 作用域包发布（如需要）

如果使用 `@company` 作用域，需确保：
- 在 npm 上拥有 `@company` 组织
- 或配置 `publishConfig.access` 为 `public`

```json
{
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

## 版本升级

业务项目更新公共库版本：

```bash
# 更新到最新版本
pnpm update @company/ui-components @company/utils

# 更新到指定版本
pnpm add @company/ui-components@1.1.0
```

## License

MIT
