import { defineConfig } from 'vite';
import react from '@vitejs/react-refresh';

export default defineConfig({
  base: '/gu-he/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
