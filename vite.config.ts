import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'vitest-setup.ts',
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      include: ['src/**/*.{js,jsx,ts,tsx}', 'src/index.tsx', './vitest-setup.ts'],
    },
  },
});
