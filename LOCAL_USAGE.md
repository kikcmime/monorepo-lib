# 本地引用 Monorepo 项目指南

## 目录
本 monorepo 的 `packages/shared-lib` 是提供给其他项目使用的聚合包。

## 在其他项目中引用

### 方法 1: 通过 pnpm workspace 引用（推荐开发环境使用）

如果其他项目和本 monorepo 在同一个 workspace 下，可以在其他项目的 `package.json` 中添加：

```json
{
  "dependencies": {
    "company-shared-lib": "workspace:*"
  },
  "peerDependencies": {
    "antd": ">=5.12.0",
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  }
}
```

然后在工作区的 `pnpm-workspace.yaml` 中添加本 monorepo 的路径：

```yaml
packages:
  - '.'
  - '../monorepo-lib'  # 根据实际路径调整
```

### 方法 2: 通过 npm link（本地调试使用）

```bash
# 1. 在本 monorepo 中创建全局链接
cd /Users/wtf/Desktop/github/monorepo-lib
pnpm link --global

# 2. 在其他项目中链接
cd /path/to/other/project
pnpm link --global company-shared-lib

# 3. 确保其他项目安装了必要依赖
pnpm add antd react react-dom
```

### 方法 3: 通过本地路径（直接引用）

在其他项目的 `package.json` 中：

```json
{
  "dependencies": {
    "company-shared-lib": "file:../monorepo-lib/packages/shared-lib",
    "antd": ">=5.12.0"
  }
}
```

然后运行：
```bash
pnpm install
```

### 方法 4: 发布到 npm registry（生产环境使用）

```bash
# 1. 构建所有包
pnpm build

# 2. 按顺序发布
cd packages/utils
npm publish

cd ../ui-components
npm publish

cd ../shared-lib
npm publish
```

然后在其他项目中：
```bash
pnpm add company-shared-lib antd
```

## 重要依赖说明

必须确保引用的项目中已安装以下依赖：

```bash
pnpm add antd react react-dom
```

这些依赖被标记为 `peerDependencies`，需要由引用方提供。

## 使用示例

```tsx
import React from 'react';
import { MyButton, Input, formatDate } from 'company-shared-lib';

const App = () => (
  <div>
    <MyButton type="primary">自定义按钮</MyButton>
    <Input placeholder="原生 Input 组件" />
    <p>当前日期：{formatDate(new Date())}</p>
  </div>
);

export default App;
```

## 常见问题

### Q: 类型定义找不到？
A: 确保其他项目中的 `tsconfig.json` 配置正确，特别是 `moduleResolution` 应该设置为 `bundler` 或 `node`。

### Q: Antd 组件报错？
A: 确保项目中安装了匹配版本的 antd（建议 >= 5.12.0）。

### Q: 找不到 company-shared-lib？
A: 检查引用方式是否正确，确保依赖已安装。如果是路径引用，确保路径正确。

### Q: Workspace 引用不生效？
A: 确保两个项目在同一个 pnpm workspace 中，并且 `pnpm-workspace.yaml` 配置正确。
