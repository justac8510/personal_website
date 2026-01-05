import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src', // Specifies 'src' as the root directory for your project
  resolve: {
    alias: {
      // This helps resolve paths like 'assets/pictures' from 'src'
      // It's good practice to define aliases for clarity and easier refactoring
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // If your index.html is in src, you might want to specify the output directory
    // to be directly in the project root, or keep it inside dist/src if preferred.
    // By default, Vite builds to 'dist' relative to the root (which is 'src' in this case)
    // To output to 'dist' in the project root:
    outDir: '../dist',
    emptyOutDir: true, // Empties the output directory before building
  },
  server: {
    // If you need to serve files from the root directory (e.g., package.json for some tools)
    // You might not need this for your current setup, but it's good to know.
    // fs: {
    //   allow: ['..'], // Allows serving files from parent directories
    // },
  },
});