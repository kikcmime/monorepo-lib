# company-shared-lib

公司前端公共库聚合包，统一导出 UI 组件和工具方法。

## 安装

### 方式一：整体安装（推荐）

```bash
pnpm add company-shared-lib
```

### 方式二：按需安装

```bash
# 只安装 UI 组件
pnpm add @company/ui-components

# 只安装工具方法
pnpm add @company/utils
```

## 使用

```tsx
// 整体安装后，从聚合包导入
import { MyButton, Input, formatDate, validatePhone } from 'company-shared-lib';

// 或者按需从子包导入
import { MyButton } from '@company/ui-components';
import { formatDate } from '@company/utils';

const App = () => (
  <div>
    <MyButton type="primary">按钮</MyButton>
    <p>{formatDate(new Date())}</p>
  </div>
);
```

## 包含内容

- **@company/ui-components** - UI 组件库（基于 antd）
- **@company/utils** - 工具方法库
