import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  // 将 react, react-dom, antd 和 antd 相关的依赖标记为 external
  external: [
    'react',
    'react-dom',
    'antd',
    '@ant-design/icons',
  ],
  treeshake: true,
  minify: false,
  target: 'es2020',
  outDir: 'dist',
});
