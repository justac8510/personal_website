import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src', // Specifies 'src' as the root directory for your project
  base: "/personal_website/",
  resolve: {
    alias: {
      // This helps resolve paths like 'assets/pictures' from 'src'
      // It's good practice to define aliases for clarity and easier refactoring
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        gallery: path.resolve(__dirname, 'src/gallery.html'),
      },
    },
  },
  server: {
    // If you need to serve files from the root directory (e.g., package.json for some tools)
    // You might not need this for your current setup, but it's good to know.
    // fs: {
    //   allow: ['..'], // Allows serving files from parent directories
    // },
  },
});