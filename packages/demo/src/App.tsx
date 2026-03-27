import React, { useState } from 'react';
import {
  MyButton,
  Button,
  Input,
  Select,
  Modal,
  Card,
  Table,
  message,
} from '@company/ui-components';
import {
  formatDate,
  formatRelativeTime,
  validatePhone,
  validateEmail,
  isEmpty,
} from '@company/utils';
import type { ColumnsType } from 'antd';

const App: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleValidatePhone = () => {
    if (validatePhone(phone)) {
      message.success('手机号格式正确！');
    } else {
      message.error('手机号格式错误！');
    }
  };

  const handleValidateEmail = () => {
    if (validateEmail(email)) {
      message.success('邮箱格式正确！');
    } else {
      message.error('邮箱格式错误！');
    }
  };

  // 表格数据
  const columns: ColumnsType<{ key: string; name: string; date: string }> = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '日期', dataIndex: 'date', key: 'date' },
  ];

  const data = [
    { key: '1', name: '张三', date: formatDate(new Date()) },
    { key: '2', name: '李四', date: formatDate(Date.now() - 86400000) },
  ];

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 24, color: '#1890ff' }}>
        Company Shared Lib Demo
      </h1>

      {/* 日期格式化演示 */}
      <Card title="📅 日期格式化" style={{ marginBottom: 16 }}>
        <p><strong>当前日期：</strong>{formatDate(new Date())}</p>
        <p><strong>详细时间：</strong>{formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')}</p>
        <p><strong>相对时间：</strong>{formatRelativeTime(new Date())}</p>
        <p><strong>一小时前：</strong>{formatRelativeTime(Date.now() - 3600000)}</p>
      </Card>

      {/* 表单校验演示 */}
      <Card title="✅ 表单校验" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, alignItems: 'center' }}>
          <Input
            placeholder="请输入手机号"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: 200 }}
          />
          <MyButton type="primary" onClick={handleValidatePhone}>
            校验手机号
          </MyButton>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Input
            placeholder="请输入邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: 200 }}
          />
          <MyButton type="primary" onClick={handleValidateEmail}>
            校验邮箱
          </MyButton>
        </div>
      </Card>

      {/* UI 组件演示 */}
      <Card title="🎨 UI 组件" style={{ marginBottom: 16 }}>
        <h4 style={{ marginBottom: 8 }}>自定义 MyButton（默认 margin: 0 8px）</h4>
        <div style={{ marginBottom: 16 }}>
          <MyButton type="primary">主要按钮</MyButton>
          <MyButton>默认按钮</MyButton>
          <MyButton type="dashed">虚线按钮</MyButton>
          <MyButton danger>危险按钮</MyButton>
        </div>

        <h4 style={{ marginBottom: 8 }}>antd 原生组件</h4>
        <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
          <Button type="primary">原生 Button</Button>
          <Select
            style={{ width: 120 }}
            placeholder="选择"
            options={[
              { value: '1', label: '选项一' },
              { value: '2', label: '选项二' },
            ]}
          />
        </div>

        <MyButton type="primary" onClick={() => setModalOpen(true)}>
          打开弹窗
        </MyButton>
        <Modal
          title="弹窗标题"
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
        >
          <p>这是一个 antd Modal 组件</p>
        </Modal>
      </Card>

      {/* 表格演示 */}
      <Card title="📊 表格组件">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>

      {/* 工具方法演示 */}
      <Card title="🔧 工具方法" style={{ marginTop: 16 }}>
        <p><code>isEmpty(null)</code> = {isEmpty(null) ? 'true' : 'false'}</p>
        <p><code>isEmpty('')</code> = {isEmpty('') ? 'true' : 'false'}</p>
        <p><code>isEmpty([])</code> = {isEmpty([]) ? 'true' : 'false'}</p>
        <p><code>isEmpty('hello')</code> = {isEmpty('hello') ? 'true' : 'false'}</p>
      </Card>
    </div>
  );
};

export default App;
