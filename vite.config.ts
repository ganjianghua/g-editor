import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const __APP_INFO__ = {
  // 主题颜色
  themeMode: 'dark',
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    root: process.cwd(),
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    },
    server: {
      port: 1314,
      host: true,
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    publicDir: './public',
    build: {
      manifest: true,
      minify: 'esbuild',
    },
    plugins: [react()],
    optimizeDeps: {
      include: ['lodash-es']
    }
  };
});
