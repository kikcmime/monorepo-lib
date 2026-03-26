# @company/utils

公司公共工具方法。

## 安装

```bash
pnpm add @company/utils
```

## 使用

```tsx
import { formatDate, validatePhone, isEmpty } from '@company/utils';

// 日期格式化
formatDate(new Date()); // '2024-01-15'
formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'); // '2024-01-15 14:30:00'

// 手机号校验
validatePhone('13800138000'); // true
validatePhone('12345678901'); // false

// 空值判断
isEmpty(null); // true
isEmpty(''); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty('hello'); // false
```

## API

### 格式化方法

#### `formatDate(date, format?)`
日期格式化，默认格式 `YYYY-MM-DD`。

| 参数 | 类型 | 说明 |
|------|------|------|
| date | Date \| string \| number | 日期对象、字符串或时间戳 |
| format | string | 格式化模板，支持 `YYYY`、`MM`、`DD`、`HH`、`mm`、`ss` |

#### `formatRelativeTime(date)`
获取相对时间描述，如"刚刚"、"5分钟前"、"昨天"等。

### 校验方法

| 方法 | 说明 |
|------|------|
| `validatePhone(phone)` | 中国大陆手机号校验 |
| `validateEmail(email)` | 邮箱校验 |
| `validateIdCard(idCard)` | 身份证号校验（15/18位） |
| `validateUrl(url)` | URL 校验 |
| `isEmpty(value)` | 空值判断（null/undefined/空字符串/空数组/空对象） |
| `isNotEmpty(value)` | 非空判断 |
