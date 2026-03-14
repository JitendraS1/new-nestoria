import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    // Add bundle analyzer for optimization
    process.env.ANALYZE && visualizer({
      open: true,
      filename: 'bundle-analysis.html',
    })
  ],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    // Optimize bundle size
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'swiper-vendor': ['swiper'],
          'helmet-vendor': ['react-helmet-async'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});