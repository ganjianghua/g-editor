import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: process.cwd(),
  server: {
    port: 1314,
    host: true,
  },
  plugins: [react()],
});